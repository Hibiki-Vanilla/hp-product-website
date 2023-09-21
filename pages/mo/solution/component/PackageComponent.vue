<template>
  <section class="package" data-aos="fade-up">
    <h2 class="packageTitle titleSize textBold">PACKAGE CUSTOMIZATION</h2>
    <div class="packageCon allShadow">
      <div class="packageRight">
        <div class="packageRightLine" :style="srollRightStyle">
          <img
            class="packageRightLineImg"
            src="https://files.myuwell.com/powehi/solution/package/mo1.png"
            alt=""
          />
        </div>

        <div class="packageRightLine" :style="srollLeftStyle">
          <img
            class="packageRightLineImg"
            src="https://files.myuwell.com/powehi/solution/package/mo2.png"
            alt=""
          />
        </div>
      </div>

      <div class="packageLeft textLight">
        We offer a wide variety of packaging options for your cannabis vape products,
        including cardboard tubes, rigid boxes, and clamshell packaging. We can customize
        your packaging to match your brand and product line, and we can also include
        child-resistant features, FSC certification, and green printing.
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
    srollLeftStyle() {
      return `left:${this.top}%`;
    },
    srollRightStyle() {
      return `right:${this.top}%`;
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
  padding-bottom: (80 / @morem);
  .packageTitle {
    color: #000;
    font-size: (35 / @morem);
    padding-bottom: (80 / @morem);
  }

  .packageCon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: (550 / @morem);
    border-radius: (14 / @morem);
    background-color: @white;

    .packageLeft {
      box-sizing: border-box;
      padding: (50 / @morem) (40 / @morem);
      font-size: (24 / @morem);
      width: 100%;
      text-align: center;
    }

    .packageRight {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: (400 / @morem);
      padding-top: (30 / @morem);
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;

      .packageRightLine {
        position: relative;
        height: (180 / @morem);
        width: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        will-change: left right;

        .packageRightLineImg {
          width: (585 / @morem);
          height: (180 / @morem);
        }
      }
    }
  }
}
</style>
