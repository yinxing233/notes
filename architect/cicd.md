---
outline: deep
---

# CI / CD

## 介绍

持续集成（Continuous Integration，简称CI）和持续交付（Continuous Delivery/Deployment，简称CD）是DevOps领域两个重要的概念。

CI（Continuous Integration）指的是“频繁地集成”，Continuous也有“频繁地”意思，所以翻译成持续集成并不准确，CD也是一样。

频繁地集成导致一个问题，就是每次集成都需要做的构建和测试工作也相应地变得频繁，因此需要自动化的构建和测试。CI/CD方案的关键词就是“自动化”。

所以CI、CD都要求自动化的操作。代码格式检查、单测、集成、安装依赖、构建、测试、部署。形成一个自动化的“流水线”。

最理想的情况就是开发提交代码或者pull/request之后，后续流程都自动化进行。

你的业务可能适合CI，但代码要定期评审以保证质量，那你需要的可能不是CD，而是一个自动构建和部署工具，例如Jenkins。

而如果你的业务是定期发布版本，你连CI也不需要，只需要一个发布版本的代码review、测试、集成的流程。


## 集成的自动化

我们希望在提交代码时候，自动执行代码的单测、代码格式校验等操作，git hook为我们提供了支持。

git支持在重要动作发生时触发自定义脚本 Git 钩子，通常我们关注commit钩子。

工具husky封装了git hook，让开发者可以更轻松地使用git hook，你需要做的仅仅是安装它，然后在package.json中配置hook脚本命令。

## 构建和部署自动化

### github和gitlab的支持

我们希望在代码集成后，自动地进行构建和部署，git的远程仓库github和gitlab都支持持续集成。

github提供 GitHub Actions来支持自动化、自定义和执行软件开发工作流程。

下面重点说一下使用gitlab实现ci/cd。

git给其他平台发送消息来触发流程，以实现自动化流程。当事件（如代码提交或者merge）发生时候主要有两种方式通知你的平台：

1.  通过网络请求，webhook，整个构建流程由自己的平台执行，执行过程的可视化也由自己的平台实现。

2. 通过git-ci功能，和平台上的runner通信，然后执行自定义脚本来实现自动化构建部署，git根据配置的文件（git-ci.yaml）来执行脚本，git也实现了流程的可视化，你可以在gitlab上看到执行流水线到了哪一步，执行结果成功或者失败这些信息。

### webhook

在gitlab仓库中可以配置webhook，gitlab会在触发事件时候，通过配置到gitlab的链接发送请求，用户需要在自己的服务器接收到请求之后做自动化的构建和部署。比如我们可以配置gitlab代码提交后，自动触发Jenkins构建：利用gitlab的webhook触发jenkins。

### gitlab ci

gitlab支持在触发开发者关注的事件时候，通知你的服务器做自动化操作，操作的结果以可视化形式展示在gitlab。

这种方式和webhook有一些不同：使用gitlab-ci，gitlab帮你执行自定义脚本（但是实际执行的脚本操作还是在自己的服务器上），webhook只是简单地通知你事件，至于做什么操作都是自己定义的；使用gitlab-ci，结果可以可视化。

使用gitlab ci步骤如下

1. 服务器安装gitlab的runner，这个runner是一个用来和gitlab通信，并执行自定义脚本的程序，当然安装好后需要初始化，把runner注册到gitlab。

2. 项目配置gitlab-ci.yaml，定义自动化构建和部署的脚本。

3. 每次团队成员push/merge后之后触发。每当你push/merge一次，gitlab-ci都会检查项目下有没有.gitlab-ci.yml文件，如果有，它会通知注册的平台上面运行的runner，让runner执行自定义脚本。

### ci/cd平台

tranvis，使用这些平台，它们会和你的git仓库打通，你要做的就是授权平台和定义自己的自动化构建和部署脚本，然后就可以在平台上管理和查看流程了。

## 总结
CI/CD的流程大致是
1. git操作，一般是merge
2. 触发webhook，通知runner
3. runner根据脚本执行拉代码、单测、代码检测、构建、部署等操作。
实现CI/CD，开发者需要实现4个方面
1. 注册webhook
2. 实现runner
3. 实现runner和git仓库通信
4. 实现具体的脚本