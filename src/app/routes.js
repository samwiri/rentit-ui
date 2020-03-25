import Layout from "./layout/app";

export default {
  path: "/",
  component: Layout,
  children: [
    { path: "products", component: () => import(/* webpackChunkName: "products" */ "./products") },
    { path: "tenants", component: () => import(/* webpackChunkName: "tenants" */ "./tenants") },
    { path: "Payments", component: () => import(/* webpackChunkName: "payments" */ "./payments") },
  ],
};
