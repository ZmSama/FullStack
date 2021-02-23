/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:55:55
 */
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";

export default (app: any) => {
  app.use(ElementPlus, { locale });
};
