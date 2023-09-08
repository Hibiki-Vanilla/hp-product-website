<template>
  <div class="about">
    <BannerComponent />
    <WhoComponent />
    <OurComponent />
    <OfferComponent />
    <TechComponent/>
    <RequestForm />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import WhoComponent from "./component/WhoComponent.vue";
import OurComponent from "./component/OurComponent.vue";
import OfferComponent from "./component/OfferComponent.vue";
import TechComponent from "./component/TechComponent.vue";


export default {
  name: "About",
  components: {
    BannerComponent,
    WhoComponent,
    OurComponent,
    OfferComponent,
    TechComponent
  },
  head() {
    return {
      title: "About",
      meta: [
        {
          name: "keywords",
          content: "",
        },
        {
          name: "description",
          content: "",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "Solution",
        },
        {
          property: "og:description",
          content: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.about {
  background-color: #eee;
}
</style>
