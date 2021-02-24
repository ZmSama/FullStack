/*
 * @Description:获取列表数据hook
 * @Autor: ZmSama
 * @Date: 2021-02-24 10:56:54
 */
import { reactive, ref } from "vue";
import { GET_COURSE_LIST } from "@/api/models/course";

export default function () {
  const loading = ref(false);
  const state = reactive<any>({
    data: [],
  });
  /**
   * @msg: 得到数据并赋值方法
   * @param {*} async
   * @return {*}
   */
  const getList = async () => {
    loading.value = true;
    const res = await GET_COURSE_LIST();
    state.data = res.data;
    loading.value = false;
  };

  return {
    loading,
    state,
    getList,
  };
}
