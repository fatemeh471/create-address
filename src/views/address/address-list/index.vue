<script setup lang="ts">
import { ref, onMounted } from "vue";
import Input from "@/components/Input.vue";
import RadioInput from "@/components/RadioInput.vue";
import { getAddressList } from "@/services/address";
import SkeletonCard from "@/components/SkeletonCard.vue";
import AddressListField from "./AddressListField.vue";

const data = ref(null);
const isLoading = ref(false);
const isError = ref(false);

onMounted(async () => {
  isLoading.value = true;
  isError.value = false;
  try {
    data.value = await getAddressList();
  } catch (err) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <SkeletonCard v-if="isLoading" text="آدرس ها و مشخصات " />
  <div v-else-if="isError">خطایی رخ داده است !</div>
  <div v-else>
    <span class="flex text-[16px] text-gray-100 mb-3"> آدرس ها و مشخصات </span>
    <div
      v-for="(address, index) in data"
      class="bg-white hidden md:grid mb-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] px-[40px] pt-[32px] pb-[37px] rounded-[4px]"
    >
      <AddressListField label="نام" :value="address.first_name" />
      <AddressListField label="نام خانوادگی" :value="address.last_name" />
      <AddressListField
        label="شماره تلفن همراه"
        :value="address.coordinate_mobile"
      />
      <AddressListField
        label="شماره تلفن ثابت"
        :value="address.coordinate_phone_number"
      />
      <AddressListField label="جنسیت" :value="address.gender" />
      <AddressListField label="آدرس" :value="address.address" />
    </div>
  </div>
  <div
    v-for="(address, index) in data"
    class="bg-white block md:hidden mb-5 grid grid-cols-1 md:grid-cols-3 gap-3 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] px-4 py-5 rounded-[4px]"
  >
    <AddressListField
      label="نام و نام خانوادگی"
      :value="`${address.first_name} ${address.last_name}`"
    />
    <AddressListField label="جنسیت" :value="address.gender" />
    <AddressListField
      label="شماره تلفن همراه"
      :value="address.coordinate_mobile"
    />
    <AddressListField
      label="شماره تلفن ثابت"
      :value="address.coordinate_phone_number"
    />
    <hr class="border-t border-gray-0" />
    <div class="flex flex-col gap-3">
      <span class="text-gray-400 text-[14px]"> آدرس </span>
      <span class="text-gray-100 text-[16px] break-all">
        {{ address.address }}
      </span>
    </div>
  </div>
</template>
