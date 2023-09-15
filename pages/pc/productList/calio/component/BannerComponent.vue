<template>
  <section class="banner imageItem" data-aos="zoom">
    <div class="bannerCon">
      <div class="bannerTitle textBlack">Classic Design</div>
      <div class="textRegular titleSize">2G Disposable VAPE</div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.banner {
  height: (1080 / @pcrem);
  background-image: url("@/static/calio/banner.png");

  .bannerCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: (700 / @pcrem);
    padding-left: (340 / @pcrem);
    color: #000;

    .bannerTitle {
      font-size: (60 / @pcrem);
      padding-bottom: (10 / @pcrem);
    }
  }
}
</style>
