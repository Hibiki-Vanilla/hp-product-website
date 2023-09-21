<template>
  <section>
    <div class="banner">
      <div class="bannerCon imageItem" data-aos="zoom">
        <h1 class="bannerTitle textBold titleSize">
          EXPERIENCE THE
          <br />
          POWEHI DIFFERENCE
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  width: 100%;
  justify-content: center;

  .bannerCon {
    background-image: url("https://files.myuwell.com/powehi/about/bg.png");
    height: (946 / @pcrem);
    width: (1400 / @pcrem);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .bannerTitle {
      color: #000;
    }
  }
}
</style>
