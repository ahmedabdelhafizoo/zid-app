<template>
  <section class="features py-5 py-lg-2">
    <div class="container">
      <div class="d-flex flex-wrap flex-md-nowrap align-items-center">
        <div class="features__info ps-md-4 order-2 order-md-1 mt-4 mt-md-0">
          <h2 class="features__title">كل ما تحتاجه لنمو متجرك فى مكان واحد</h2>
          <p class="features__desc mb-1">
            مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول
          </p>
          <p class="features__desc mb-3">
            سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
          </p>
          <ul class="features__list px-0">
            <FeatureItem
              v-for="feature in featuresList"
              :key="feature.id"
              :text="feature.text"
              :imgSrc="feature.imgSrc"
            />
          </ul>

          <AppButton showArrowIcon="true">تصفح التطبيقات</AppButton>
        </div>
        <div class="features__img px-2 flex-grow-1 order-1 order-md-2">
          <BannerImage
            imgSrc="https://zid.sa/wp-content/themes/zid2020/images/product01.gif"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BannerImage from "@/components/UI/BannerImage.vue";
import FeatureItem from "./FeatureItem.vue";
export default {
  name: "FeaturesSection",
  components: {
    BannerImage,
    FeatureItem,
  },
  data() {
    return {
      featuresList: [
        {
          id: 1,
          text: "سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك",
          imgSrc: require("@/assets/images/features/1.svg"),
        },
        {
          id: 2,
          text: "دعم فني و تقني متكامل متوفر على مدار الساعة",
          imgSrc: require("@/assets/images/features/2.svg"),
        },
        {
          id: 3,
          text: "أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة ",
          imgSrc: require("@/assets/images/features/3.svg"),
        },
      ],
    };
  },
};
</script>
