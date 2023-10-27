<template>
  <div class="calio">
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
  name: "Sole",
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
      title: "Experience Optimal Flavors with SOLE's Viscosity Compatibility | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "CBD, THC, vaping, SOLE, viscosity compatibility, visible oil window, VISCORE® ceramic heating core, preheating function, three-level voltage system, medical-grade stainless steel, rechargeable battery, thin and smooth appearance, comfortable grip",
        },
        {
          name: "description",
          content:
            "SOLE boasts a thin and smooth appearance with a visible oil window on the side. Its patented VISCORE® ceramic heating core, preheating function, and three-level voltage system deliver consistent and satisfying flavors. ",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "Experience Optimal Flavors with SOLE's Viscosity Compatibility | POWEHI",
        },
        {
          property: "og:description",
          content:
            "SOLE boasts a thin and smooth appearance with a visible oil window on the side. Its patented VISCORE® ceramic heating core, preheating function, and three-level voltage system deliver consistent and satisfying flavors. ",
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
