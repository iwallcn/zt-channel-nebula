import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Button,
  Form,
  Input,
  Row,
  Col,
  Tabs,
  Checkbox,
  Drawer,
  Radio
} from 'ant-design-vue' //引入组件，但不用引入样式

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2497116_xm2pt5ickq.js'
})

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(Drawer)
Vue.use(Radio)

Vue.component('icon-font', IconFont)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
