<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <strong class="bannerTitle textBlack">GRASP PERSONALITY IN PALM</strong>
      <div class="textRegular titleSize">Small body but big capacity</div>
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
  background-image: url("@/static/cush/pc/banner.png");

  .bannerCon {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: (200 / @pcrem);
    color: @white;
    text-align: center;
    .bannerTitle {
      font-size: (60 / @pcrem);
      padding-bottom: (10 / @pcrem);
    }
  }
}
</style>
