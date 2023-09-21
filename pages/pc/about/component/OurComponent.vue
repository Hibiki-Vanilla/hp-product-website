<template>
  <section class="our">
    <div class="ourCon imageItem" data-aos="fade-up">
      <h2 class="ourTitle textBold titleSize">OUR MISSION</h2>
      <h3 class="ourTip textLight">EMPOWER THE HIGH</h3>
      <div class="ourText textLight">
        POWEHI empowers you to embrace your true potential through our exceptional vaping
        devices. We believe
        <br />
        that every individual has the power to shape their experiences and unlock their
        creativity, inspiration, and focus.
        <br />
        <br />

        With POWEHI by your side, you have the tools to transcend boundaries, explore new
        horizons, and tap into the
        <br />
        limitless possibilities that cannabis has to offer.
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
  padding: (100 / @pcrem) 0 (150 / @pcrem);
  background-color: @white;

  .ourCon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: (670 / @pcrem);
    width: (1400 / @pcrem);
    background-image: url("https://files.myuwell.com/powehi/about/our.png");

    .ourTitle {
      color: @white;
      padding-bottom: (50 / @pcrem);
    }
    .ourTip {
      color: @white;
      text-align: center;
      font-size: (24 / @pcrem);
      padding-bottom: (70 / @pcrem);
    }
    .ourText {
      color: @white;
      text-align: center;
      font-size: (18 / @pcrem);
    }
  }
}
</style>
