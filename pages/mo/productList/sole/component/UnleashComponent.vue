<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon" data-aos="fade-up">
      <h2 class="unleashTitle textBlack titleSize">
        EYE-CAPTURED
          <br />
          SURFACE DESIGN
      </h2>

      <div class="unleashText textLight textSize">
        Integrating a visible oil window on the side and minimalist surface into a compact body, SOLE boasts a thin and smooth appearance that provides a highly comfortable grip, making it irresistible to consumers.
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
  background-image: url('https://files.myuwell.com/powehi/sole/mo/eye.png');

  .unleashCon {
    height: 100%;
    width: (550 / @morem);
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
