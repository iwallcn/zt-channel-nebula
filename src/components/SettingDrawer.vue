<template>
  <a-drawer
    title="偏好设置"
    placement="right"
    :closable="false"
    :visible="visible"
    @close="onClose"
    width="256"
  >
    <!-- 自定义设置按钮 -->
    <template v-slot:handle>
      <div class="setting" @click="visible = !visible">
        <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
      </div>
    </template>

    <h4>风格设置</h4>
    <a-radio-group
      name="radioGroup"
      :default-value="theme"
      @change="changeTheme"
    >
      <a-radio value="dark">
        黑色
      </a-radio>
      <a-radio value="light">
        亮色
      </a-radio>
    </a-radio-group>
    <h4>主题色设置</h4>

    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters('app', ['theme'])
  },
  methods: {
    ...mapMutations('app', ['SET_THEME']),
    changeTheme(e) {
      this.SET_THEME(e.target.value)
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>
<style scope>
.setting {
  position: absolute;
  top: 240px;
  right: 256px;
  background: #5a76e4;
  color: #fff;
  text-align: center;
  font-size: 20px;
  padding: 6px 11px;
  cursor: pointer;
  border-radius: 8px 0 0 8px;
}
</style>
