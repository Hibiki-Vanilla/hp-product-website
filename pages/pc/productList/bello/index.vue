<template>
  <div class="bello">
    <BannerComponent />
    <ModelComponent />
    <UnleashComponent />
    <TechComponent />
    <FullyComponent />
    <DualComponent />
    <SwiperComponent />
    <SpeComponent />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import ModelComponent from "./component/ModelComponent.vue";
import UnleashComponent from "./component/UnleashComponent.vue";
import TechComponent from "./component/TechComponent.vue";
import FullyComponent from "./component/FullyComponent.vue";
import DualComponent from "./component/DualComponent.vue";
import SwiperComponent from "./component/SwiperComponent.vue";
import SpeComponent from "./component/SpeComponent.vue";

export default {
  name: "Bello",
  components: {
    BannerComponent,
    ModelComponent,
    UnleashComponent,
    TechComponent,
    FullyComponent,
    DualComponent,
    SwiperComponent,
    SpeComponent,
  },
  head() {
    return {
      title: "BELLO: The Perfect Blend of Minimalism and Potency | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "CBD, THC, vaping, BELLO, minimalist, VISCORE® ceramic heating core, 280mAh battery, USB Type-C port, medical-grade stainless steel, preheating function, full-body hit, pure flavors, convenient, safe.",
        },
        {
          name: "description",
          content:
            "Discover the perfect blend of minimalism and potency with BELLO's delicate curve and compact body. Its VISCORE® ceramic heating core, 280mAh battery, and rechargeable USB Type-C port deliver smooth and pure hits every time. ",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "BELLO: The Perfect Blend of Minimalism and Potency | POWEHI",
        },
        {
          property: "og:description",
          content:
            "Discover the perfect blend of minimalism and potency with BELLO's delicate curve and compact body. Its VISCORE® ceramic heating core, 280mAh battery, and rechargeable USB Type-C port deliver smooth and pure hits every time. ",
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
