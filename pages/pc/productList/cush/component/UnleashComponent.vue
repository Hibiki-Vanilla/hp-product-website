<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon">
      <div class="unleashRight" data-aos="fade-up">
        <h2 class="unleashTitle textBlack titleSize">
          PERSONALIZED
          <br />
          APPEARANCE
        </h2>

        <div class="unleashText textLight textSize">
          Distinguished from traditional vaporizers, CUSH boasts a curved and ergonomic drip-tip, stylish small box
          shape, and customizable artistic patterns that enhance, allowing every inhale to provide true bliss.
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
.unleash {
  height: (1080 / @pcrem);
  background-image: url('@/static/cush/pc/bannerThree.png');

  .unleashCon {
    height: 100%;
    width: (1400 / @pcrem);
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .unleashRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding-left: (100 / @pcrem);
      width: 50%;
      height: 100%;

      .unleashTitle {
        padding-bottom: (40 / @pcrem);
      }

      .unleashText {
        line-height: 1.5;
      }
    }
  }
}
</style>
