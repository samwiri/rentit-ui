import Vue from "vue";
import VueRouter from "vue-router";
import get from "lodash/get";
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

  // if a user is already authenticated and is headed to a guest page
  //   take them to the index page
  if ($auth.user && to.meta.auth === "guest") {
    return next("/");
  }

  return next();
});

// Add a response interceptor
http.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const isUnAuthenticated = get(error, "response.status") === 401;

    if (isUnAuthenticated && router.currentRoute.path !== "auth/login" && $auth.loadedInitialUser) {
      window.Notify.error("Redirecting login...");

      $auth.clearUser();

      return router.go("auth/login");
    }
    return Promise.reject(error);
  },
);

export default router;
