<template>
  <section class="lab" data-aos="fade-up">
    <h2 class="labTitle textBold titleSize">STAT-OF-THE-ART LABORATORY</h2>
    <h3 class="labTip textLight textSize">TRUSTWORTHY AND TRANSPARENT</h3>

    <div class="labCon allShadow">
      <div class="labRight">
        <div class="labRightLine" :style="srollLeftStyle">
          <img class="lineImg" src="https://files.myuwell.com/powehi/about/lab/moLine.png" alt="" />
        </div>
      </div>

      <div class="labLeft textLight">
        <div class="labLeftTopText">
          Our laboratory is a first-class R&D and quality control center for vape. We
          assemble equipment and technology, and have assembled an experienced, efficient
          and professional team. We are committed to provide comprehensive laboratory
          services to help our customers guarantee the quality and performance of their
          products, to maintain a competitive edge in a highly competitive market.
        </div>
        <div class="labLeftBottom">
          <div class="labLeftBottomText">
            1100+㎡ In house CNAS lab
            <br />
            100+ precision instruments
            <br />

            60+ tests on physical/electrical
          </div>
          <img class="logo" src="https://files.myuwell.com/powehi/about/lab/logo.png" alt="logo" />
        </div>
      </div>
    </div>

    <div class="labBottom imageItem"></div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      scrollHeight: 0,
      top: 0,

      iconList: [
        { text: "Pressure Test" },
        { text: "Negative Pressure Test" },
        { text: "High Temperature Test " },
        { text: "Low Temperature Test " },
        { text: "Vibration Test " },
        { text: "Tension Test" },
        { text: "Leakage Test" },
        { text: "Filling Test" },
        { text: "Flavor Test" },
        { text: "Battery Test" },
        { text: "Electric Functional Test " },
      ],
    };
  },
  computed: {
    srollLeftStyle() {
      return `left:${this.top}%`;
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
      const stickyOffsetTop = document.querySelector(".lab").offsetTop;
      const scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (stickyOffsetTop - scrollHeight < 800 && scrollHeight >= this.scrollHeight) {
        this.top = this.top <= -80 ? -80 : this.top - 0.5;
      }
      if (stickyOffsetTop - scrollHeight > -800 && scrollHeight < this.scrollHeight) {
        this.top = this.top >= 0 ? 0 : this.top + 0.5;
      }

      this.scrollHeight = scrollHeight;
    },
  },

};
</script>

<style lang="less" scoped>
.lab {
  width: 100%;
  padding-top: (120 / @morem);
  background-color: @white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .labTitle {
    color: #000;
    padding-bottom: (40 / @morem);
  }
  .labTip {
    padding-bottom: (60 / @morem);
  }

  .labCon {
    height: (580 / @morem);
    width: (550 / @morem);
    border-radius: (14 / @morem);
    display: flex;
    flex-direction: column;
    align-items: center;
    .labLeft {
      height: (370 / @morem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      font-size: (16 / @morem);
      padding-left: (25 / @morem);
      padding-right: (40 / @morem);
      box-sizing: border-box;
      .labLeftTopText {
        color: #707070;
        padding-bottom: (60 / @morem);
      }
      .labLeftBottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .labLeftBottomText {
          font-size: (14 / @morem);
          line-height: 1.8;
          color: #a0a0a0;
        }
        .logo {
          height: (45 / @morem);
          width: (229 / @morem);
        }
      }
    }

    .labRight {
      position: relative;
      display: flex;
      height: (210 / @morem);
      width: 100%;
      overflow: hidden;

      .labRightLine {
        position: absolute;
        height: (190 / @morem);
        width: 100%;
        bottom: 0;
        display: flex;
        flex-direction: column;
        .lineImg {
          height: 100%;
          width: (822 / @morem);
          will-change: top;
        }
      }
    }
  }

  .labBottom {
    height: (330 / @morem);
    width: (647 / @morem);
    margin: (90 / @morem) auto (120 / @morem);
    background-image: url("https://files.myuwell.com/powehi/about/lab/moBg.png");
  }
}
</style>
