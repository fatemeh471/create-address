<script setup lang="ts">
import { defineProps, computed } from "vue";
import DotSpinner from "@/components/DotSpinner.vue";
const props = defineProps<{
  loading?: boolean;
  variant?: "solid" | "outline";
}>();

const isOutline = computed(() => props.variant === "outline");
</script>

<template>
  <button
    :disabled="props.loading"
    :class="[
      'px-[60px] py-[12px] rounded-[4px] border text-[16px] font-[700] flex items-center justify-center',
      isOutline
        ? 'bg-transparent border-primary-500 text-primary-500'
        : 'bg-primary-500 border-none text-white',
    ]"
  >
    <span v-if="props.loading" class="flex py-2 px-3">
      <DotSpinner />
    </span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>
