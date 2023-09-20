<template>
  <section class="quality">
    <div class="qualityCon" data-aos="fade-up">
      <div class="qualityLeft imageItem">
        <h2 class="qualityLeftTitle textBold titleSize">
          UNCOMPROMISING
          <br />
          <span>QUALITY</span>
        </h2>
        <h3 class="textLight textSize">MAINTAINING HIGH-QUALITY STANDARDS</h3>
      </div>

      <div class="qualityRight imageItem" data-aos="fade-right">
        <div class="qualityRightTop textLight">
          We take pride in our commitment to quality. Every POWEHI vaporizer undergoes
          rigorous testing and adheres to the highest manufacturing standards. From the
          selection of premium materials to the precision craftsmanship, we strive to
          deliver a superior product that meets the demand of discerning cannabis
          enthusiasts. Our dedication to quality ensures that each inhale is a moment of
          pure satisfaction.
        </div>

        <div class="qualityRightBottom imageItem"></div>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.quality {
  background-color: @white;
  width: 100%;
  padding-top: (200 / @pcrem);
  padding-bottom: (120 / @pcrem);

  .qualityCon {
    margin: 0 auto;
    height: (670 / @pcrem);
    width: (1400 / @pcrem);
    background-color: #eeeeee;
    border-radius: (14 / @pcrem);
    box-sizing: border-box;
    padding: (30 / @pcrem);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .qualityLeft {
    background-image: url("https://files.myuwell.com/powehi/about/quality/left.png");
    height: (600 / @pcrem);
    width: (700 / @pcrem);
    box-sizing: border-box;
    padding-left: (40 / @pcrem);
    padding-top: (70 / @pcrem);
    z-index: 2;
    color: @white;

    .qualityLeftTitle {
      padding-bottom: (300 / @pcrem);
      span {
        border-bottom: 2px solid @white;
      }
    }
  }
  .qualityRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: (600 / @pcrem);
    width: (610 / @pcrem);
    .qualityRightTop {
      display: flex;
      align-items: center;
      width: 100%;
      height: (285 / @pcrem);
      background-color: @white;
      border-radius: (14 / @pcrem);
      box-sizing: border-box;
      padding-left: (40 / @pcrem);
      padding-right: (30 / @pcrem);
      color: #707070;
      font-size: (18 / @pcrem);
    }

    .qualityRightBottom {
      width: 100%;
      height: (285 / @pcrem);
      background-image: url("https://files.myuwell.com/powehi/about/quality/bg.png");
    }
  }

  .qualityRight[data-aos="fade-right"] {
    transform: translate3d(-100%, 0, 0);
  }
  .qualityRight[data-aos^="fade"][data-aos^="fade"].aos-animate {
    transform: translateZ(0);
  }

  //   285
}
</style>
