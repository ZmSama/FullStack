<!--
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-23 15:01:48
-->
<template>
  <el-container>
    <el-aside width="200px" style="height: 95vh">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>这是头部</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./components/Menu.vue";

export default defineComponent({
  components: { Menu },
  name: "Main",
});
</script>
<style lang="scss" scoped></style>
