<template>
  <div class="solution">
    <BannerComponent />
    <ChooseComponent />
    <TabComponent />
    <BrandComponent />
    <ProductComponent />
    <PackageComponent />
    <EngageComponent />
    <QuoteComponent />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import ChooseComponent from "./component/ChooseComponent.vue";
import TabComponent from "./component/TabComponent.vue";
import BrandComponent from "./component/BrandComponent.vue";
import ProductComponent from "./component/ProductComponent.vue";
import PackageComponent from "./component/PackageComponent.vue";
import EngageComponent from "./component/EngageComponent.vue";
import QuoteComponent from "./component/QuoteComponent.vue";

export default {
  name: "Solution",
  components: {
    BannerComponent,
    ChooseComponent,
    TabComponent,
    BrandComponent,
    ProductComponent,
    PackageComponent,
    EngageComponent,
    QuoteComponent,
  },
  head() {
    return {
      title: "Solution",
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
