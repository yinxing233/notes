---
outline: deep
---

# Vue 源码

https://github.com/vuejs/core/tree/main/packages

## compile 和 runtime

### 编译过程 compile

template script style 都需要去解析

AST -> transform -> generate render函数

sfc : Single file component，单文件组件，`.vue` 文件。

由于浏览器不认识 `.vue` 文件，所以需要先将 `.vue` 文件编译成浏览器认识的 `JavaScript` 文件。

- compile-sfc: 编译单文件组件 `.vue`
- compile-dom: 编译在html文件里写的vue代码
- compile-ssr: 编译服务端渲染的vue代码
- compile-core: 编译vue核心代码，上面的都可以复用其中的功能

### 运行过程 runtime

运行过程，代码都在浏览器里面跑起来了，因此没有runtime-sfc。

### shared

和utils差不多，一些公共的工具函数都在里面。

## 响应式代码

### ref

```ts
//ref.ts

import { reactive } from "./reactive"
import { tracker,trigger } from "./effect"
const isObject = (value) => {
    return value !== null && typeof value === 'object'
}
/**
 * 其实ref碰到引用类型也是调用的reactive
 * @param value 
 * @returns 
 */
const toReacrive = (value) => {
    return isObject(value) ? reactive(value) : value
}

/**
 * ref 支持普通类型还支持引用类型
 * @param value 
 */
export const ref = <T>(value:T) => {
  return new RefImpl<T>(value)
}


class RefImpl<T> {
    private _value: T
    constructor (value) {
       this._value = toReacrive(value)
    }

    get value ():T {
        tracker(this,'value')
        return this._value
    }
    set value (value) {
        if(value == this._value) return
        this._value = toReacrive(value)
        trigger(this,'value')
    }
}
```

### reactive

```ts
//reactive.ts
import { tracker,trigger } from "./effect"
//T extends object 泛型约束 只能传入引用类型
export const reactive = <T extends object>(value:T) => {
    return new Proxy(value,{
        get(target,key,receiver){
            let res = Reflect.get(target,key,receiver)
            tracker(target,key)
            return res
        },
        set(target,key,value,receiver){
            let res = Reflect.set(target,key,value,receiver)
            trigger(target,key)
            return res
        }
    })
}
```

### effect

```ts
//effect.ts
let activeEffect
interface Options {
    lazy:boolean
    scheduler:() => void
}
export const effect = (fn:Function,options?:Options) => {
    const _effect = () => {
        activeEffect = _effect
        const res = fn()
        return res
    }
    _effect.options = options //因为trigger的时候要用
    if(options && options.lazy){
        //如果是lazy 就不自动调用
        return _effect
    }else{
        //如果不是lazy 就自动调用
        _effect()
        return _effect
    }
    
    
}

//容器存放依赖
let targetMap = new WeakMap()
//1.收集依赖
export const tracker = (target,key) => {
    let depsMap = targetMap.get(target)
    //因为第一次没有值 默认值
    if(!depsMap){
        depsMap = new Map()
        targetMap.set(target,depsMap)
    }
    let deps = depsMap.get(key)
    if(!deps){
        deps = new Set()
        depsMap.set(key,deps)
    }
    deps.add(activeEffect)
}


//2.更新依赖
export const trigger = (target,key) => {
   let depsMap = targetMap.get(target)
   let deps:Set<any> = depsMap.get(key)
   deps.forEach(effect => {
       if(effect.options && effect.options.scheduler){
           effect.options.scheduler(effect)
       }else{
           effect()
       }
   })
}
```

### computed

```ts
//computed.ts
import { effect } from "./effect"

export const computed = (getter: Function) => {
    let dirty = true //缓存 只有依赖发生改变才会重新计算
    let value
    const _value = effect(getter,{
        lazy:true,
        scheduler() {
            dirty = true
        }
    })

    class ComputedRefImp {
        get value() {
            if(dirty){
                value = _value()
                dirty = false
            }
            return value
        }
    }

    return new ComputedRefImp()
}
```

