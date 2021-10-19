import Toast from './Toast.vue'

const obj = {}
obj.install = function(Vue){
    const FeatureComponent = Vue.extend(Toast);

    let el = document.createElement('div')
    document.body.appendChild(el);

    let toast = new FeatureComponent()
    toast.$mount(el);
    Vue.prototype.$toast = toast;
    // console.log(Toast);
    // console.log(toast);
}

export default obj