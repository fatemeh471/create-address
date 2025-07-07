<template>
  <span class="flex text-gray-100 mb-3">ثبت آدرس</span>
  <Card>
    <span class="flex text-gray-100 font-bold">
      لطفا مشخصات و آدرس خود را وارد کنید
    </span>

    <div
      class="grid grid-cols-1 md:grid-cols-3 md:gap-x-[22px] gap-y-5 pb-6 md:gap-y-[38px] pt-8 md:pb-[52px]"
    >
      <div class="flex flex-col gap-[7px]">
        <span class="text-gray-100 font-[500] text-[14px]">نام</span>
        <Input
          v-model="firstName"
          placeholder="مثال: رضا"
          :error="errors.firstName"
          @update:modelValue="validateFirstName"
        />
      </div>

      <div class="flex flex-col gap-[7px]">
        <span class="text-gray-100 font-[500] text-[14px]">نام خانوادگی</span>
        <Input
          v-model="lastName"
          placeholder="مثال: رضایی"
          :error="errors.lastName"
          @update:modelValue="validateLastName"
        />
      </div>

      <div class="flex flex-col gap-[7px]">
        <span class="text-gray-100 font-[500] text-[14px]"
          >شماره تلفن همراه</span
        >
        <Input
          v-model="mobilePhone"
          type="number"
          placeholder=" مثال: ۰۹۱۲۱۲۳۴۵۶۷"
          :error="errors.mobilePhone"
          @update:modelValue="validateMobilePhone"
        />
      </div>

      <div class="flex flex-col gap-[7px]">
        <div class="flex items-center justify-between">
          <span class="text-gray-100 font-[400] text-[14px]"
            >شماره تلفن ثابت <span class="text-[10px]">(اختیاری)</span></span
          >
          <span class="text-gray-500 font-[500] text-[10px]">*باپیش شماره</span>
        </div>
        <Input
          type="number"
          v-model="phoneNumber"
          placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷"
          :error="errors.phoneNumber"
          @update:modelValue="validatePhoneNumber"
        />
      </div>

      <div class="flex flex-col gap-[7px] md:col-span-2">
        <span class="text-gray-100 font-[500] text-[14px]">آدرس</span>
        <Input
          v-model="address"
          placeholder=""
          :error="errors.address"
          @update:modelValue="validateAddress"
        />
      </div>
    </div>

    <div class="flex gap-[67px] mb-20 md:mb-0 pb-5 mb:pb-0 items-center">
      <span class="flex text-gray-100 font-[500] text-[14px]">جنسیت</span>
      <div class="flex gap-[26px]">
        <RadioInput
          id="male"
          name="gender"
          value="male"
          label="آقا"
          v-model="gender"
        />
        <RadioInput
          id="female"
          name="gender"
          value="female"
          label="خانم"
          v-model="gender"
        />
      </div>
    </div>
  </Card>

  <AddressFooter @click="goToSelectLocation"  />
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import Input from "@/components/Input.vue";
import RadioInput from "@/components/RadioInput.vue";
import AddressFooter from "./AddressFooter.vue";
import { useAddressForm } from "@/composables/address/useAddressForm";

const {
  firstName,
  lastName,
  mobilePhone,
  phoneNumber,
  address,
  gender,
  errors,
  validateFirstName,
  validateLastName,
  validateMobilePhone,
  validatePhoneNumber,
  validateAddress,
  goToSelectLocation,
} = useAddressForm();
</script>
