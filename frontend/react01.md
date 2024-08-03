---
outline: deep
---

# React

## React 组件分类

### 函数组件 新版本写法

```javascript
function App() {
  return (
    <div>Hello React</div>
  )
}
```

### 类组件 老版本写法

```javascript
class App extends React.Component {
  render() {
    return (
      <div>Hello React</div>
    )
  }
}
```

## React中的响应式数据

### setState 工作流程

调用setState → 给入一个对象 → 给入的对象和state对象进行浅合并 → 合并后调用更新方法进行更新

调用setState方法会触发更新，修改state不会触发更新。

由于是浅合并，因此在修改的时候要注意原对象的结构。否则会直接替换。

```javascript
class App extends React.Component {
  state = {
    a: 0,
    b: {
      b1: 123,
      b2: 456,
    },
    add: () => {
      this.setState({
        a: this.state.a + 1,
        b: {
          b1: this.state.b.b1 + 1,
          b2: this.state.b.b2 + 1,
        },
      })
    },

    render() {
      return (
        <div>
          <p>{this.state.a}</p>
          <p>{this.state.b.b1}</p>
          <button onClick={this.add}>add</button>
        </div>
      )
    },
  }
}
```

### setState 注意事项

- setState是异步的，不能立刻获取更新后的state，需要在setState的第二个参数中获取。

### setState 特性

- setState方法多次修改，会合并为一次，统一更新。

- setState返回会触发更新，无论是否有修改。这造成了一个问题，重复修改为相同的值也会触发更新。可以用pureComponent来解决。

- 不要在render方法中调用setState，会造成死循环。

### pureComponent 下对于对象和数组的修改

是通过内存地址来判断是否有修改的，因此在pureComponent中修改数组/对象的话不会触发更新。要修改的话，先解除引用再赋予一个新数组/对象，`let _arr = [...this.state.arr]`。在Component中没有这种问题。

## React中的条件渲染

### 条件渲染的本质

1. react渲染undefined，null，空字符串，false，不会渲染任何内容。

2. 如果渲染一个jsx编写的html元素，就会渲染成页面上的内容。

### 条件渲染编写

只要做到这样一个操作就可以：

1. 编写一个js逻辑运算。如论是用`if` `else`，还是`? :`，还是`&&`，都可以。

2. 返回false或者空字符串时不渲染任何内容，为true时返回要显示的html内容。

```javascript
class App extends React.Component {
  state = {
    show: true,
  }

  render() {
    return (
      <div>

        {this.state.show && <p>Hello React</p>}
      </div>
    )
  }
}
```

## React中的列表循环

### 列表循环的本质

1. 渲染一个数组会把数组里的每一项单独取出渲染。

2. 编写一个里面存放的都是html元素的数组，就会渲染成列表。

原数据 → 循环 → 把原数组生成为一个存放列表每一行元素的新数组 → Jsx渲染存储html元素的新数组，渲染为列表。

### 列表循环编写

可以用for循环，filter方法，也可以用map方法。建议用map方法，因为map方法可以返回一个新的数组。

```javascript
//函数式组件
function App() {
  const [list, setList] = useState([
    { name: 'apple', price: 10 },
    { name: 'banana', price: 20 },
    { name: 'orange', price: 30 },
  ])

  const addData = () => {
    // 创建一个新的列表，而不是直接修改现有的状态
    const newList = [
      ...list,
      { name: 'grape', price: 40 },
      { name: 'peach', price: 50 },
    ]
    setList(newList)
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={addData}>Add Data</button>
    </div>
  )
}
```