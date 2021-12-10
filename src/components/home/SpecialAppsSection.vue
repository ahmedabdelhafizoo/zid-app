<template>
  <section class="special-apps py-5">
    <div class="container">
      <div class="text-center mb-4 pb-1">
        <h2 class="special-apps__title">التطبيقات المميزة</h2>
        <p class="special-apps__desc">
          تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها
        </p>
      </div>
      <div class="special-apps__row d-flex flex-wrap justify-content-center">
        <AppCard :app="app" v-for="i in 4" :key="i" />
      </div>
    </div>

    <div class="text-center special-apps__btn-wrapper mt-4">
      <AppButton showArrowIcon="true">تصفح التطبيقات</AppButton>
    </div>
  </section>
</template>

<script>
import AppCard from "./AppCrad.vue";
export default {
  name: "SpecialApps",
  components: {
    AppCard,
  },
  data() {
    return {
      app: {
        name: "قمرة",
        ratingValue: 5,
        developerName: "عمر برهوم",
        desc: "نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك",
        img: require("@/assets/images/app.svg"),
      },
    };
  },
};
</script>
