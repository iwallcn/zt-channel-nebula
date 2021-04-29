<template>
  <a-layout-header class="header-nav">
    <div class="logo"></div>
    <a-menu
      class="header-menu"
      theme="dark"
      mode="horizontal"
      :default-selected-keys="[currentNavId]"
      :style="{ lineHeight: '64px' }"
      @click="handleNavChange"
    >
      <a-menu-item v-for="item in systemList" :key="item.id">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
    <div class="header-tool">
      tool
    </div>
  </a-layout-header>
</template>

<script>
import { systemList } from '../../mock/menu'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      systemList
    }
  },
  created() {},
  computed: {
    ...mapGetters('app', ['currentNavId'])
  },
  methods: {
    ...mapMutations('app', ['SET_CURRENT_NavId']),
    // 头部菜单切换 点击工作台没有左侧菜单，点击其他的切换左侧菜单
    handleNavChange(item) {
      if (item.key === 1) {
        let menuSelect = this.systemList[item.key - 1]
        this.$router.push(menuSelect.url)
      }
      this.SET_CURRENT_NavId(item.key)
    }
  }
}
</script>

<style lang="less" scoped>
.header-nav {
  display: flex;
  .logo {
  }
  .header-menu {
    flex: 1;
    text-align: left;
  }
  .header-tool {
    width: 300px;
  }
}
</style>
