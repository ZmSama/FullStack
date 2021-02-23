/*
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:52:12
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module './plugins/element'