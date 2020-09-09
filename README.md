# "comp-wrap" 简介
这是一个常用vue组件的封装插件。目前已完成wInput, wButton等, 其他组件正在开发暴露中......

## 安装组件

- npm install comp-wrap

##  引入组件

- import compWrap from 'comp-wrap'

- Vue.use(compWrap)


## 组件说明

##  wInput
-  考虑到label和input经常一起出现，且input标签在text="number"时存在maxlength失效的Bug，有必要封装到一个组件并解决此Bug

- 本着简单、且兼容input标签的原则，设置组件属性时尽可能使用和input标签同名的属性。

- 例如： maxleng="maxleng"，此时是input标签的属性；但 :maxleng="maxleng" 就是传入组件props的属性，同样type="text"和：type="type" 也是兼容的。

- 示例：<w-input :label="电话号码" v-model.trim="idCard" type="number" maxlength="11" :disabled="disabled"></w-input>

##  wButton
-  考虑到button存在 font-size/font-family 默认不继承父元素属性，且主按钮点击置灰、设置disabled等需要大量非业务逻辑处理。有必要封装主按钮、提供disabled切换及按钮置灰功能。

- 本着简单、且兼容button标签的原则，设置组件属性时尽可能使用和button标签同名的属性;传入按钮名称使用插槽的方式。

- 示例：<w-button :disabled="disabled" @click="bindClick()">测试</w-button>

##  countDown
-  倒计时组件：封装要点：1. 10s倒计时从显示从10开始不是9；2.props传入的countDown和组件里time的赋值和显示关系

- 示例：<w-count-down :countDown="30" @click="handClick()"></w-count-down>

