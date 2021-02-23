<!--
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:52:12
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const a = ref<Number>(1);

    return { a };
  },
});
</script>

<style></style>
