<template>
  <div class="flex flex-row md:flex-col justify-between items-start gap-[14px]">
    <span class="text-gray-400 text-[14px]"> {{ label }} </span>
    <span class="text-gray-100 text-[16px] break-all">
      {{ value }}
    </span>
  </div>
</template>
<script lang="ts" setup>
const { label, value } = defineProps<{
  label: string;
  value: string | number;
}>();
</script>
