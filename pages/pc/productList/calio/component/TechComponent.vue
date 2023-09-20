<template>
  <section class="tech" data-aos="zoom">
    <div class="techCon imageItem">
      <div class="techLeft" data-aos="fade-up">
        <h2 class="techTitle textBlack titleSize">
          VISCORE® CERAMIC
          <br />
          HEATING TECHNOLOGY
        </h2>

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
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.tech {
  height: (1080 / @pcrem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .techCon {
    height: (881 / @pcrem);
    width: (1452 / @pcrem);
    background-image: url("https://files.myuwell.com/powehi/calio/tech.png");

    .techLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #000;
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      padding-left: (110 / @pcrem);
    }
    .techTitle {
      padding-bottom: (60 / @pcrem);
      letter-spacing: -0.1vw;
    }
    .techText {
      box-sizing: border-box;
      width: 100%;
      padding-right: (80 / @pcrem);
    }
  }
}
</style>
