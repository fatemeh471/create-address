import { ref } from "vue";
import {
  validateFirstNameField,
  validateLastNameField,
  validateMobilePhoneField,
  validatePhoneNumberField,
  validateAddressField,
} from "@/constants/validations/address.ts";

import type { Errors } from "@/types/address";
import { useRouter } from "vue-router";
import { useAddressStore } from "./useAddressStore";
export function useAddressForm() {
  const { firstName, lastName, mobilePhone, phoneNumber, address, gender } =
    useAddressStore();

  const router = useRouter();
  const errors = ref<Errors>({
    firstName: "",
    lastName: "",
    mobilePhone: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });

  function validateFirstName() {
    errors.value.firstName = validateFirstNameField(firstName.value);
  }

  function validateLastName() {
    errors.value.lastName = validateLastNameField(lastName.value);
  }

  function validateMobilePhone() {
    errors.value.mobilePhone = validateMobilePhoneField(mobilePhone.value);
  }

  function validatePhoneNumber() {
    errors.value.phoneNumber = validatePhoneNumberField(
      phoneNumber.value
    );
  }

  function validateAddress() {
    errors.value.address = validateAddressField(address.value);
  }

  function validateForm() {
    validateFirstName();
    validateLastName();
    validateMobilePhone();
    validatePhoneNumber();
    validateAddress();

    return Object.values(errors.value).every((error) => error === "");
  }

  function goToSelectLocation() {
    if (validateForm()) {
      router.push({
        path: "/address-location",
      });
    }
  }

  return {
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
  };
}
