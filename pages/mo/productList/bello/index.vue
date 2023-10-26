<template>
  <div class="bello">
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
  name: "Bello",
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
      title: "Calio - A Classical Design 1g/2g Disposable Cannabis Vape | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "CALIO,  POWEHI, Disposable Cannabis Vape, 1g CBD Vape, 2g D8 Vape, Delta-8 Vape device, 2mL HHC disposable, Hemp Vape pen.",
        },
        {
          name: "description",
          content:
            "A Premium CBD 1mL/2mL vape pen with innovative technology, pre-heating and voltages adjustment, experience the perfect blend of style and functionality.",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "Calio - A Classical Design 1g/2g Disposable Cannabis Vape | POWEHI",
        },
        {
          property: "og:description",
          content:
            "A Premium CBD 1mL/2mL vape pen with innovative technology, pre-heating and voltages adjustment, experience the perfect blend of style and functionality.",
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
