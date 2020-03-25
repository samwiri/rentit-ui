import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "@/auth/routes";
import AppRoutes from "@/app/routes";

import $auth from "@/auth/state";

import { http } from "@/services/http";

const routes = [AuthRoutes, AppRoutes];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  // we will first make sure that we load the user from the API if we haven't already

  if (!$auth.loadedInitialUser) {
    $auth.loadingUser = true;
    try {
      $auth.user = await http.get("api/auth/user");
    } catch (e) {
      $auth.user = null;
    }
    $auth.loadedInitialUser = true;
    $auth.loadingUser = false;
  }

  // if  the user is not authenticated and is headed towards a page that requires
  //  a user, take them to a login page

  if (!$auth.user && to.meta.auth !== "guest") {
    return next("auth/login");
  }

  // if a user is already authenticated and is headed to an authentication
  //   take them to the index page
  if ($auth.user && to.meta.auth === "guest") {
    return next("/");
  }

  return next();
});

export default router;
