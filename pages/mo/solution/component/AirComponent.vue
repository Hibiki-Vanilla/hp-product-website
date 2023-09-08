<template>
  <section class="air page">
    <!-- text -->
    <div
      class="airCon"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div class="airTitle textBold titleSize textCw">{{ $t("LFUIPA") }}</div>
      <div class="airText textMedium textSize textCw">{{ $t("USAJYW") }}</div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.air {
  height: (920 / @pcrem);
  background-image: url("https://files.myuwell.com/gabriel/uwell-dp6000/pc/air.png");

  .airCon {
    position: absolute;
    top: (270 / @pcrem);
    left: (255 / @pcrem);
  }
  .airTitle,
  .airText {
    white-space: pre-line;
  }
  .airText {
    padding-top: (30 / @pcrem);
    line-height: 1.5;
  }
}
</style>
