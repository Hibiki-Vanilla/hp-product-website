<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon">
      <div class="unleashRight" data-aos="fade-up">
        <div class="unleashTitle textBlack titleSize">
          Unleash The Power
          <br />
          Of Your Extracts
        </div>

        <div class="unleashText textLight textSize">
          CALIO, the first product from POWEHI, is more than just a product.
          <br />
          It is a masterpiece of art and technology that embodies our values and spirit.
          <br />
          With its cutting-edge performance and design, CALIO offers users an
          unprecedentedly intelligent and convenient experience. We believe that CALIO
          will set a new benchmark for the industry and lead the way in the development of
          new technologies.
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
.unleash {
  height: (1080 / @pcrem);
  background-image: url("@/static/calio/bannerThree.png");

  .unleashCon {
    height: 100%;
    width: (1400 / @pcrem);
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .unleashRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;

      .unleashTitle {
        padding-bottom: (40 / @pcrem);
      }

      .unleashText {
        line-height: 1.5;
      }
    }
  }
}
</style>
