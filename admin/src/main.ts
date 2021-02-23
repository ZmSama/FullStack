/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:52:12
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app
  .use(store)
  .use(router)
  .mount("#app");
