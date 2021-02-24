<!--
 * @Description: 新增编辑共用页面
 * @Autor: ZmSama
 * @Date: 2021-02-24 22:28:28
-->
<template>
  <div>
    <h3>新增课程</h3>
    <el-form label-width="80px" :model="state.form" :rules="state.rules">
      <el-form-item label="课程名字" prop="name">
        <el-input v-model="state.form.name" style="width: 30vw"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <el-input v-model="state.form.cover" style="width: 30vw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
        <el-button @click="back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import useAddCourse from "./hooks/useAddCourse";
export default defineComponent({
  name: "AddCourse",
  setup() {
    const state = reactive({
      form: {
        name: "",
        cover: "",
      },
      rules: {
        name: [
          { required: true, message: "课程名字不能为空", trigger: "change" },
        ],
        cover: [{ required: true, message: "封面不能为空", trigger: "change" }],
      },
    });
    const router = useRouter();

    // 添加方法以及逻辑
    const add = () => {
      useAddCourse(state.form, router);
    };
    // 返回方法
    const back = () => {
      router.back();
    };

    return {
      state,
      add,
      back,
    };
  },
});
</script>
<style lang="scss" scoped></style>
