<template>
  <div class="wrap">
    <div class="input-group">
      <label :class="labelClass">{{ label }}</label>
      <input
        :class="input"
        :type="type"
        :maxlength="maxlength"
        :placeholder="placeholderData"
        :value="curVal"
        :disabled="disabled"
        @input="handleInput"
      />
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
    value: {
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
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelClass: Object
  },
  data () {
    return {
      curVal: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.curVal = e.target.value
    },
    doPlaceholder () {
      if (this.placeholder) {
        this.placeholderData = this.placeholder
        return
      }
      this.placeholderData = '请输入' + this.label
    }
  },
  created () {
    this.doPlaceholder()
  },
  watch: {
    curVal (e) { //  监听组件值的变更
      let returnVal = e
      if (this.type === 'number' && this.maxlength) {
        // type=number的时候maxlength失效
        returnVal = e.substr(0, this.maxlength)
        this.curVal = returnVal
      }
      this.$emit('input', returnVal)
    },
    value (val) { // 监听props传入组件的值
      this.curVal = val
    }
  }
}
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
  font-size: 0.28rem;
  padding: 0.2rem 0;
  font-family: inherit;
  background-color: inherit;
  .input-group {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    label {
      line-height: 0.8rem;
      width: 18%;
      min-width: 1.4rem;
    }
    input {
      font-family: inherit;
      border: 1px solid #9494a2;
      border-radius: 0.06rem;
      padding: 0.2rem 0.2rem;
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
