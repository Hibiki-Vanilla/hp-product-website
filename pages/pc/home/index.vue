<template>
  <div class="home">
    <BannerComponent />
    <ChangeComponent />
    <WhyComponent />
    <ProductsComponent />
    <CustomComponent />
    <ValueComponent />
    <SubscribeComponent />
    <RequestForm :page-value="'home'" />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import ChangeComponent from "./component/ChangeComponent.vue";
import WhyComponent from "./component/WhyComponent.vue";
import ProductsComponent from "./component/ProductsComponent.vue";
import CustomComponent from "./component/CustomComponent.vue";
import ValueComponent from "./component/ValueComponent.vue";
import SubscribeComponent from "./component/SubscribeComponent.vue";

export default {
  name: "Home",
  components: {
    BannerComponent,
    ChangeComponent,
    WhyComponent,
    ProductsComponent,
    CustomComponent,
    ValueComponent,
    SubscribeComponent,
  },
  head() {
    return {
      title: "POWEHI - Reliable Cannabis Vape Hardware OEM/ODM Solution Supplier",
      meta: [
        {
          name: "keywords",
          content:
            "POWEHI, cannabis vape, THC/CBD vape, Delta 8 vaporizer, Vape hardware, Vape solution, Vape OEM ODM, Vape manufacturer, Disposable pen provider.",
        },
        {
          name: "description",
          content:
            "POWEHI is a leading cannabis vaping device manufacturer that offers total solutions for CBD/THC vape products, customized designs, and end-to-end services.",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "POWEHI - Reliable Cannabis Vape Hardware OEM/ODM Solution Supplier",
        },
        {
          property: "og:description",
          content:
            "POWEHI is a leading cannabis vaping device manufacturer that offers total solutions for CBD/THC vape products, customized designs, and end-to-end services.",
        },
      ],
    };
  },
};
</script>
