const userRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register/RegisterPage.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/UsersPage.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/user/UserPage.vue"),
  },
  {
    path: "/update/user",
    name: "/update/user",
    component: () => import("../views/user/UserUpdatePage.vue"),
  },
];

export default userRoutes;
