<!--
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-23 14:42:43
-->
<template>
  <div class="main">这是首页内容</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 200px);
  width: 100%;
  background-color: #ccc;
}
</style>
