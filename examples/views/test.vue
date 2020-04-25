<template>
  <div class="page">
    <div class="wrap">
      <!-- （tel实际上是一种text类型）手机端会唤醒数字键盘 -->
      <!-- （number 可以输入（-）、多个小数点、所以最好输入不控制、但提交时正则拦截、输入控制会有兼容性问题-->
      <w-input
        :label="label"
        v-model.trim="modelName"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      ></w-input>
<!--      <w-input
        :label="label"
        v-model.trim="modelTel"
        :maxlength="maxlength"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
      ></w-input> -->
      <w-button :disabled="disabled" @click="bindClick()">测试</w-button>
    </div>
  </div>
</template>

<script>
// import wInput from "../../packages/input/input.vue";
// import wButton from "../../packages/button/button.vue";
export default {
  name: "",
  mixins: [],
  // components: { wInput, wButton },
  props: {},
  data() {
    return {
      label: "电话号码：",
      modelName: '两行测一下',
      modelTel: "18702906728",
      maxlength: 1000,
      type: "tel",
      placeholder: "",
      disabled: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    bindClick() {
      // 不存在时机问题： 默认可以点击、点击一次后禁止点击
      console.log(this.modelTel);
      this.disabled = true;
    }
  }
};
</script>
<style scoped lang="less">
.page {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fafafa; //灰色
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  .wrap {
    background-color: #ffffff;
    height: 100%;
  }
}
.labelClass {
  fontsize: 30px;
}
</style>
