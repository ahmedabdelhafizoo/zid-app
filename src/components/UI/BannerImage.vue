<template>
  <div class="banner-img" :class="{ 'mx-auto': center }">
    <img
      src="https://zid.sa/wp-content/themes/zid2020/images/product01.gif"
      alt="banner img"
    />
  </div>
</template>

<script>
export default {
  name: "BannerImage",
  props: {
    imgSrc: {
      required: true,
    },
    center: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
