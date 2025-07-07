<template>
  <span
    v-for="n in 3"
    :key="n"
    class="w-2 h-2 bg-current rounded-full me-2 animate-bounce"
    :class="`[animation-delay:-${0.32 - (n - 1) * 0.16}s]`"
  ></span>
</template>
