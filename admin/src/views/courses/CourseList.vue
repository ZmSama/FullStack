<!--
 * @Description: 
 * @Autor: ZmSama
 * @Date: 2021-02-23 16:52:36
-->
<template>
  <div>
    <div class="list-tile">
      <span>课程列表</span>
      <el-button type="primary" size="mini" @click="toAddPage" plain
        >新增课程</el-button
      >
    </div>

    <el-table
      style="width: 100%"
      size="mini"
      :data="state.data"
      v-loading="loading"
    >
      <el-table-column
        v-for="(item, index) in tableFiled"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :fixed="item.fixed"
        :show-overflow-tooltip="item.overflow"
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="300">
        <template #default="scope">
          <el-button
            @click="handleClick(scope.row)"
            icon="el-icon-edit"
            type="primary"
            size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useCourseList from "./hooks/useCourseList";

export default defineComponent({
  name: "CourseList",
  setup(props) {
    const { loading, state, getList } = useCourseList();
    const router = useRouter(); //导入路由
    const tableFiled = ref([
      {
        label: "ID",
        prop: "_id",
        width: "100",
        overflow: false,
      },
      {
        label: "课程名字",
        prop: "name",
        width: "100",
        overflow: false,
      },
      {
        label: "封面",
        prop: "cover",
        width: "100",
        overflow: false,
      },
    ]);

    const handleClick = (row: Object) => {
      console.log(row);
    };

    // 去新增页面
    const toAddPage = () => {
      router.push("addCourse");
    };

    getList();
    return {
      loading,
      state,
      tableFiled,
      handleClick,
      toAddPage,
    };
  },
});
</script>
<style lang="scss" scoped>
.list-tile {
  padding-bottom: 20px;
  span {
    font-size: 18px;
    font-weight: 600;
    padding-right: 20px;
  }
}
</style>
