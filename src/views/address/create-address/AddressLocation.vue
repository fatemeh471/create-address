<script setup lang="ts">
import ArrowRightIcon from "@/assets/icons/ArrowRight.vue";
import CurrentLocationIcon from "@/assets/icons/CurrrentLocation.vue";
import AddressFooter from "./AddressFooter.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import L from "leaflet";
import { useAddressLocation } from "@/composables/address/useAddressLocation";
import { customIcon } from "@/constants/markerMap";
import { useAddressStore } from "@/composables/address/useAddressStore";
import { createAddress } from "@/services/address.ts";
import { showToast } from "@/utils/index.ts";

const router = useRouter();
const { firstName, lastName, mobilePhone, phoneNumber, address, gender } =
  useAddressStore();

function goBack() {
  router.push("/create-address");
}
const { initMap, locateMe, selectedLatLng } = useAddressLocation(customIcon);

onMounted(() => {
  initMap("map");
});
const isLoading = ref(false);
const isError = ref(false);

async function goAddressResult() {
  if (!selectedLatLng.value) {
    showToast("لطفا موقعیت را انتخاب کنید.");
    return;
  }
  isLoading.value = true;
  isError.value = false;

  try {
    await createAddress({
      first_name: firstName.value,
      last_name: lastName.value,
      coordinate_mobile: mobilePhone.value,
      coordinate_phone_number: phoneNumber.value || undefined,
      address: address.value,
      gender: gender.value === "female" ? "خانم" : "آقا",
      lat: selectedLatLng.value.lat,
      lng: selectedLatLng.value.lng,
    });
    isLoading.value = false;
    router.push("/address-result");
    firstName.value = "";
    lastName.value = "";
    mobilePhone.value = "";
    phoneNumber.value = "";
    address.value = "";
  } catch (err) {
    isError.value = true;
    showToast(err.response.data);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="flex items-center gap-2 mb-2">
    <button @click="goBack">
      <ArrowRightIcon class="text-gray-100" />
    </button>
    <span class="flex text-gray-100"> بازگشت</span>
  </div>

  <div class="bg-white rounded-[4px] h-[600px]">
    <span
      class="flex text-gray-100 py-4 ps-[48px] text-gray-100 font-bold text-[12px]"
    >
      موقعیت مورد نظر خود را روی نقشه مشخص کنید</span
    >

    <div class="w-full flex flex-col relative">
      <div id="map" class="flex-grow w-full rounded-[4px] h-[550px]"></div>

      <button @click="locateMe" class="absolute bottom-4 z-[1000] right-4">
        <CurrentLocationIcon />
      </button>
    </div>
  </div>
  <AddressFooter @click="goAddressResult" :isLoading="isLoading" />
</template>
