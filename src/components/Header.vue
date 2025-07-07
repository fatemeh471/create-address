<script setup lang="ts">
import { useRouteChecker } from "@/composables/useRouteChecker";
import logo from "@/assets/images/logo.png";

const isCreateAddress = useRouteChecker([
  "/create-address",
  "/address-location",
  "/address-result",
]);

const isAddressList = useRouteChecker(["/address-list"]);
</script>

<template>
  <header
    class="shadow-[0px_0.5px_2px_0px_rgba(0,0,0,0.15)] py-[17.5px] ps-4 pe-4 md:ps-[80px] md:pe-[74px] bg-white flex items-center justify-between"
  >
    <a href="#">
      <img :src="logo" class="logo vue" alt="Vue logo" />
    </a>
    <div class="flex items-center gap-[26px]">
      <router-link
        to="/create-address"
        :class="isCreateAddress ? 'text-primary-500' : 'text-gray-100'"
      >
        ثبت آدرس
      </router-link>
      <router-link
        to="/address-list"
        :class="isAddressList ? 'text-primary-500' : 'text-gray-100'"
      >
        مشاهده آدرس ها
      </router-link>
    </div>
  </header>
</template>
