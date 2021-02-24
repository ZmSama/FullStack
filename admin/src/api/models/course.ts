/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-23 22:02:05
 */
import request from "../service";
/**
 * @msg: 课程列表接口
 * @param {any} params
 * @return {*}
 */
const GET_COURSE_LIST = (params?: any) => {
  return request({
    url: "/courses",
    method: "GET",
    data: params,
  });
};
/**
 * @msg: 新增课程接口
 * @param {any} params
 * @return {*}
 */
const ADD_COURSE = (params?: any) => {
  return request({
    url: "/courses",
    method: "POST",
    data: params,
  });
};
export { GET_COURSE_LIST, ADD_COURSE };
