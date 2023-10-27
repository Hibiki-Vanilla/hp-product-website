<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon">
      <div class="dualLeft" data-aos="fade-up">
        <h2 class="dualTitle textBlack titleSize">
          BUTTON ACTIVATION AND 3 LEVEL VOLTAGES ADJUSTMENT FOR CUSTOMIZED VAPING
        </h2>
        <div class="dualText textSize textLight">
          CALIO offers a truly personalized vaping experience with its button activation and 3 level voltages adjustment feature.
        Simply press the button to activate the device and choose from three voltage levels to customize your ideal vaping experience. 
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
  background-image: url("https://files.myuwell.com/powehi/calio/dual.png");
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
