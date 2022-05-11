import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/learning-analytics",
    name: "LearningAnalytics",
    component: () =>
      import(
        /* webpackChunkName: "LearningAnalytics" */ "../views/LearningAnalytics.vue"
      ),
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import(/* webpackChunkName: "Forum" */ "../views/forum"),
    redirect: '/forum/categories',
    children: [
      {
        path: "categories",
        name: "Categories",
        component: () =>
          import(/* webpackChunkName: "Categories" */ "../views/forum/Categories"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
