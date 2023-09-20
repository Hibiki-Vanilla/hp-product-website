<template>
  <section class="color imageItem" data-aos="zoom">
    <div class="colorCon" data-aos="fade-up">
      <h2 class="colorTitle textBlack titleSize">
        WHITE LABEL FOR OEM/ODM CUSTOMIZATION
      </h2>
      <div class="colorText textSize textLight">
        Why not customize our CALIO for your brand?
        <br />
        POWEHI provides various OEM and ODM solutions for your business.
        <br />
        Want to try our products? Contact us today for a FREE sample.
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.color {
  height: (1080 / @pcrem);
  background-image: url("https://files.myuwell.com/powehi/calio/color.png");
  .colorCon {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: (1400 / @pcrem);
    height: 100%;
    margin: 0 auto;

    .colorTitle {
      padding-top: (100 / @pcrem);
      padding-bottom: (50 / @pcrem);
    }
    .colorText {
      height: 1.5;
    }
  }
}
</style>
