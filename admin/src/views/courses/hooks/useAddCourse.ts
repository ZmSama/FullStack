/*
 * @Description:新增课程hook
 * @Autor: ZmSama
 * @Date: 2021-02-24 22:31:25
 */
import { ADD_COURSE } from "@/api/models/course";
import { ElMessage } from "element-plus";
import { Router } from "vue-router";

/**
 * @msg: 新增处理逻辑
 * @param {Object} data 表单参数
 * @param {Router} router 路由对象
 * @return {*}
 */
export default function useAddCourse(data: Object, router: Router) {
  ADD_COURSE(data).then((res) => {
    ElMessage.success("添加成功");
    router.back();
  });
}
