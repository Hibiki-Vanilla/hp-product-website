<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon">
      <div class="fullyRight" data-aos="fade-up">
        <h2 class="fullyTitle textBlack titleSize">
          BOTH TOP-CLASS
          <br />
          OF CONVENIENCE
          <br />
          AND SAFETY
        </h2>
        <div class="fullyText textSize textLight">
          BELLO's interior is engineered with medical-grade 316L stainless steel materials, ensuring a clean and safe
          delivery of flavors. Its button activation with preheating function allows for a hassle-free experience,
          allowing your customers to indulge in the ultimate vaping experience.
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
  background-image: url('@/static/bello/fully.png');
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
      box-sizing: border-box;
      padding-left: (150/@pcrem);
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
