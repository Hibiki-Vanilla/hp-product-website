<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <strong class="bannerTitle textBlack"
        >
        REPRESENTATIVE
        <br />
        OF ELEGANCE
        </strong
      >
      <div class="textRegular bannerText">1/2ml slim and stylish vaporization</div>
    </h1>
  </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.banner {
  height: (1334 / @morem);
  background-image: url('@/static/sole/mo/banner.png');

  .bannerCon {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: (180 / @morem);
    color: #000;
    text-align: center;

    .bannerTitle {
      font-size: (50 / @morem);
    }
    .bannerText {
      padding-top: (10 / @morem);
      font-size: (40 / @morem);
    }
  }
}
</style>
