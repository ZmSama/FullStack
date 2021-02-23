/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-23 22:51:21
 */
module.exports = {
  devServer: {
    open: true, // auto open brower 项目启动后自动打开浏览器...
    disableHostCheck: false,
    https: false,
    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      // string | Object 解决跨域问题
      "/api": {
        target: "http://localhost:3000/", // 对应自己的 跨域地址 即请求的后端地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
