<template>
  <section class="engage" data-aos="fade-up">
    <h2 class="engageTitle textBold">
      ENGAGE CUSTOMERS
      <br />
      WITH OUR CUSTOM PACKAGING
    </h2>
    <div class="engageText textLight">
      Our team has years of experience in designing custom packaging and displaying for
      cannabis companies. We create eye-catching packaging that is guaranteed to turn
      heads and heighten consumer engagement. We are always on the lookout for
      leading-edge innovations, and our work has been featured by top-tier cannabis and
      CBD brands.
    </div>

    <img
      class="engageImg"
      src="https://files.myuwell.com/powehi/solution/engage/moBg.png"
      alt="Engage Customers With Our Custom Packaging"
    />
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.engage {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  width: 100%;
  padding-bottom: (100 / @morem);

  .engageTitle {
    padding-top: (120 / @morem);
    padding-bottom: (40 / @morem);
    line-height: 1;
    font-size: (35 / @morem);
    color: #000;
    width: (550 / @morem);
    text-align: center;
  }
  .engageText {
    padding-bottom: (50 / @morem);
    width: (550 / @morem);
    font-size: (24 / @morem);
    text-align: center;
  }

  .engageImg {
    height: (266 / @morem);
    width: (550 / @morem);
  }
}
</style>
