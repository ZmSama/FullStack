/*
 * @Description:获取列表数据hook
 * @Autor: ZmSama
 * @Date: 2021-02-24 10:56:54
 */
import { reactive, ref } from "vue";
import { GET_COURSE_LIST } from "@/api/models/course";

interface IPage {
  pageCurrent: number;
  pageSize: number;
  pageTotal: number;
}
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
  const getList = async (page: IPage, query?: any) => {
    loading.value = true;
    const res = await GET_COURSE_LIST({
      limit: page.pageSize,
      page: page.pageCurrent,
    });
    state.data = res.data;
    loading.value = false;
  };

  return {
    loading,
    state,
    getList,
  };
}
