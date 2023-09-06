<template>
  <div class="error-box">
    <img
      class="error-img"
      src="https://files.myuwell.com/blob/gabriel/icon/404.webp"
      alt="404"
    />
    <div class="error-text">
      We're sorry. The page you were looking for doesn't exist anymore.
    </div>
    <nuxt-link to="/">
      <div class="error-buttom" role="buttom">Back to home</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "errorLayout",

  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isflag: false,
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(this.backHome, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    backHome() {
      if (!this.isflag) {
        this.isflag = true;
        this.$ctx.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.error-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 56.25vw;
  height: 100vh;
  .error-img {
    height: 144px;
    width: 419px;
  }
  .error-text {
    padding-top: 50px;
    padding-bottom: 84px;
    font-size: 24px;
    font-family: "Montserrat Regular";
    font-weight: 400;
    color: #2e2e2e;
  }
  .error-buttom {
    width: 374px;
    height: 90px;
    background: #ff7c6c;
    border-radius: 45px;
    font-size: 24px;
    font-family: "Montserrat Regular";
    font-weight: 400;
    line-height: 90px;
    text-align: center;
    color: #ffffff;
  }
}

@media (max-width: 1280px) {
  .error-box {
    .error-img {
      height: (144 / @morem);
      width: (419 / @morem);
    }
    .error-text {
      text-align: center;
      width: (546 / @morem);
      font-size: (22 / @morem);
      line-height: (28 / @morem);
    }
    .error-buttom {
      width: (374 / @morem);
      height: (90 / @morem);
      border-radius: (45 / @morem);
      font-size: (24 / @morem);
      line-height: (90 / @morem);
    }
  }
}
</style>
