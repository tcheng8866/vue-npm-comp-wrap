<template>
  <button
    :class="[disabled ? 'disabled' : '']"
    @click="bindClick()"
  >
    <slot></slot>
  </button>
</template>

<script type="text/javascript">
export default {
  name: 'wButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    bindClick() {
      // 不存在时机问题： 默认可以点击、点击一次后禁止点击
      if (this.disabled) return;
      this.$emit("click");
    }
  }
};
</script>
<style lang="less" scoped>
button {
  width: 100%;
  height: 40px;
  padding: 0;
  margin-top: 20px;  // button默认是inline-block；竖直方向margin不会重叠
  font-size: 16px;
  font-family: inherit;  //  initial（默认）和 inherit（继承） unset(不设置)
  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(97deg, #32aef4 0%, #0084cf 81%);
  border: none;
  border-radius: 3px;
}
.disabled {
  background: #cccccc;
}
</style>
