<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id: string;
  name: string;
  value: string | number;
  modelValue: string | number;
  label?: string;
  size?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const checked = computed(() => props.modelValue === props.value);

function onChange() {
  emit("update:modelValue", props.value);
}
</script>

<template>
  <div class="inline-flex items-center cursor-pointer select-none">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="checked"
      @change="onChange"
      style="accent-color: #159281ff"
      class="w-[18px] h-[18px] cursor-pointer"
    />

    <label
      :for="id"
      class="flex items-center cursor-pointer ps-1 text-sm text-gray-700"
    >
      {{ label }}
    </label>
  </div>
</template>
