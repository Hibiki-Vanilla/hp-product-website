<template>
  <section class="engage" data-aos="fade-up">
    <div class="engageTitle textBold">Engage Customers With Our Custom Packaging</div>
    <div class="engageText textLight">
      Our team has years of experience designing custom packaging and displays for
      cannabis companies. We create eye-catching packaging that is guaranteed to turn
      heads and heighten consumer engagement. We are always on the lookout for
      leading-edge innovations, and our work has been featured by top-tier cannabis and
      CBD brands.
    </div>

    <div class="engageCon">
      <img
        class="engageImg"
        src="@/static/solution/engage/bg.png"
        alt="Engage Customers With Our Custom Packaging"
      />
    </div>
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
  background-color: #eeeeee;
  width: 100%;
  height: (850 / @pcrem);

  .engageTitle {
    padding-top: (150 / @pcrem);
    padding-bottom: (60 / @pcrem);
    line-height: 1;
    font-size: (50 / @pcrem);
    color: #000;
    text-align: center;
  }
  .engageText {
    margin: 0 auto;
    width: (1400 / @pcrem);
    font-size: (24 / @pcrem);
    text-align: center;
  }

  .engageCon {
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    width: (1400 / @pcrem);
    padding-top: (70 / @pcrem);
    .engageImg {
      height: (280 / @pcrem);
      width: (1367 / @pcrem);
    }
  }
}
</style>
