<template>
  <div id="app">
    <test></test>
  </div>
</template>

<script>
  //  @ 代表的  src  已经被改成 examples
import test from "@/views/test.vue";
export default {
  name: "App",
  components: { test }
};
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
