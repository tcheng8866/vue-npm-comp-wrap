<template>
  <button :class="[disabled ? 'disabled' : '']" @click="handleClick">{{ content }}</button>
</template>

<script type="text/javascript">
export default {
  name: 'wCountDown',
  props: {
    countDown: {
      type: [String, Number],
      default: 30
    }
  },
  data() {
    return {
      content: '发送验证码',
      time: this.countDown,
      disabled: false
    };
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit('click')
      this.disabled = true;
      this.content = this.time + 's后重新发送';
      let clock = window.setInterval(() => {
        this.time--;
        this.content = this.time + 's后重新发送';
        if (this.time < 0) {
          window.clearInterval(clock);
          this.content = '重新发送验证码';
          this.time = this.countDown,  // 这个很关键、不然会导致下次倒计时显示负数
          this.disabled = false; //这里重新开启
        }
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
button {
  width: 130px;
  padding: 10px 0;
  font-size: 16px;
  font-family: inherit;  //  initial（默认）和 inherit（继承） unset(不设置)
  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(97deg, #32aef4 0%, #0084cf 80%);
  border: none;
  border-radius: 3px;
}
.disabled {
  background: #cccccc;
}
</style>
