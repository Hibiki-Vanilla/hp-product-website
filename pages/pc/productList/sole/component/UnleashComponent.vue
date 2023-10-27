<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon">
      <div class="unleashRight" data-aos="fade-up">
        <h2 class="unleashTitle textBlack titleSize">
          EYE-CAPTURED
          <br />
          SURFACE DESIGN
        </h2>
        <div class="unleashText textLight textSize">
          Integrating a visible oil window on the side and minimalist surface into a compact body, SOLE boasts a thin and smooth appearance that provides a highly comfortable grip, making it irresistible to consumers.
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
  background-image: url('https://files.myuwell.com/powehi/sole/pc/eye.png');

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
