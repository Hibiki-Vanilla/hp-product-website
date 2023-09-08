<template>
  <section>
    <div class="banner">
      <img class="bannerCon" src="@/static/solution/moBg.png" data-aos="zoom" />
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
    height: (600 / @morem);
    width: (550 / @morem);
  }
}
</style>
