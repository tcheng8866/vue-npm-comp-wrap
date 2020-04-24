<template>
  <div class="page">
    <div class="wrap">
      <!-- （tel实际上是一种text类型）手机端会唤醒数字键盘 -->
      <!-- （number 可以输入（-）、多个小数点、所以最好输入不控制、但提交时正则拦截、输入控制会有兼容性问题-->
      <w-input :label="label" v-model.trim="modelTel" :maxlength="maxlength" :type="type" :placeholder="placeholder" :disabled="disabled"></w-input>
      <button @click="bindClick()">测试</button>
    </div>
  </div>
</template>

<script>
import { wInput } from '@/components';
export default {
  name: '',
  mixins: [],
  components: { wInput },
  props: {},
  data() {
    return {
      label: '电话号码：',
      modelTel: '18702906728',
      maxlength: 11,
      type: 'tel',
      placeholder: '',
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
      console.log(this.modelTel)
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
   fontSize: 30px
}
</style>
