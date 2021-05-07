<template>
  <a-layout class="layout">
    <!--头部系统菜单-->
    <Header :collapsed="collapsed" @changeCollapsed="changeCollapsed" />

    <a-layout>
      <a-layout-sider
        v-if="currentNavId != 1"
        :class="[`nav-theme-${theme}`]"
        v-model="collapsed"
        :trigger="null"
        :theme="theme"
        width="256"
        collapsedWidth="80"
      >
        <!-- 左侧菜单 -->
        <sider-menu
          :theme="theme"
          :currentNavId="currentNavId"
          :collapsed="collapsed"
        />
      </a-layout-sider>

      <a-layout class="layout-content">
        <!-- 路由导航页签 -->
        <tag-view></tag-view>

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
import SettingDrawer from '../../components/SettingDrawer'
import TagView from '../../components/TagView'
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
    ...mapGetters('app', ['currentNavId', 'theme'])
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    }
  },
  components: {
    Header,
    SiderMenu,
    SettingDrawer,
    TagView
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
