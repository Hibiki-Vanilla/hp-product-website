<template>
  <section class="dual imageItem" data-aos="zoom">
    <div class="dualCon" data-aos="fade-up">
      <h2 class="dualTitle textBlack titleSize">
        DUAL AIR-FLOW & PRE-HEATING FOR ANTI-CLOGGING
      </h2>
      <div class="dualText textSize textLight">
        CALIO has dual air-flow that provides a smooth vaping experience. The pre-heating
        function helps prevent clogging.
        <br />
        <br />
        With button activation and 3 level voltages adjustment that allows you to
        customize your vaping experience.
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
