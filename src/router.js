import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/components/Portfolio.vue";
import Contact from "@/Pages/Contact.vue";

const routes = [
  { path: "/", name: "home", component: Portfolio },
  { path: "/contact", name: "contact", component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
