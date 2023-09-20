<template>
  <section>
    <div class="banner">
      <div class="bannerCon imageItem" data-aos="zoom">
        <h1 class="bannerTitle textBold titleSize">
          EXQUISITE TURNKEY SOLUTION
          <br />
          END-TO-END SERVICE
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
    background-image: url("https://files.myuwell.com/powehi/solution/bg.png");
    height: (1080 / @pcrem);
    width: (1400 / @pcrem);

    .bannerTitle {
      padding-top: (110 / @pcrem);
      padding-left: (110 / @pcrem);
      color: @white;
    }
  }
}
</style>
