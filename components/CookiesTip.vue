<template>
  <section v-if="tipStatus" class="cookiesTip textRegular">
    We use cookies to improve your experience on our website. By browsing this website,
    you agree to our use of cookies.

    <div class="cookiesButton" role="button" @click="onOkClick">
      <i class="el-icon-close"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "CookiesTip",
  data() {
    return {
      tipStatus: false,
    };
  },
  mounted() {
    const stauts = this.$ctx.cookies.get("tip_s_h");
    if (stauts) {
      this.tipStatus = false;
    } else {
      this.tipStatus = true;
    }
  },
  methods: {
    onOkClick() {
      const random = Math.random();
      this.$ctx.cookies.set("tip_s_h", random);
      this.tipStatus = false;
    },
  },
};
</script>

<style scoped lang="less">
.cookiesTip {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 800;
  bottom: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 100%;
  font-size: 16px;
  background-color: #ffffff;

  .cookiesButton {
    cursor: pointer;
    margin-left: 5vw;
  }
}

@media (max-width: 1000px) {
  .cookiesTip {
    height: auto;
    line-height: 1;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    padding: (10 / @morem) (30 / @morem);
    font-size: (18 / @morem);

    .cookiesButton {
      cursor: pointer;
      font-size: (40 / @morem);
      margin-left: 5vw;
    }
  }
}
</style>
