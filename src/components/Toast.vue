<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed top-5 right-5 bg-black bg-opacity-70 text-white px-4 py-2 rounded shadow-lg"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { message, visible } from "@/utils";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
