<template>
  <section class="color imageItem" data-aos="zoom">
    <div class="colorCon" data-aos="fade-up">
      <div class="colorTitle textBlack titleSize">
        White Label For OEM/ODM Customization
      </div>
      <div class="colorText textSize textLight">
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
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.color {
  height: (1334 / @morem);
  background-image: url("@/static/calio/moColor.png");
  .colorCon {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: (550 / @morem);
    height: 100%;
    margin: 0 auto;

    .colorTitle {
      padding-top: (100 / @morem);
      padding-bottom: (50 / @morem);
    }
    .colorText {
      height: 1.2;
    }
  }
}
</style>
