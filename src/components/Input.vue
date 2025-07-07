<script setup lang="ts">
import { ref, computed } from "vue";
import CloseIcon from "@/assets/icons/Close.vue";

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
  error?: string;
  type?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);

const inputType = computed(() => props.type ?? "text");

const borderClass = computed(() => {
  if (props.error) return "border-red-500";
  if (!props.modelValue) {
    if (isFocused.value) return "border-blue-500";
    return "border-black";
  }
  if (isFocused.value) return "border-green-500";
  return "border-black";
});

function clearInput() {
  emit("update:modelValue", "");
}
</script>

<template>
  <div class="flex flex-col w-full">
    <div
      class="relative flex items-center border border-gray-200 rounded-[5px] ps-[10px] pe-[12px] py-3 transition-colors duration-200"
      :class="[
        error
          ? 'border-red-500 ring-1 ring-red-500'
          : isFocused
          ? 'border-green-500 ring-1 ring-green-500'
          : 'border-gray-300',
      ]"
    >
      <input
        :type="inputType"
        :placeholder="placeholder"
        class="w-full outline-none bg-transparent font-bold text-gray-100 placeholder:text-gray-300"
        :value="modelValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />

      <button
        v-if="modelValue"
        @click="clearInput"
        class="absolute left-3 text-gray-400 hover:text-gray-600"
      >
        <CloseIcon />
      </button>
    </div>

    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>
