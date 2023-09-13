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
      title: "Home",
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
          content: "Home",
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
