<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <strong class="bannerTitle textBlack">FUSION OF ECONOMIC AND DELICATE</strong>
      <div class="textRegular titleSize">Dual air-flow for anti-clogging</div>
    </h1>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.banner {
  height: (1080 / @pcrem);
  background-image: url("@/static/bello/banner.png");

  .bannerCon {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: (150 / @pcrem);
    color: #000;
    text-align: center;
    .bannerTitle {
      font-size: (60 / @pcrem);
      padding-bottom: (10 / @pcrem);
    }
  }
}
</style>
