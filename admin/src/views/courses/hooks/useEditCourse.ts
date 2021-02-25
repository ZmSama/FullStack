import { UPDATE_COURSE_BY_ID } from "@/api/models/course";
import { ElMessage } from "element-plus";
import { Router } from "vue-router";
/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-25 16:39:14
 */
/**
 * @msg: 更新处理逻辑
 * @param {*}
 * @return {*}
 */
export default function useGetCourseById(
  id: string,
  data: object,
  router: Router
) {
  UPDATE_COURSE_BY_ID(id, data).then((res) => {
    ElMessage.success("更新成功");
    router.go(-1);
  });
}
