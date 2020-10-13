<template>
  <div id="nav">
    <router-view></router-view>
    <el-button type="primary">hehe</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ipcRenderer } from "electron";

export default defineComponent({
  name: "App",
  created() {
    console.log(ipcRenderer);
    // ipcRenderer.sendSync("synchronous-message", "ping");
    // ipcRenderer.on("asynchronous-reply", (event, arg) => {
    //   console.log(arg); // prints "pong"
    // });
    // ipcRenderer.send("asynchronous-message", "ping");
    ipcRenderer.on("ddddd", (event, args) => {
      console.log(args);
    });
  }
});
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
