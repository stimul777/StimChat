import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    meta: { layout: "empty" },
    component: () => import("@/views/SideBar.vue")
  }
];

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
