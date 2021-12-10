<template>
  <li class="features__list__item align-items-center d-flex">
    <div
      class="features__list__item__img d-flex align-items-center justify-content-center rounded-circle bg-white ms-3"
    >
      <img :src="imgSrc" alt="feature img" width="22" height="22" />
    </div>
    <p class="m-0">{{ text }}</p>
  </li>
</template>

<script>
export default {
  name: "FeatureItem",
  props: {
    text: {
      required: true,
      type: String,
    },
    imgSrc: {
      required: true,
      type: String,
    },
  },
};
</script>
