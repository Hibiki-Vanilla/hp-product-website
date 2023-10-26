<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon" data-aos="fade-up">
      <h2 class="unleashTitle textBlack titleSize">
        THE EMBODIMENT
        <br />
        OF MINIMALIST
      </h2>

      <div class="unleashText textLight textSize">
        Configured with delicate curve all-around and
        <br />
        discreet compact body, BELLO metal-bodied
        <br />
        presents a low-profile yet modern look, emphasizing
        <br />
        aesthetic design taste.
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
  background-image: url('@/static/bello/moBannerThree.png');

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
