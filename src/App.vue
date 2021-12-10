<template>
  <div id="app">
    <AppHeader />
    <Home />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import Home from "@/pages/Home";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Home,
  },
};
</script>
