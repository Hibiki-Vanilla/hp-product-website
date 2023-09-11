<template>
  <section class="quality">
    <div class="qualityCon" data-aos="fade-up">
      <div class="qualityLeft imageItem"></div>

      <div class="qualityRight imageItem">
        <div class="qualityRightTop textLight">
          We take pride in our commitment to quality. Every PoweHi vaporizer undergoes
          rigorous testing and adheres to the highest manufacturing standards. From the
          selection of premium materials to the precision craftsmanship, we strive to
          deliver a superior product that meets the demands of discerning cannabis
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
  padding-top: (200 / @morem);
  padding-bottom: (90 / @morem);

  .qualityCon {
    margin: 0 auto;
    height: (740 / @morem);
    padding: (50 / @morem) 0;
    width: (570 / @morem);
    background-color: #eeeeee;
    border-radius: (14 / @morem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .qualityLeft {
    background-image: url("@/static/about/quality/moLeft.png");
    height: (281 / @morem);
    width: (520 / @morem);
  }
  .qualityRight {
    display: flex;
    justify-content: space-between;
    height: (330 / @morem);
    width: (520 / @morem);
    .qualityRightTop {
      display: flex;
      align-items: center;
      width: (330 / @morem);
      height: 100%;
      background-color: @white;
      border-radius: (14 / @morem);
      box-sizing: border-box;
      padding-left: (30 / @morem);
      padding-right: (30 / @morem);
      color: #707070;
      font-size: (16 / @morem);
    }

    .qualityRightBottom {
      width: (160 / @morem);
      height: (330 / @morem);
      background-image: url("@/static/about/quality/moBg.png");
    }
  }
}
</style>
