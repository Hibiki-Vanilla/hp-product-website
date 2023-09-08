<template>
  <section>
    <div class="banner">
      <img class="bannerCon" src="@/static/solution/bg.png" data-aos="zoom" />
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
    height: (1080 / @pcrem);
    width: (1400 / @pcrem);
  }
}
</style>
