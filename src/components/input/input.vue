<template>
  <div class="wrap">
    <div class="input-group">
      <label>{{ label }}</label>
      <input class="input" ref="input" :type="type" :maxlength="maxlength" :placeholder="placeholder" :disabled="disabled" :value="value" @input="inputChanged($event)" />
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {   // 为什么这里要用 value 属性  看created
      type: String,
      default: ''
    },
    maxlength: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    }
    // labelClass: Object
  },
  data() {
    return {};
  },
  created() {
    // 双向绑定的原理、这也是 1.为什么props用value、2.emit事件用input的原因
    // <currency-input v-model="price"></currentcy-input>
    // 上行代码是下行的语法糖
    // <currency-input :value="price" @input="price = arguments[0]"></currency-input>

    //  tel number 的类型问题：
    // （tel实际上是一种text类型）手机端会唤醒数字键盘
    // （number 可以输入（-）、多个小数点
    //  两种手机端都是唤醒数字键盘、所以最好输入不控制、但提交时正则拦截；输入用oninput等事件控制会有兼容性问题
  },
  methods: {
    inputChanged(e) {
      this.$emit('input', e.target.value);  //  为什么这里把 'input' 作为触发事件的事件名?  看created
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  vertical-align: middle;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 14px;
  padding: 10px 0;
  font-family: inherit;
  background-color: inherit;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .input-group {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    label {
      line-height: 40px;
      width: 18%;
      min-width: 70px;
    }
    input {
      font-family: inherit;
      border: 1px solid #9494a2;
      border-radius: 3px;
      padding: 10px 10px;
      width: 82%;
      font-size: inherit;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: middle;
      overflow: hidden;
      -webkit-user-select: auto;
    }
    input::-webkit-input-placeholder {
      color: #9494a2;
    }
  }
}
</style>
