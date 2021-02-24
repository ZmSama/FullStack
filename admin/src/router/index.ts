/*
 * @Description:
 * @Autor: ZmSama
 * @Date: 2021-02-22 21:52:12
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Main from "../Main.vue";
import Home from "@/views/home/Home.vue";
import CourseList from "@/views/courses/CourseList.vue";
import AddCourse from "@/views/courses/AddCourse.vue";
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
      {
        path: "/addCourse",
        name: "AddCourse",
        component: AddCourse,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
