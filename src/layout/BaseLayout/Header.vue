<template>
  <a-layout-header class="header-nav">
    <div class="logo">
      <!-- <img src="https://www.ztn.cn/img/new/logo.png" /> -->
    </div>
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    />
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
  props: {
    collapsed: Boolean
  },
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
      let menuSelect = this.systemList[item.key - 1]
      this.$router.push({ path: menuSelect.url })
      this.SET_CURRENT_NavId(item.key)
    },
    // 伸缩菜单显隐
    changeCollapsed() {
      this.$emit('changeCollapsed')
    }
  }
}
</script>

<style lang="less" scoped>
.header-nav {
  display: flex;
  .logo {
  }
  .trigger {
    color: #fff;
    font-size: 22px;
    padding: 20px 17px;
    height: 100%;
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
