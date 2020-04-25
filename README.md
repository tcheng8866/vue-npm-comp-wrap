# "comp-wrap" 简介
这是一个常用vue组件的封装插件。目前已完成wInput, wButton等, 其他组件正在开发暴露中......
#
组件使用
1.安装组件
npm install comp-wrap
2.main.js引入组件
import compWrap from 'comp-wrap'
import 'comp-wrap/lib/comp-wrap.css'
Vue.use(compWrap)
(注：1.需要引入样式文件，2.支持部分安装)

## 组件使用
wInput：传入label/v-model/maxlength/type/placeholder/disabled
     <w-input
        :label="label"
        v-model.trim="modelTel"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      ></w-input>
	  
wButton：插槽传入button名称；	disabled  @click
	 <w-button 
	 :disabled="disabled"
	  @click="bindClick()"
	 >测试</w-button>