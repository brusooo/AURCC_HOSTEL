<template>
  <div
    class="relative w-60 h-32 flex justify-center items-center overflow-hidden gap-5"
  >
    <span
      v-for="i in 5"
      class="relative -translate-y-20 w-5 h-5"
    ></span>
  </div>
</template>

<script setup></script>

<style scoped>
span:nth-child(1) {
  background-color: #2b2d42;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
span:nth-child(2) {
  background-color: #8d99ae;
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}
span:nth-child(3) {
  background-color: #edf2f4;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
span:nth-child(4) {
  background-color: #ef233c;
  -webkit-animation-delay: 1.25s;
  animation-delay: 1.25s;
}

span:nth-child(5) {
  background-color: #d90429;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

span {
  animation: waterfall 1.5s linear infinite;
}

@keyframes waterfall {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-250%);
    transform: translateY(-250%);
  }
  40%,
  60% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(250%);
    transform: translateY(250%);
  }
}
</style>
