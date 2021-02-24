<!--
 * @Description:侧边栏组件 
 * @Autor: ZmSama
 * @Date: 2021-02-23 15:27:14
-->
<template>
  <el-menu
    :default-active="$route.path"
    mode="vertical"
    style="border-right: none"
    router
  >
    <el-submenu
      :index="`menu-${index}`"
      v-for="(item, index) in menuList"
      :key="`munu${index}`"
    >
      <template #title>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="(item2, index2) in item.items"
        :index="item2.path"
        :key="`menu${index2}--${index}`"
        >{{ item2.name }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Menu",
  setup() {
    const menuList = reactive([
      {
        name: "系统管理",
        items: [
          {
            path: "/",
            name: "首页",
          },
          {
            path: "/course",
            name: "课程管理",
          },
          {
            path: "/episode",
            name: "课时管理",
          },
        ],
      },
      {
        name: "运营管理",
        items: [
          {
            path: "/user",
            name: "用户管理",
          },
        ],
      },
    ]);

    return { menuList };
  },
});
</script>
<style lang="scss" scoped></style>
