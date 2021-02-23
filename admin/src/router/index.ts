/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:52:12
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Main from "../Main.vue";
import Home from "@/views/home/Home.vue";
import CourseList from "@/views/courses/CourseList.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/course",
        name: "CourseList",
        component: CourseList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
