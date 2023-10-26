<template>
  <section class="unleash imageItem" data-aos="zoom">
    <div class="unleashCon">
      <div class="unleashRight" data-aos="fade-up">
        <h2 class="unleashTitle textBlack titleSize">
          THE EMBODIMENT
          <br />
          OF MINIMALIST
        </h2>

        <div class="unleashText textLight textSize">
          Configured with delicate curve all-around and discreet compact body, BELLO metal-bodied presents a low-profile
          yet modern look, emphasizing aesthetic design taste.
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
  background-image: url('@/static/bello/bannerThree.png');

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
      padding-left: (100/@pcrem);
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
