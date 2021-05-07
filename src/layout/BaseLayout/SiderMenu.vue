<template>
  <a-menu
    class="layout-side-menu"
    :selectedKeys="selectedKeys"
    :openKeys.sync="openKeys"
    mode="inline"
    :theme="theme"
  >
    <template v-for="item in menuData">
      <a-menu-item
        v-if="!item.children"
        :key="item.path"
        @click="() => $router.push({ path: item.path })"
      >
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
import SubMenu from './SubMenu'
export default {
  components: {
    'sub-menu': SubMenu
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    currentNavId: {
      type: Number
    }
  },
  data() {
    this.selectedKeysMap = {}
    this.openKeysMap = {}
    this.routes = this.$router.options.routes
    return {
      collapsed: false,
      menuData: [],
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
    }
  },
  watch: {
    // 深度监听路由：初始化菜单高亮，菜单展开，初始化菜单列表
    '$route.path': {
      handler(val) {
        this.selectedKeys = this.selectedKeysMap[val]
        this.openKeys = this.collapsed ? [] : this.openKeysMap[val]
        this.initMenuData()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 初始化左侧菜单
    initMenuData() {
      const initMenuData = this.routes[1].children[this.currentNavId].children
      this.menuData = this.getMenuData(initMenuData)
    },
    // 根据路由配置获取菜单，存储一份路由和菜单对应的关系
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = []
      routes.forEach(item => {
        // 只递归带有name，并且!hideInMenu的菜单
        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys
          this.selectedKeysMap[item.path] = [selectedKey || item.path]
          const newItem = { ...item }
          delete newItem.children
          if (item.children && !item.hideChildrenMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ])
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            )
          }
          menuData.push(newItem)
        } else if (!item.hideInMenu && item.children) {
          // 针对path:'/' 根路由
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          )
        }
      })
      return menuData
    }
  }
}
</script>
