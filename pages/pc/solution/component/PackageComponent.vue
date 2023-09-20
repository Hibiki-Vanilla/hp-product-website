<template>
  <section class="package imageItem" data-aos="fade-up">
    <h2 class="packageTitle titleSize textBold">PACKAGE CUSTOMIZATION</h2>
    <div class="packageCon allShadow">
      <div class="packageLeft textLight">
        We offer a wide variety of packaging options for your cannabis vape products,
        including cardboard tubes, rigid boxes, and clamshell packaging. We can customize
        your packaging to match your brand and product line, and we can also include
        child-resistant features, FSC certification, and green printing.
      </div>

      <div class="packageRight">
        <div class="packageRightLine" :style="srollTopStyle">
          <img class="packageRightLineImg" src="https://files.myuwell.com/powehi/solution/package/1.png" alt="" />
        </div>

        <div class="packageRightLine" :style="srollBottomStyle">
          <img class="packageRightLineImg" src="https://files.myuwell.com/powehi/solution/package/2.png" alt="" />
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
      const stickyOffsetTop = document.querySelector(".package").offsetTop;
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (stickyOffsetTop - scrollHeight < 400 && scrollHeight >= this.scrollHeight) {
        this.top = this.top <= -80 ? -80 : this.top - 0.5;
      }
      if (stickyOffsetTop - scrollHeight > -400 && scrollHeight < this.scrollHeight) {
        this.top = this.top >= 0 ? 0 : this.top + 0.5;
      }

      this.scrollHeight = scrollHeight;
    },
  },

};
</script>

<style lang="less" scoped>
.package {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://files.myuwell.com/powehi/solution/package/bg.png");
  height: (790 / @pcrem);
  .packageTitle {
    color: #000;
    padding-bottom: (90 / @pcrem);
  }

  .packageCon {
    display: flex;
    align-items: center;
    height: (460 / @pcrem);
    width: (1240 / @pcrem);
    border-radius: (14 / @pcrem);
    background-color: @white;

    .packageLeft {
      box-sizing: border-box;
      padding-left: (58 / @pcrem);
      padding-right: (190 / @pcrem);
      font-size: (24 / @pcrem);
      width: (810 / @pcrem);
    }

    .packageRight {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: (430 / @pcrem);
      overflow: hidden;

      .packageRightLine {
        position: absolute;
        height: 100%;
        width: (201 / @pcrem);
        left: 0;
        display: flex;
        flex-direction: column;
        & + .packageRightLine {
          left: unset;
          right: 0;
        }
        .packageRightLineImg {
          width: 100%;
          height: (644 / @pcrem);
          will-change: top;
        }
      }
    }
  }
}
</style>
