<template>
  <a-layout class="layout">
    <!--头部系统菜单-->
    <a-layout-header>
      <Header :collapsed="collapsed" @changeCollapsed="changeCollapsed" />
    </a-layout-header>

    <a-layout>
      <a-layout-sider
        v-if="currentNavId != 1"
        :class="[`nav-theme-${navTheme}`]"
        v-model="collapsed"
        :trigger="null"
        :theme="navTheme"
        collapsedWidth="80"
      >
        <!-- 左侧菜单 -->
        <sider-menu :theme="navTheme" :currentNavId="currentNavId" />
      </a-layout-sider>

      <a-layout class="layout-content">
        <!-- 右侧路由导航 -->
        <Breadcrumb></Breadcrumb>

        <!-- 内容填充 -->
        <a-layout-content class="layout-content-wrapper">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>

      <!--偏好设置-->
      <setting-drawer />
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header'
import SiderMenu from './SiderMenu'
import Breadcrumb from './Breadcrumb'
import SettingDrawer from '../../components/SettingDrawer'
import { mapGetters } from 'vuex'
export default {
  data() {
    this.routes = this.$router.options.routes
    return {
      collapsed: false,
      initMenuData: []
    }
  },
  computed: {
    ...mapGetters('app', ['currentNavId', 'navTheme'])
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    }
  },
  components: {
    Header,
    SiderMenu,
    Breadcrumb,
    SettingDrawer
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
