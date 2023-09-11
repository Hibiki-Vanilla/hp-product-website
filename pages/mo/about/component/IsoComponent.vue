<template>
  <section class="iso" data-aos="fade-up">
    <div class="isoTitle textBold titleSize">OUR REPUTATION</div>
    <div class="isoTip textLight textSize">
      TRUST US FOR ALL YOUR CANNABIS VAPING NEEDS
    </div>

    <div class="isoCon allShadow">
      <div class="isoLeft textLight">
        <div class="isoLeftTopText">
          OUR REPUTATION
          <br />
          we are committed to providing our customers with the best possible service and
          products. The sound management system supports the company’s development.
          <br />
          We are proud to become a trusted partner in the Cannabis community. Our
          commitment to quality, innovation, and sustainability sets us apart from other
          vape hardware solution providers.
        </div>
        <div class="isoLeftBottom">
          <img class="logo" src="@/static/about/iso/logo.png" alt="logo" />
        </div>
      </div>

      <div class="isoRight">
        <div class="isoRightLine" :style="srollTopStyle">
          <img class="lineImg" src="@/static/about/iso/lineLeft.png" alt="" />
        </div>

        <div class="isoRightLine" :style="srollBottomStyle">
          <img class="lineImg" src="@/static/about/iso/lineRight.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      scrollHeight: 0,
      top: 0,
    };
  },
  computed: {
    srollTopStyle() {
      return `top:${this.top}%`;
    },
    srollBottomStyle() {
      return `bottom:${this.top}%`;
    },
  },

  methods: {
    animationScroll() {
      let stickyOffsetTop = document.querySelector(".iso").offsetTop;
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (stickyOffsetTop - scrollHeight < 400 && scrollHeight >= this.scrollHeight) {
        this.top = this.top <= -80 ? -80 : this.top - 2;
      }
      if (stickyOffsetTop - scrollHeight > -400 && scrollHeight < this.scrollHeight) {
        this.top = this.top >= 0 ? 0 : this.top + 2;
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
.iso {
  width: 100%;
  background-color: @white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .isoTitle {
    color: #000;
    padding-bottom: (50 / @pcrem);
  }
  .isoTip {
    padding-bottom: (110 / @pcrem);
  }

  .isoCon {
    height: (460 / @pcrem);
    width: (1230 / @pcrem);
    border-radius: (14 / @pcrem);
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    .isoLeft {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: (830 / @pcrem);
      font-size: (18 / @pcrem);
      padding-left: (60 / @pcrem);
      padding-right: (120 / @pcrem);

      box-sizing: border-box;
      .isoLeftTopText {
        color: #707070;
        padding-bottom: (80 / @pcrem);
      }
      .isoLeftBottom {
        display: flex;
        .logo {
          height: (50 / @pcrem);
          width: (395 / @pcrem);
        }
      }
    }

    .isoRight {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: (400 / @pcrem);
      overflow: hidden;

      .isoRightLine {
        position: absolute;
        height: 100%;
        width: (190 / @pcrem);
        left: 0;
        display: flex;
        flex-direction: column;
        .lineImg {
          width: 100%;
          height: (870 / @pcrem);
          will-change: top;
        }

        & + .isoRightLine {
          left: unset;
          right: 0;
          .lineImg {
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
