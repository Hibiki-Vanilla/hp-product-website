<template>
  <div class="calio">
    <BannerComponent />
    <ModelComponent />
    <UnleashComponent />
    <TechComponent />
    <FullyComponent />
    <DualComponent/>
    <ColorComponent/>
    <ScrollComponent/>

  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import ModelComponent from "./component/ModelComponent.vue";
import UnleashComponent from "./component/UnleashComponent.vue";
import TechComponent from "./component/TechComponent.vue";
import FullyComponent from "./component/FullyComponent.vue";
import DualComponent from "./component/DualComponent.vue";
import ColorComponent from "./component/ColorComponent.vue";
import ScrollComponent from "./component/ScrollComponent.vue";

export default {
  name: "Calio",
  components: {
    BannerComponent,
    ModelComponent,
    UnleashComponent,
    TechComponent,
    FullyComponent,
    DualComponent,
    ColorComponent,
    ScrollComponent
  },
  head() {
    return {
      title: "Calio",
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
