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
    params,
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
/**
 * @msg: 删除课程接口
 * @param {any} params
 * @return {*}
 */
const DELETE_COURSE = (params?: any) => {
  return request({
    url: "/courses/" + params,
    method: "DELETE",
    data: params,
  });
};
/**
 * @msg: 根据id获得信息
 * @param {any} params
 * @return {*}
 */
const GET_COURSE_BY_ID = (params?: any) => {
  return request({
    url: "/courses/" + params,
    method: "GET",
    data: params,
  });
};
/**
 * @msg: 根据id更新信息
 * @param {any} id
 * @param {any} params
 * @return {*}
 */
const UPDATE_COURSE_BY_ID = (id: any, params: any) => {
  return request({
    url: "/courses/" + id,
    method: "PUT",
    data: params,
  });
};
export {
  GET_COURSE_LIST,
  ADD_COURSE,
  DELETE_COURSE,
  GET_COURSE_BY_ID,
  UPDATE_COURSE_BY_ID,
};
