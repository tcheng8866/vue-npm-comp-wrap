// 导入组件，组件必须声明 name
import wButton from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
wButton.install = function (Vue) {
    Vue.component(wButton.name, wButton)
}

export default wButton
