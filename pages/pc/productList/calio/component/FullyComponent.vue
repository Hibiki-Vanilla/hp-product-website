<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon">
      <div class="fullyRight" data-aos="fade-up">
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
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.fully {
  height: (1080 / @pcrem);
  background-image: url("https://files.myuwell.com/powehi/calio/fully.png");
  .fullyCon {
    display: flex;
    justify-content: flex-end;
    width: (1400 / @pcrem);
    height: 100%;
    margin: 0 auto;
    .fullyRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;

      .fullyTitle {
        padding-bottom: (50 / @pcrem);
      }
      .fullyText {
        line-height: 1.5;
      }
    }
  }
}
</style>
