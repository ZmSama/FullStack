<!--
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-23 16:52:36
-->
<template>
  <div>
    <h3>课程列表</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCourseList } from "../../api/models/course";

export default defineComponent({
  name: "CourseList",
  setup(props) {
    getCourseList().then((res) => {
      console.log(res);
    });
  },
});
</script>
<style lang="scss" scoped></style>
