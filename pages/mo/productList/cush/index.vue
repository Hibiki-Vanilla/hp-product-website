<template>
  <div class="cush">
    <BannerComponent />
    <ModelComponent />
    <UnleashComponent />
    <TechComponent />
    <FullyComponent />
    <DualComponent />
    <ScrollComponent />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import ModelComponent from "./component/ModelComponent.vue";
import UnleashComponent from "./component/UnleashComponent.vue";
import TechComponent from "./component/TechComponent.vue";
import FullyComponent from "./component/FullyComponent.vue";
import DualComponent from "./component/DualComponent.vue";
import ScrollComponent from "./component/ScrollComponent.vue";

export default {
  name: "Cush",
  components: {
    BannerComponent,
    ModelComponent,
    UnleashComponent,
    TechComponent,
    FullyComponent,
    DualComponent,
    ScrollComponent,
  },
  head() {
    return {
      title: "Enjoy the Ultimate Taste Experience with CUSH | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "CBD, THC, vape, CUSH, taste experience, VISCORE® ceramic heating core, medical-grade stainless steel, preheating function, rechargeable battery, personalized appearance, smooth flavors, powerful potency, endless enjoyment",
        },
        {
          name: "description",
          content:
            "Equipped with a top-of-the-line ceramic heating core, CUSH's stylish box shape, 280mAh battery, and rechargeable Type-C port deliver powerful performance with every inhale. ",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "Enjoy the Ultimate Taste Experience with CUSH | POWEHI",
        },
        {
          property: "og:description",
          content:
            "Equipped with a top-of-the-line ceramic heating core, CUSH's stylish box shape, 280mAh battery, and rechargeable Type-C port deliver powerful performance with every inhale. ",
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
