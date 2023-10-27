<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon">
      <div class="fullyRight" data-aos="fade-up">
        <h2 class="fullyTitle textBlack titleSize">
          THE FUSION OF SECURITY
          <br />
          AND EFFICIENCY
        </h2>
        <div class="fullyText textSize textLight">
          Designed with safety in mind, CUSH features a medical-grade 316L stainless steel center post and mouthpiece.
          With the added convenience of a preheating function, CUSH can be easily activated with the press of a button.
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
.fully {
  height: (1080 / @pcrem);
  background-image: url('https://files.myuwell.com/powehi/cush/pc/fully.png');
  .fullyCon {
    display: flex;
    width: (1400 / @pcrem);
    height: 100%;
    margin: 0 auto;
    .fullyRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
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
