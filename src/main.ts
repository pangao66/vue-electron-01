import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/packages/locale/lang/zh-cn";

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
  locale,
  size: "small"
});
app.mount("#app")