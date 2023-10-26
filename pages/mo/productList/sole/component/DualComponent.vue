<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon" data-aos="fade-up">
      <h2 class="dualTitle textBlack titleSize">WHITE LABLE FOR OEM/ODM CUSTOMIZATION</h2>
      <div class="dualText textSize textLight">
        Why not customize our CALIO for your brand?
        <br />
        POWEHI provide various OEM and ODM solutions for your business.
        <br />
        Want to try our products? Contact us today for a FREE sample.
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.dual {
  height: (1334 / @morem);
  background-image: url('@/static/sole/mo/color.png');
  .dualCon {
    display: flex;
    flex-direction: column;
    width: (550 / @morem);
    height: 100%;
    margin: 0 auto;
    text-align: center;

    .dualTitle {
      padding-top: (160 / @morem);
      padding-bottom: (40 / @morem);
    }
    .dualText {
      line-height: 1.2;
    }
  }
}
</style>
