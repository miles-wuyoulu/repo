import Vue from 'vue'
import App from './App.vue'

//引入组件库
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Card,
  Input,
  Button
} from 'element-ui';

// 引入组件库插件
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside)
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Input);
Vue.use(Button);

// 引入并使用路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入路由配置文件
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 声明路由对象，全局使用
  router
}).$mount('#app')
