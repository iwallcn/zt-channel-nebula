<template>
  <a-layout id="components-layout-demo-top-side-2" style="height: 100vh;">
    <!--头部系统菜单-->
    <Header :collapsed="collapsed" @changeCollapsed="changeCollapsed"></Header>

    <a-layout>
      <!-- 当前是工作台时，不显示左侧菜单 -->
      <sider-menu
        v-if="currentNavId != 1"
        :currentNavId="currentNavId"
        :collapsed="collapsed"
      ></sider-menu>

      <a-layout style="padding: 0 24px 24px">
        <Breadcrumb></Breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px'
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header'
import Home from './Home'
import SiderMenu from './SiderMenu'
import Breadcrumb from './Breadcrumb'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      collapsed: false
    }
  },
  created() {},
  computed: {
    ...mapGetters('app', ['currentNavId'])
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    }
  },
  components: {
    Header,
    Home,
    SiderMenu,
    Breadcrumb
  }
}
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
