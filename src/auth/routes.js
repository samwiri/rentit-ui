export default {
  path: "/auth",
  component: () => import(/* webpackChunkName: "auth" */ "./layout"),
  children: [
    {
      path: "login",
      component: () => import(/* webpackChunkName: "auth" */ "./login"),
      meta: {
        auth: "guest",
      },
    },
  ],
};
