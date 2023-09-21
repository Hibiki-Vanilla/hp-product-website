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
  name: "MSolution",
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
      title: "Solution - Customizable CBD/THC Vape Pen End-to-end Service | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "CBD Vape Pen, THC Vape Pen, Customizable Vape Pen, End-to-end Service, Customization Solution, White Label service.",
        },
        {
          name: "description",
          content:
            "POWEHI offers a comprehensive end-to-end services for customizable CBD/THC disposable pens, rechargeable, 510 cartridges and batteries.",
        },
        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "Solution - Customizable CBD/THC Vape Pen End-to-end Service | POWEHI",
        },
        {
          property: "og:description",
          content:
            "POWEHI offers a comprehensive end-to-end services for customizable CBD/THC disposable pens, rechargeable, 510 cartridges and batteries.",
        },
      ],
    };
  },
};
</script>
