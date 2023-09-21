<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon" data-aos="fade-up">
      <h2 class="fullyTitle textBlack titleSize">
        FULLY VISIBLE AND
        <br />
        CUSTOMIZABLE OIL WINDOW
      </h2>
      <div class="fullyText textSize textLight">
        A fully visible oil window that allows you to see how much oil is left in the
        tank. You can also customize the oil window with your own logo or design.
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.fully {
  height: (1334 / @morem);
  background-image: url("https://files.myuwell.com/powehi/calio/moFully.png");
  .fullyCon {
    display: flex;
    flex-direction: column;
    width: (550 / @morem);
    height: 100%;
    margin: 0 auto;
    text-align: center;

    .fullyTitle {
      padding-top: (250 / @morem);
      padding-bottom: (40 / @morem);
    }
    .fullyText {
      line-height: 1.2;
    }
  }
}
</style>
