<template>
  <section class="iso" data-aos="fade-up">
    <h2 class="isoTitle textBold titleSize">OUR REPUTATION</h2>
    <h3 class="isoTip textLight textSize">
      TRUST US FOR ALL YOUR CANNABIS VAPING NEEDS
    </h3>

    <div class="isoCon allShadow">
      <img class="lineimg" src="https://files.myuwell.com/powehi/about/iso/line.png" alt="reputation" />

      <div class="isoTopText textLight">
        we are committed to provide our customers with the best possible service and
        products. The sound management system supports the company’s development. We are
        proud to become a trusted partner in the Cannabis community. Our commitment to
        quality, innovation, and sustainability sets us apart from other vape hardware
        solution providers.
      </div>
    </div>

    <img class="logo" src="https://files.myuwell.com/powehi/about/iso/logo.png" alt="logo" />
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
  mounted() {
    window.addEventListener("scroll", this.animationScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.animationScroll);
  },
  methods: {
    animationScroll() {
      const stickyOffsetTop = document.querySelector(".iso").offsetTop;
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
    padding-bottom: (40 / @morem);
  }
  .isoTip {
    padding-bottom: (40 / @morem);
  }

  .isoCon {
    padding: (50 / @morem) (45 / @morem);
    box-sizing: border-box;
    width: (550 / @morem);
    border-radius: (14 / @morem);
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    flex-direction: column;

    .lineimg {
      width: (463 / @morem);
      height: (379 / @morem);
    }
    .isoTopText {
      padding-top: (50 / @morem);
      font-size: (16 / @morem);
      color: #707070;
    }
  }

  .logo {
    margin-top: (50 / @morem);
    height: (59 / @morem);
    width: (469 / @morem);
  }
}
</style>
