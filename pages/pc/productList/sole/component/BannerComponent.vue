<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <div class="bannerRight">
        <strong class="bannerTitle textBlack">
        REPRESENTATIVE
        <br />
        OF ELEGANCE
      </strong>
      <div class="textRegular titleSize">1/2ml slim and stylish vaporization</div>
      </div>

    </h1>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.banner {
  height: (1080 / @pcrem);
  background-image: url('https://files.myuwell.com/powehi/sole/pc/banner.png');

  .bannerCon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    color: #000;
    .bannerRight{
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    .bannerTitle {
      font-size: (60 / @pcrem);
      padding-bottom: (10 / @pcrem);
    }
  }
}
</style>
