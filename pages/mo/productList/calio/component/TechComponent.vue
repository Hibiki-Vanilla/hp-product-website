<template>
  <section class="tech" data-aos="zoom">
    <div class="techCon imageItem" data-aos="fade-up">
      <div class="techTitle textBlack titleSize">
        VISCORE® CERAMIC
        <br />
        HEATING TECHNOLOGY
      </div>

      <div class="techText textSize textLight">
        Our proprietary ceramic formula allows the product to be both sturdy and sleek.
        Catering to the unique traits of various oils and viscosities, all of our
        cartridges feature the renowned proprietary ceramic heating element.
        <br />
        VISCORE patented ceramic heating core is precisely engineered with the perfected
        porosity and structure that allows for purer flavors, more powerful potency, and
        minimal possibility of burnt tastes.
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.tech {
  height: (1334 / @morem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .techCon {
    height: (1234 / @morem);
    width: (650 / @morem);
    background-image: url("@/static/calio/moTech.png");
    text-align: center;
    .techTitle {
      padding-top: (100 / @morem);
      padding-bottom: (50 / @morem);
    }
    .techText {
      margin: 0 auto;
      width: (550 / @morem);
    }
  }
}
</style>
