<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon">
      <div class="dualLeft" data-aos="fade-up">
        <h2 class="dualTitle textBlack titleSize">WHITE LABLE FOR OEM/ODM CUSTOMIZATION</h2>
        <div class="dualText textSize textLight">
          Why not customize our SOLE for your brand?
          <br />
          POWEHI provide various OEM and ODM solutions for your business.
          <br />
          Want to try our products? Contact us today for a FREE sample.
        </div>
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
  height: (1080 / @pcrem);
  background-image: url('@/static/sole/pc/color.png');
  .dualCon {
    display: flex;
    width: (1400 / @pcrem);
    height: 100%;
    margin: 0 auto;
    .dualLeft {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-align: center;

      .dualTitle {
        padding-top: (100 / @pcrem);
        padding-bottom: (50 / @pcrem);
      }
      .dualText {
        height: 1.5;
      }
    }
  }
}
</style>
