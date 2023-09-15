<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon">
      <div class="dualLeft" data-aos="fade-up">
        <div class="dualTitle textBlack titleSize">
          DUAL AIR-FLOW & PRE-HEATING FOR ANTI-CLOGGING
        </div>
        <div class="dualText textSize textLight">
          CALIO has dual air-flow that provides a smooth vaping experience. The
          pre-heating function helps prevent clogging.
          <br />
          <br />
          With button activation and 3 level voltages adjustment that allows you to
          customize your vaping experience.
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
.dual {
  height: (1080 / @pcrem);
  background-image: url("@/static/calio/dual.png");
  .dualCon {
    display: flex;
    width: (1400 / @pcrem);
    height: 100%;
    margin: 0 auto;
    .dualLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;

      .dualTitle {
        padding-bottom: (50 / @pcrem);
      }
      .dualText {
        height: 1.5;
      }
    }
  }
}
</style>
