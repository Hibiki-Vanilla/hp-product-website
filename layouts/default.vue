<template>
  <div class="layout">
    <Header />
    <nuxt />
    <Footer />
    <AgeWarning />
    <CookiesTip />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
// import AgeWarning from "@/components/ageWarning/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped lang="less"></style>
