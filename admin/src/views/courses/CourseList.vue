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
      :data="data"
      max-height="500px"
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
            @click="editCourse(scope.row)"
            icon="el-icon-edit"
            type="primary"
            size="mini"
            >编辑</el-button
          >
          <el-button
            type="danger"
            @click="deleteCourse(scope.row)"
            icon="el-icon-delete"
            size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.pageTotal"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useDeleteCourse from "./hooks/useDeleteCourse";
import { GET_COURSE_LIST } from "../../api/models/course";

export default defineComponent({
  name: "CourseList",
  setup(props) {
    const loading = ref(false);
    const data = ref([]);

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

    const page = ref({
      pageCurrent: 1,
      pageSize: 10,
      pageTotal: 0,
    });
    // 去新增页面
    const toAddPage = () => {
      router.push("addCourse");
    };

    // 编辑
    const editCourse = (val: any) => {
      router.push({
        path: "addCourse",
        query: {
          id: val._id,
        },
      });
    };
    // 删除
    const deleteCourse = (val: any) => {
      useDeleteCourse(val._id, getList);
    };

    // 改变分页条数
    const handleSizeChange = (val: any) => {
      page.value.pageSize = val;
      getList();
    };

    // 分页方法
    const handleCurrentChange = (val: any) => {
      page.value.pageCurrent = val;
      getList();
    };

    // 列表方法
    const getList = async () => {
      loading.value = true;
      const res: any = await GET_COURSE_LIST({
        query: {
          limit: page.value.pageSize,
          page: page.value.pageCurrent,
        },
      });
      data.value = res.data;
      page.value.pageTotal = res.total;
      page.value.pageCurrent = res.page;
      loading.value = false;
    };

    getList();
    return {
      loading,
      data,
      tableFiled,
      editCourse,
      toAddPage,
      deleteCourse,
      page,
      handleSizeChange,
      handleCurrentChange,
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
.footer {
  position: absolute;
  right: 20px;
  bottom: 30px;
}
</style>
