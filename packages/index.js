import wInput from './input/index'
import wButton from './button/index'
import wCountDown from './countDown/index'

const components = [wInput, wButton, wCountDown]; // 将上述组件保存到一个数组

// 定义install方法，它将作为export暴露的对象的方法被Vue.use调用
const install = function(Vue){
	// 判断当前组件是否已被安装过，如果已安装过则不再安装
    if(install.installed) return;
    install.installed = true;

    // 遍历components数组，依次注册每个组件
    components.map(component => {
        Vue.component(component.name, component);
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}
export default{
    install,
    ...components    //将插件暴露出去，这样可以按需引入
}
