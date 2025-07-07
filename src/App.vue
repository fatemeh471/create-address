<script setup lang="ts">
import Header from "@/components/Header.vue";
import Container from "@/components/Container.vue";
import Toast from "@/components/Toast.vue";
</script>

<template>
  <Header />
  <Toast />
  <main class="h-[calc(100%-74px)]">
    <Container>
      <router-view />
    </Container>
  </main>
</template>
