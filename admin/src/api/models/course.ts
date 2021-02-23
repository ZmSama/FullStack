/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-23 22:02:05
 */
import request from "../service";

export const getCourseList = (params?: any) => {
  return request({
    url: "/courses",
    method: "GET",
    data: params,
  });
};
