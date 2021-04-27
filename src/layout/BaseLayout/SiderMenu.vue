<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu v-for="menu in menus" :key="menu.id">
        <span slot="title"> <icon-font type="icon-file" />{{ menu.name }}</span>
        <a-menu-item v-for="subMenu in menu.children" :key="subMenu.id">
          {{ subMenu.name }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { menus } from './data'
export default {
  name: 'SiderMenu',
  data() {
    return {
      menus: menus
    }
  },
  created() {
    console.log(menus)
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
