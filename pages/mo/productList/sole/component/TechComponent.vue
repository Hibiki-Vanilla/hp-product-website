<template>
  <section class="tech" data-aos="zoom">
    <div class="techCon imageItem" data-aos="fade-up">
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

  .techCon {
    height: (1234 / @morem);
    width: (650 / @morem);
    background-image: url('https://files.myuwell.com/powehi/sole/mo/fits.png');
    text-align: center;
    .techTitle {
      padding-top: (180 / @morem);
      padding-bottom: (50 / @morem);
    }
    .techText {
      margin: 0 auto;
      width: (550 / @morem);
    }
  }
}
</style>
