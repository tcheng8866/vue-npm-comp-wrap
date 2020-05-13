<template>
  <div class="page">
    <div class="wrap">
      <!-- （tel实际上是一种text类型）手机端会唤醒数字键盘 -->
      <!-- （number 可以输入（-）、多个小数点、所以最好输入不控制、但提交时正则拦截、输入控制会有兼容性问题-->
      <w-input
        :label="labelTel"
        v-model.trim="modelTel"
        maxlength="11"
        type="number"
        placeholder="测试Number length"
      ></w-input>
      <!-- type="tel": 用的是input自带的属性；:type="telModel" 这种是写在data传入组件 -->
      <w-input
        :label="labelNumber"
        v-model.trim="modelNumber"
        :disabled="disabled"
        :maxlength="maxlength"
        type="number"
        placeholder="测试Number length"
      ></w-input>
      <w-button :disabled="disabled" @click="bindClick()">测试</w-button>
      <!-- 倒计时 -->
      <w-count-down :countDown="countDown" @click="handClick()"></w-count-down>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  props: {},
  data() {
    return {
      labelTel: "电话",
      modelTel: "18702906728",
      labelNumber: '测试数字',
      modelNumber: "18702906728",
      disabled: false,
      maxlength: '11',

      countDown: '5'
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    bindClick() {
      console.log(this.modelTel);
      console.log(this.modelNumber);
      // 不存在时机问题： 默认可以点击、点击一次后禁止点击
      this.disabled = true;
    },
    handClick() {
      console.log("倒计时！")
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
