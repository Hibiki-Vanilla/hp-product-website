<template>
  <div class="about">
    <BannerComponent />
    <WhoComponent />
    <OurComponent />
    <OfferComponent />
    <TechComponent />
    <LabComponent />
    <IsoComponent />
    <QualityComponent />
    <TeamComponent />
    <RequestForm :page-value="'about'" />
  </div>
</template>

<script>
import BannerComponent from "./component/BannerComponent.vue";
import WhoComponent from "./component/WhoComponent.vue";
import OurComponent from "./component/OurComponent.vue";
import OfferComponent from "./component/OfferComponent.vue";
import TechComponent from "./component/TechComponent.vue";
import LabComponent from "./component/LabComponent.vue";
import IsoComponent from "./component/IsoComponent.vue";
import QualityComponent from "./component/QualityComponent.vue";
import TeamComponent from "./component/TeamComponent.vue";

export default {
  name: "About",
  components: {
    BannerComponent,
    WhoComponent,
    OurComponent,
    OfferComponent,
    TechComponent,
    LabComponent,
    IsoComponent,
    QualityComponent,
    TeamComponent,
  },
  head() {
    return {
      title: "About Us - A Turnkey Cannabis Vaping Manufacturer | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "About POWEHI, Turnkey CBD service, Cannabis Vape Pen supplier, one-stop solution, End-To-End service.",
        },
        {
          name: "description",
          content:
            "POWEHI committed to providing one-stop solution for cannabis vape brands, from product design, development, testing, production, co-packaging, to delivery.",
        },

        {
          property: "og:type",
          content: "product",
        },
        {
          property: "og:title",
          content: "About Us - A Turnkey Cannabis Vaping Manufacturer | POWEHI",
        },
        {
          property: "og:description",
          content:
            "POWEHI committed to providing one-stop solution for cannabis vape brands, from product design, development, testing, production, co-packaging, to delivery.",
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
