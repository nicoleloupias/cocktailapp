import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import SearchIngredient from "@/views/SearchIngredient.vue";
import SearchBy from "@/views/SearchBy.vue";
import FavouritesScreen from "@/views/FavouritesScreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/name",
    name: "ByName",
    component: SearchBy
  },
  {
    path: "/firstletter",
    name: "FirstLetter",
    component: SearchBy
  },
  {
    path: "/ingredients",
    name: "SearchIngredient",
    component: SearchIngredient
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: FavouritesScreen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
