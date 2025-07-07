import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const mobilePhone = ref("");
const phoneNumber = ref("");
const address = ref("");
const gender = ref<"male" | "female">("female");

export function useAddressStore() {
  return {
    firstName,
    lastName,
    mobilePhone,
    phoneNumber,
    address,
    gender,
  };
}
