<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon" data-aos="fade-up">
      <h2 class="unleashTitle textBlack titleSize">
        UNLEASH THE POWER
        <br />
        OF YOUR EXTRACTS
      </h2>

      <div class="unleashText textLight textSize">
        CALIO, the first product from POWEHI, is more than just a product.
        <br />
        It is a masterpiece of art and technology that embodies our values and spirit.
        <br />
        With its thrilling performance and cutting-edge design, CALIO offers users an
        unprecedentedly intelligent and convenient experience.
        <br />
        We believe that CALIO will set a new benchmark for the industry and lead the way
        in the development of new technologies.
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
  height: (1334 / @morem);
  background-image: url("https://files.myuwell.com/powehi/calio/moBannerThree.png");

  .unleashCon {
    height: 100%;
    width: (550 / @morem);
    margin: 0 auto;

    text-align: center;
    .unleashTitle {
      padding-top: (90 / @morem);
      padding-bottom: (40 / @morem);
    }

    .unleashText {
      line-height: 1.2;
    }
  }
}
</style>
