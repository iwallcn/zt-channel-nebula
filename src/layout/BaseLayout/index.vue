<template>
  <a-layout id="components-layout-demo-top-side-2" style="height: 100vh;">
    <Header></Header>
    <a-layout>
      <sider-menu></sider-menu>
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
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header'
import SiderMenu from './SiderMenu'
import Breadcrumb from './Breadcrumb'
export default {
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    Header,
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
