<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <strong class="bannerTitle textBlack">THE EMBODIMENT OF MINIMALIST </strong>
      <div class="textRegular titleSize">Unique design 180°visible oil window</div>
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
  background-image: url("https://files.myuwell.com/powehi/bello/banner.png");

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
