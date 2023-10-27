<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon" data-aos="fade-up">
      <h2 class="unleashTitle textBlack titleSize">
        PERSONALIZED APPEARANCE
      </h2>

      <div class="unleashText textLight textSize">
        Distinguished from traditional vaporizers, CUSH boasts a curved and ergonomic drip-tip, stylish small box
          shape, and customizable artistic patterns that enhance, allowing every inhale to provide true bliss.
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.unleash {
  height: (1334 / @morem);
  background-image: url('https://files.myuwell.com/powehi/cush/mo/bannerThree.png');

  .unleashCon {
    height: 100%;
    width: (600 / @morem);
    margin: 0 auto;
    text-align: center;
    .unleashTitle {
      padding-top: (180 / @morem);
      padding-bottom: (50 / @morem);
    }

    .unleashText {
      line-height: 1.2;
    }
  }
}
</style>
