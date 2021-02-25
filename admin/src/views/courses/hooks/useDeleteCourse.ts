/*
 * @Description:删除业务
 * @Autor: ZmSama
 * @Date: 2021-02-25 16:01:07
 */
import { DELETE_COURSE } from "@/api/models/course";
import { ElMessage } from "element-plus";
import { ElMessageBox } from "element-plus";

/**
 * @msg: 删除逻辑
 * @param {string} id
 * @return {*}
 */
export default function useDeleteCourse(id: string, getList: () => {}) {
  ElMessageBox.confirm("此操作将永久该课程, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      DELETE_COURSE(id).then((res) => {
        ElMessage.success("删除成功");
        getList();
      });
    })
    .catch(() => {});
}
