<script setup lang="ts">
import Button from "@/components/Button.vue";


const props = defineProps<{
  onClick?: () => void;
  isLoading?: boolean;
}>();
</script>

<template>
  <footer
    class="fixed bottom-0 start-0 w-full py-[19px] left-0 right-0  shadow-[0px_-1px_8px_0px_rgba(0,0,0,0.10)] bg-white flex justify-center"
  >
    <Button :onClick="onClick" :loading="isLoading">ثبت و ادامه</Button>
  </footer>
</template>
