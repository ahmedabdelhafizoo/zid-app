<template>
  <button
    class="btn"
    :class="[{ 'btn--arrow': showArrowIcon }, btnClass]"
    v-bind="$attrs"
  >
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.634"
      height="17.414"
      viewBox="0 0 9.634 17.414"
      v-if="showArrowIcon"
    >
      <path
        data-name="Path 51635"
        d="M12,17.414,3.293,8.707,4.23,7.78,12,15.5,19.723,7.78l.984.927Z"
        transform="translate(17.414 -3.293) rotate(90)"
        fill="#fdb515"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnClass: {
      default: "btn--purple",
    },
    showArrowIcon: {
      default: false,
    },
  },
};
</script>
