<template>
  <section class="product" data-aos="fade-up">
    <div class="productTitle textBold">PRODUCT CUSTOMIZATION</div>
    <div class="productText textLight">
      POWEHI offer a wide range of customization options for our cannabis vape hardware
      products. We believe that customization is the key to creating a vape pen that is
      both stylish and functional. We offer a wide range of customization options, so you
      can create a vape pen that is truly unique. Contact us today to learn more about our
      customization services.
    </div>

    <div class="productLineBox">
      <div class="productLine">
        <div class="scrollLine imageItem" :style="srollStyle"></div>
      </div>
      <img
        class="productLineImg"
        src="@/static/solution/product/product.png"
        alt="product"
      />
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      translateLRNum: 0,
      translateXYNum: -1,

      scrollHeight: 0,
    };
  },
  computed: {
    srollStyle() {
      return `transform: translate3d(${this.translateLRNum}%, ${this.translateXYNum}vw, 0px) scale3d(1, 1, 1) rotateX(0deg)
          rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);`;
    },
  },
  methods: {
    animationScroll() {
      let stickyOffsetTop = document.querySelector(".product").offsetTop;
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // -10 -50

      if (stickyOffsetTop - scrollHeight < 450 && scrollHeight >= this.scrollHeight) {
        this.translateLRNum = this.translateLRNum <= -50 ? -50 : this.translateLRNum - 1;
      }
      if (stickyOffsetTop - scrollHeight > -450 && scrollHeight < this.scrollHeight) {
        this.translateLRNum = this.translateLRNum >= 0 ? 0 : this.translateLRNum + 1;
      }

      this.scrollHeight = scrollHeight;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.animationScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.animationScroll);
  },
};
</script>

<style lang="less" scoped>
.product {
  overflow: hidden;
  padding-top: (170 / @pcrem);
  padding-bottom: (200 / @pcrem);
  width: 100%;
  text-align: center;
  .productTitle {
    font-size: (50 / @pcrem);
    padding-bottom: (60 / @pcrem);
  }
  .productText {
    margin: 0 auto;
    width: (1400 / @pcrem);
    font-size: (24 / @pcrem);
  }

  .productLineBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: (130 / @pcrem);
    width: 100%;

    .productLine {
      position: absolute;
      top: (70 / @pcrem);
      left: 0;
      width: 100%;
      height: (68 / @pcrem);
      .scrollLine {
        will-change: transform;

        transform-style: preserve-3d;
        display: flex;
        height: (68 / @pcrem);
        width: (3805 / @pcrem);
        background-image: url("@/static/solution/product/text.png");
      }
    }

    .productLineImg {
      height: (284 / @pcrem);
      width: (1336 / @pcrem);
    }
  }
}
</style>
