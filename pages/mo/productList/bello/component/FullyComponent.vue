<template>
  <section class="fully imageItem" data-aos="zoom">
    <div class="fullyCon" data-aos="fade-up">
      <h2 class="fullyTitle textBlack titleSize">
        BOTH TOP-CLASS OF
        <br />
        CONVENIENCE AND SAFETY
      </h2>
      <div class="fullyText textSize textLight">
        BELLO's interior is engineered with medical-grade 316L stainless steel materials, ensuring a clean and safe
        delivery of flavors. Its button activation with preheating function allows for a hassle-free experience,
        allowing your customers to indulge in the ultimate vaping experience.
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
  background-image: url('@/static/bello/moFully.png');
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
