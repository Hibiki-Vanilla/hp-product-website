<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon" data-aos="fade-up">
      <h2 class="dualTitle textBlack titleSize">
        BUTTON ACTIVATION AND 3 LEVEL VOLTAGES ADJUSTMENT FOR CUSTOMIZED VAPING
      </h2>
      <div class="dualText textSize textLight">
        CALIO offers a truly personalized vaping experience with its button activation and 3 level voltages adjustment feature.
        Simply press the button to activate the device and choose from three voltage levels to customize your ideal vaping experience. 
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
  height: (1334 / @morem);
  background-image: url("https://files.myuwell.com/powehi/calio/moDual.png");
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
