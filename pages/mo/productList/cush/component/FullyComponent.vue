<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon" data-aos="fade-up">
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
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.fully {
  height: (1334 / @morem);
  background-image: url('@/static/cush/mo/moFully.png');
  .fullyCon {
    display: flex;
    flex-direction: column;
    width: (550 / @morem);
    height: 100%;
    margin: 0 auto;
    text-align: center;

    .fullyTitle {
      padding-top: (180 / @morem);
      padding-bottom: (60 / @morem);
    }
    .fullyText {
      line-height: 1.2;
    }
  }
}
</style>
