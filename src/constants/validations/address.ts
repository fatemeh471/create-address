export function validateFirstNameField(value: string): string {
  if (!value) return "نام الزامی است";
  if (value.length < 3) return "نام باید حداقل ۳ کاراکتر باشد";
  return "";
}

export function validateLastNameField(value: string): string {
  if (!value) return "نام خانوادگی الزامی است";
  if (value.length < 3) return "نام خانوادگی باید حداقل ۳ کاراکتر باشد";
  return "";
}

export function validateMobilePhoneField(value: string): string {
  const phoneRegex = /^09\d{9}$/;
  if (!value) return "شماره تلفن همراه الزامی است";
  if (!phoneRegex.test(value)) return "شماره وارد شده صحیح نمی باشد";
  return "";
}

export function validatePhoneNumberField(value: string): string {
  if (!value) return "";
  const landlineRegex = /^0\d{10}$/;
  if (!landlineRegex.test(value)) return "شماره وارد شده صحیح نمی باشد";
  return "";
}

export function validateAddressField(value: string): string {
  if (!value) return "آدرس الزامی است";
  if (value.length < 10) return "آدرس باید حداقل ۱۰ کاراکتر باشد";
  return "";
}
