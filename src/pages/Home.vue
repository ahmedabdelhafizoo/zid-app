<template>
  <div>
    <BannerSection />
    <FeaturesSection />
    <SpecialAppsSection />
  </div>
</template>

<script>
import BannerSection from "@/components/home/BannerSection.vue";
import FeaturesSection from "@/components/home/FeaturesSection.vue";
import SpecialAppsSection from "@/components/home/SpecialAppsSection.vue";
export default {
  name: "Home",
  components: {
    BannerSection,
    FeaturesSection,
    SpecialAppsSection,
  },
};
</script>
