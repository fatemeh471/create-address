<script setup lang="ts">
const { text } = defineProps<{
  text: string;
}>();
</script>
<template>
  <span class="text-[16px] text-gray-100">{{ text }}</span>
  <div class="flex mt-3 flex-col gap-4">
    <div
      class="bg-white grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-10 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] px-[40px] pt-[32px] pb-[37px] rounded-[4px] animate-pulse"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="flex flex-col items-start gap-[14px] w-full"
      >
        <span class="bg-gray-200 h-4 w-1/3 rounded"></span>
        <span class="bg-gray-200 h-4 w-2/3 rounded"></span>
      </div>
    </div>
  </div>
</template>
