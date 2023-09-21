<template>
  <section>
    <h1 class="banner">
      <img class="bannerCon" src="https://files.myuwell.com/powehi/solution/moBg.png" data-aos="zoom" />
    </h1>
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
