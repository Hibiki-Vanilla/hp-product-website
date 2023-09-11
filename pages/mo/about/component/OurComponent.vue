<template>
  <section class="our">
    <div class="ourCon imageItem" data-aos="fade-up">
      <div class="ourTitle textBold titleSize">OUR MISSION</div>
      <div class="ourTip textLight">EMPOWER THE HIGH</div>
      <div class="ourText textLight">
        POWEHI empowers you to embrace your true potential through our exceptional vaping
        devices. We believe that every individual has the power to shape their experiences
        and unlock their creativity, inspiration, and focus.
        <br />
        <br />

        With POWEHI by your side, you have the tools to transcend boundaries, explore new
        horizons, and tap into the limitless possibilities that cannabis has to offer.
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.our {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: (70 / @morem) 0 (90 / @morem);
  background-color: @white;

  .ourCon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: (400 / @morem);
    width: (550 / @morem);
    background-image: url("@/static/about/moOur.png");

    .ourTitle {
      color: @white;
      padding-bottom: (20 / @morem);
    }
    .ourTip {
      color: @white;
      text-align: center;
      font-size: (24 / @morem);
      padding-bottom: (20 / @morem);
    }
    .ourText {
      color: @white;
      width: 100%;
      box-sizing: border-box;
      padding: 0 (60 / @morem);
      text-align: center;
      font-size: (16 / @morem);
    }
  }
}
</style>
