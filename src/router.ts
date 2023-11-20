import { createRouter, createWebHistory } from "vue-router";
import ColthingView from "./components/Clothing.vue";
import HomeView from "./components/Home.vue";
import GroceriesView from "./components/Groceries.vue";
import ElectronicsView from "./components/Electronics.vue";

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/clothing",
    name: "clothing",
    props: true,
    component: ColthingView,
  },
  {
    path: "/electronics",
    name: "electronics",
    props: true,
    component: ElectronicsView,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: GroceriesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
