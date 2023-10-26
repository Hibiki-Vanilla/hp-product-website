<template>
  <section class="banner imageItem" data-aos="zoom">
    <h1 class="bannerCon">
      <strong class="bannerTitle textBlack"
        >GRASP PERSONALITY
        <br />
        IN PALM</strong
      >
      <div class="textRegular bannerText">Small body but big capacity</div>
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
  background-image: url('@/static/cush/mo/mobanner.png');

  .bannerCon {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: (250 / @morem);
    color: @white;
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
