import { createRouter, createWebHistory } from "vue-router";
import AddressForm from "@/views/address/create-address/AddressForm.vue";
import AddressLocation from "@/views/address/create-address/AddressLocation.vue";
import AddressResult from "@/views/address/create-address/AddressResult.vue";
import AddressList from "@/views/address/address-list/index.vue";
import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create-address", component: AddressForm },
  { path: "/address-location", component: AddressLocation },
  { path: "/address-result", component: AddressResult },
  { path: "/address-list", component: AddressList },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
