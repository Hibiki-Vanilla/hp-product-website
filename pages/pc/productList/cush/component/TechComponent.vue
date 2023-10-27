<template>
  <section class="tech imageItem" data-aos="zoom">
    <div class="techCon imageItem">
      <div class="techLeft" data-aos="fade-up">
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
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.tech {
  height: (1080 / @pcrem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://files.myuwell.com/powehi/cush/pc/powerful.png');

  .techCon {
    height: 100%;
    width: (1400 / @pcrem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .techLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #000;
      height: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    .techTitle {
      padding-bottom: (60 / @pcrem);
      letter-spacing: -0.1vw;
    }
    .techText {
      box-sizing: border-box;
      width: (780 / @pcrem);
    }
  }
}
</style>
