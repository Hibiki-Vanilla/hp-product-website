<template>
  <section class="tech" data-aos="zoom">
    <div class="techCon imageItem">
      <div class="techLeft" data-aos="fade-up">
        <h2 class="techTitle textBlack titleSize">
          FITS WITH MULTIPLE
          <br />
          VISCOSITY EXTRACTS
        </h2>

        <div class="techText textSize textLight">
          SOLE delivers optimal flavor performance, thanks to its patented VISCORE® ceramic heating core, preheating
          function, and three-level voltage system. Whether filled with concentrate, CBD, or distillate, SOLE ensures
          consistent and satisfying flavor.
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

  .techCon {
    height: (881 / @pcrem);
    width: (1452 / @pcrem);
    background-image: url('https://files.myuwell.com/powehi/sole/pc/fits.png');

    .techLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #000;
      height: 100%;
      box-sizing: border-box;
      padding-left: (110 / @pcrem);
    }
    .techTitle {
      padding-bottom: (60 / @pcrem);
      letter-spacing: -0.1vw;
    }
    .techText {
      box-sizing: border-box;
      width: (520 / @pcrem);
    }
  }
}
</style>
