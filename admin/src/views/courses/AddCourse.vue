<!--
 * @Description: 新增编辑共用页面
 * @Autor: ZmSama
 * @Date: 2021-02-24 22:28:28
-->
<template>
  <div>
    <h3>{{ route.query.id ? "编辑课程" : "新增课程" }}</h3>
    <el-form label-width="80px" :model="form" :rules="ruleState.rules">
      <el-form-item label="课程名字" prop="name">
        <el-input v-model="form.name" style="width: 30vw"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <el-input v-model="form.cover" style="width: 30vw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">{{
          route.query.id ? "修改" : "添加"
        }}</el-button>
        <el-button @click="back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import useAddCourse from "./hooks/useAddCourse";
import useEditCourse from "./hooks/useEditCourse";
import { GET_COURSE_BY_ID } from "../../api/models/course";
export default defineComponent({
  name: "AddCourse",
  setup() {
    const form = ref({
      name: "",
      cover: "",
    });
    const ruleState = reactive({
      rules: {
        name: [
          { required: true, message: "课程名字不能为空", trigger: "change" },
        ],
        cover: [{ required: true, message: "封面不能为空", trigger: "change" }],
      },
    });
    const router = useRouter();
    const route = useRoute();

    // 添加方法以及逻辑
    const add = () => {
      // 如果有id说明是编辑
      if (route.query.id) {
        useEditCourse(route.query.id as string, form.value, router);
      } else {
        useAddCourse(form.value, router);
      }
    };
    // 返回方法
    const back = () => {
      router.back();
    };

    // 回写数据方法
    const getCourseById = () => {
      let id = route.query.id;
      if (route.query.id) {
        GET_COURSE_BY_ID(id).then((res: any) => {
          form.value = { ...res };
        });
      }
    };

    onMounted(() => {
      getCourseById();
    });

    return {
      form,
      add,
      back,
      ruleState,
      route,
    };
  },
});
</script>
<style lang="scss" scoped></style>
