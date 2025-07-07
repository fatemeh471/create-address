<script setup lang="ts">
import { ref } from "vue";
import Input from "@/components/Input.vue";
import RadioInput from "@/components/RadioInput.vue";
import CheckIcon from "@/assets/icons/Check.vue";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();
function goToDisplayAddress() {
  router.push("/address-list");
}
</script>

<template>
  <div class="h-full flex items-center justify-center flex-col">
    <CheckIcon class="text-gray-100" />
    <span class="font-[14px] font-bold mt-2 text-gray-100 mb-[39px]"
      >اطلاعات شما با موفقیت ثبت شد
    </span>
    <Button @click="goToDisplayAddress" variant="outline"
      >مشاهده اطلاعات</Button
    >
  </div>
</template>
