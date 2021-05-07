<template>
  <div class="layout-header">
    <div class="layout-header-logo">
      <!-- <img src="https://www.ztn.cn/img/new/logo.png" /> -->
    </div>
    <a-icon
      class="layout-header-trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    />
    <a-menu
      class="layout-header-menu"
      theme="dark"
      mode="horizontal"
      :default-selected-keys="[currentNavId]"
      @click="handleNavChange"
    >
      <a-menu-item v-for="item in systemList" :key="item.id">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
    <div class="header-tool">
      tool
    </div>
  </div>
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
    // 头部系统切换，并保存当前选中系统id到vuex中
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
