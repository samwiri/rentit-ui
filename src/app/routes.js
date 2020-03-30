import Layout from "./layout/app";

export default {
  path: "/",
  component: Layout,
  children: [
    // products
    { path: "products", component: () => import(/* webpackChunkName: "products" */ "./products") },
    {
      path: "products/:id",
      name: "products.show",
      component: () => import(/* webpackChunkName: "product-details" */ "./products/details"),
      props: true,
    },
    { path: "tenants", component: () => import(/* webpackChunkName: "tenants" */ "./tenants") },
    { path: "Payments", component: () => import(/* webpackChunkName: "payments" */ "./payments") },
  ],
};
