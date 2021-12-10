<template>
  <section class="banner-section text-center py-5 my-2 my-md-5">
    <div class="container">
      <h1 class="banner-section__title">
        طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد
      </h1>
      <p class="banner-section__desc">
        طور تجارتك من خلال تطبيقات و حلول سوق تطبيقات زد التي تساعدك في نمو
        أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
      </p>
      <AppButton showArrowIcon="true">تصفح التطبيقات</AppButton>
      <div class="mt-5">
        <BannerImage
          imgSrc="https://zid.sa/wp-content/themes/zid2020/images/product01.gif"
          :center="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BannerImage from "@/components/UI/BannerImage.vue";
export default {
  name: "BannerSection",
  components: {
    BannerImage,
  },
};
</script>
