import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/common.less'
import { Layout, Menu, Breadcrumb, Icon } from 'ant-design-vue' //引入组件，但不用引入样式

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2497116_xm2pt5ickq.js'
})

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Icon)
Vue.component('icon-font', IconFont)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
