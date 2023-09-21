<template>
  <section>
    <h1>
    POWEHI cannabis vape. Atrusted partner in the cannabis community
  </h1>
    <div class="banner">
      <img class="bannerCon" src="https://files.myuwell.com/powehi/about/moBg.png" data-aos="zoom" />
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
h1{
  height: 0;
  overflow: hidden;
}
.banner {
  display: flex;
  width: 100%;
  justify-content: center;

  .bannerCon {
    height: (750 / @morem);
    width: (550 / @morem);
  }
}
</style>
