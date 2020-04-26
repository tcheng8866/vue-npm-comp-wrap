<template>
  <div class="component">
    <div class="input-group">
      <label>{{ label }}</label>
      <div class="input-wrap">
        <input
          ref="input"
          :type="type"
          :maxlength="maxlength"
          :placeholder="placeholder"
          :disabled="disabled"
          :value="value"
          @input="inputChanged($event)"
        />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'wInput',
  props: {
    label: {
      type: String,
    },
    value: {
      // 为什么这里要用 value 属性?  看created
      type: String,
    },
    maxlength: String,  // this.maxlength 是 String 类型
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "请输入"
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
  created() {},
  watch: {
    // :maxlength="maxlength" 和 maxlength ="11" 均可拦截
    value (val) {
      console.log("watch", val)
      let returnVal = val
      if (this.type === 'number' && this.maxlength) { // type=number的时候maxlength失效
        returnVal = val.substr(0, this.maxlength)
        this.curVal = returnVal
      }
      this.$emit('input', returnVal)
    },
  },
  methods: {
    // 双向绑定的原理、这也是 1.为什么props用value、2.emit事件用input的原因
    // <currency-input v-model="price"></currentcy-input>
    // 上行代码是下行的语法糖
    // <currency-input :value="price" @input="price = arguments[0]"></currency-input>
    //  tel number 的类型问题：
    // （tel实际上是一种text类型）手机端会唤醒数字键盘
    // （number 可以输入（-）、多个小数点
    //  两种手机端都是唤醒数字键盘、所以最好输入不控制、但提交时正则拦截；输入用oninput等事件控制会有兼容性问题    
    inputChanged(e) {
      this.$emit("input", e.target.value); //  为什么这里把 'input' 作为触发事件的事件名?  看created
    }
  }
};
</script>
<!-- 对外只需要设置height/line-height两个值相同 -->
<!-- 只设置height: 加大间距 -->
<!-- 同时设置height/line-height：border 也同步变大 -->
<style lang="less" scoped>
.component {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  vertical-align: middle;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 14px;
  font-family: inherit;
  background-color: inherit;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 40px;
  margin: 10px 0;
  .input-group {
    display: flex;
    justify-content: flex-start;
    label {
      line-height: inherit;
      min-width: 75px; // 这样 兼容 ipad
    }
    .input-wrap {
      width: 100%;
      input {
        font-family: inherit;
        font-size: inherit;
        box-sizing: border-box; // 很关键
        width: 100%;
        height: 100%;
        border: 1px solid #9494a2;
        border-radius: 3px;
        padding: 10px 10px;
      }
      input::-webkit-input-placeholder {
        color: #9494a2;
      }
    }
  }
}
</style>
