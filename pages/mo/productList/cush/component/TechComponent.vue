<template>
  <section class="tech imageItem" data-aos="zoom">
    <div class="techCon imageItem" data-aos="fade-up">
      <h2 class="techTitle textBlack titleSize">
        POWERFUL PERFORMANCE,
          <br />
          ENDLESS ENJOY.
      </h2>

      <div class="techText textSize textLight">
        Equipped with a top-of-the-line VISCORE® ceramic heating core, CUSH is specially designed to provide the
          ultimate taste experience. With standout features such as a 320mAh battery and rechargeable Type-C port, CUSH
          ensures your enjoyment until the very last drop.
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.tech {
  height: (1334 / @morem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://files.myuwell.com/powehi/cush/mo/powerful.png');

  .techCon {
    height: 100%;
    width: (550 / @morem);
    text-align: center;
    .techTitle {
      padding-top: (660 / @morem);
      padding-bottom: (50 / @morem);
    }
    .techText {
      margin: 0 auto;
    }
  }
}
</style>