### watch
```ts
//watch.ts
import { effect } from "./effect"
interface Options {
    immediate?: boolean
    flush?: 'sync' | 'post' | 'pre'
}
const traverse = (target, seen = new Set()) => {
    if (typeof target != 'object' || target === null || seen.has(target)) return
    seen.add(target)
    for (let key in target) {
        traverse(target[key], seen)
    }
    return target
}
export const watch = (target: any, cb: Function, options?: Options) => {
    //1.格式化参数 格式化成 getter函数
    let getter: Function
    if (typeof target === 'function') {
        getter = target
    } else {
        getter = () => traverse(target)
    }
    //2.返回值
    let newVal, oldVal
  
    const job = () => {
        newVal = effectFn() //newVal 大满2
        cb(newVal, oldVal)  
        oldVal = newVal //oldVal 大满
    }
    const flushPost = () => {
        return Promise.resolve().then(job)
    }
    //依赖发生变化执行job 
    const effectFn = effect(getter, {
        lazy: true,
        scheduler:options.flush === 'post' ? flushPost : job
    })
    //3.参数immediate
    if(options && options.immediate){
        options.flush === 'post' ? flushPost() : job()
    }else{
        oldVal = effectFn() //oldVal 小满
    }
}
```

## 渲染器
### renderer
```ts
//renderer.ts
import { Vnode } from "./vnode"

const createRenderer = () => {
    const unmount = (vnode: Vnode) => {
        const p = vnode.el.parentNode
        p && p.removeChild(vnode.el)
    }
    const setElementText = (el: HTMLElement, text) => {
        el.textContent = text
    }
    const insert = (el: HTMLElement, parent, anchor = null) => {
        parent.insertBefore(el, anchor)
        //el newNode 插入的新元素
        //anchor 新元素插入的位置 他可以是null 新元素就会插入末尾
        //如果指定了anchor 就会插入他的前面
        //很常用的好用 diff算法也会用到
    }
    const createElement = (tag) => {
        return document.createElement(tag)
    }
    const mountElemt = (vnode: Vnode, container) => {
        const root = createElement(vnode.tag)
        vnode.el = root //挂载的时候顺便把真实的dom添加上去 添加上去就能读到了
        if (typeof vnode.children === 'string') {
            //给元素插入文本就行了
            setElementText(root, vnode.children)
        } else if (Array.isArray(vnode.children)) {
            //在这儿做
            vnode.children.forEach(child => {
                patch(null, child, root)
            })
        }
        insert(root, container)
    }
    const patchElement = (n1, n2) => {
        const el = n2.el = n1.el //复制一份element 给新的Vnode
        patchChildren(n1, n2, el)
    }
    const patchChildren = (n1: Vnode, n2: Vnode, container) => {
        n2.el = n1.el;
        if (typeof n2.children === 'string') {
            //只是文字内容变了
            setElementText(container, n2.children)
        } else if (Array.isArray(n2.children)) {
            //新增或者删除了
            if (Array.isArray(n1.children)) {
                n1.children.forEach(child => unmount(child))
                n2.children.forEach(child => patch(null, child, container))
            } else {
                n2.children.forEach(child => patch(null, child, container))
            }
        }
    }
    const patchKeyChildren = () => {
       //1.手写diff算法 + 最长递增子序列
    }
    const patch = (n1, n2, container) => {
        if (!n1) {
            //挂载
            //console.log('挂载')
            mountElemt(n2, container)
        } else {
            //更新
            patchElement(n1, n2)
            // console.log(n1,n2,'更新')
        }
    }
    const render = (vnode: Vnode, container) => {
        if (vnode) {
            //创建
            patch(container._vnode, vnode, container)
        } else {
            //不存在一会儿再说
            if(container._vnode){
                unmount(container._vnode)
            }
        }
        container._vnode = vnode //挂载旧的虚拟dom
    }
    return {
        render
    }
}



export const createApp = (vnode) => {
    const renderer = createRenderer()
    return {
        mount(container) {
            renderer.render(vnode, container)
        }
    }
}
```

### vnode
```ts
//vnode.ts
interface Component {
    render():Vnode
    data():object
    setup():object
    created():void
    beforeMount():void
    mounted():void
}
/**
 * 虚拟dom
 * 为什么要有虚拟dom？
 * 因为interface 在编译之后会被删掉的 而class不会
 */
export class Vnode {
   tag:string | Component //标签div p | 组件
   el?:HTMLElement //真实的dom
   key?:string | number
   children?:Vnode[] | string
}
```