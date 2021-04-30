<template>
  <a-layout-sider
    class="layoutSider"
    v-model="collapsed"
    :trigger="null"
    collapsedWidth="80"
  >
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
    >
      <a-sub-menu v-for="menu in menus" :key="menu.id" class="zt-sub-Menu">
        <span slot="title">
          <icon-font type="icon-file" /><span>{{ menu.name }}</span></span
        >
        <a-menu-item v-for="subMenu in menu.children" :key="subMenu.id">
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
    collapsed: false
  },
  data() {
    return {
      menus: []
    }
  },
  created() {
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
.layoutSider {
  background: #fff;
  width: 200px;
}
.zt-sub-Menu {
  text-align: left;
}
</style>
