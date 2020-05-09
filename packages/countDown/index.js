// 导入组件，组件必须声明 name
import wCountDown from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
wCountDown.install = function (Vue) {
    Vue.component(wCountDown.name, wCountDown)
}

export default wCountDown
