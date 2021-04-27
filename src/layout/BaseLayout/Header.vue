<template>
  <a-layout-header class="header">
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['3']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item v-for="(item, index) in systemList" :key="index">
        {{ item }}
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      systemList: {
        0: '首页',
        1: '工作台',
        2: '轨迹管理',
        3: 'SRM系统',
        4: 'CMS系统',
        5: 'TMS系统',
        6: 'WMS系统'
      }
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
