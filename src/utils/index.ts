import { ref } from "vue";

const message = ref("");
const visible = ref(false);
export function showToast(msg: string) {
  message.value = msg;
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 5000);
}

export { message, visible };
