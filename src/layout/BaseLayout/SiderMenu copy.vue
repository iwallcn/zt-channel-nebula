<template>
  <a-layout-sider
    :class="[`nav-theme-${theme}`]"
    v-model="collapsed"
    :trigger="null"
    :theme="theme"
    collapsedWidth="80"
  >
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
    >
      <a-sub-menu v-for="menu in menus" :key="menu.id" style="text-align: left">
        <span slot="title">
          <icon-font type="icon-file" /><span>{{ menu.name }}</span></span
        >
        <a-menu-item
          v-for="subMenu in menu.children"
          :key="subMenu.id"
          :theme="theme"
        >
          {{ subMenu.name }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { systemList } from '../../mock/menu'
export default {
  name: 'SiderMenu',
  props: {
    currentNavId: Number,
    collapsed: {
      type: Boolean,
      default: false
    },
    theme: String
  },
  data() {
    return {
      menus: []
    }
  },
  created() {
    console.log(this.theme, 678)
    this.menus = systemList[this.currentNavId - 1].menu
  },
  watch: {
    currentNavId() {
      this.menus = systemList[this.currentNavId - 1].menu
    }
  }
}
</script>

<style lang="less" scoped>
.nav-theme-light {
  background: #fff;
  width: 200px;
}
.nav-theme-dark {
  width: 200px;
  ul {
    background: #000 !important;
    color: #fff;
  }
}
</style>
