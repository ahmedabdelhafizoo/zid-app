<template>
  <div class="card d-flex">
    <div class="card__img ms-2">
      <img :src="app.img" alt="app image" width="44" />
    </div>
    <div>
      <div class="d-flex align-items-center flex-wrap">
        <h6 class="card__title mb-1">{{ app.name }}</h6>
        <div class="card__rating me-3 mb-1">
          <span class="card__rating__icon ms-2">&#9733;</span>
          <strong>{{ app.ratingValue }}</strong>
        </div>
      </div>
      <p>
        تطوير <span>: {{ app.developerName }}</span>
      </p>
      <p class="mb-0">
        {{ app.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    app: {
      type: Object,
      required: true,
    },
  },
};
</script>
