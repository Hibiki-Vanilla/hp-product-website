<template>
  <section class="tech" data-aos="zoom">
    <div class="techCon imageItem" data-aos="fade-up">
      <h2 class="techTitle textBlack titleSize">
        STANDOUT POTENCY GIVES
        <br />
        THE BEST EXPERIENCE
      </h2>

      <div class="techText textSize textLight">
        Thanks to the VISCORE® ceramic heating core, 280mAh battery, and rechargeable USB Type-C port, BELLO not only
        delivers a smooth, pure, full-body hit anytime but also ensures that consumers never run out of juice anywhere.
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {}
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
    background-image: url('@/static/bello/moTech.png');
    text-align: center;
    .techTitle {
      padding-top: (830 / @morem);
      padding-bottom: (50 / @morem);
    }
    .techText {
      margin: 0 auto;
      width: (550 / @morem);
    }
  }
}
</style>
