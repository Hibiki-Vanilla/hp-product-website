<template>
  <section class="lab" data-aos="fade-up">
    <div class="labTitle textBold titleSize">STAT-OF-THE-ART LABORATORY</div>
    <div class="labTip textLight textSize">TRUSTWORTHY AND TRANSPARENT</div>

    <div class="labCon allShadow">
      <div class="labLeft textLight">
        <div class="labLeftTopText">
          Our laboratory is a first-class R&D and quality control center for vape. We have
          advanced equipment and technology, and have assembled an experienced, efficient
          and professional team. We are committed to providing comprehensive laboratory
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
          <img class="logo" src="@/static/about/lab/logo.png" alt="logo" />
        </div>
      </div>
      <div class="labRight">
        <div class="labRightLine" :style="srollTopStyle">
          <img class="lineImg" src="@/static/about/lab/line.png" alt="" />
        </div>
      </div>
    </div>

    <div class="labBottom">
      <div v-for="(item, index) in iconList" :key="index" class="iconItem">
        <div class="iconText textBold">{{ item.text }}</div>
      </div>

      <!-- left -->
      <img class="labBottomLeft" src="@/static/about/lab/arr.png" alt="arr" />

      <!-- right -->
      <img class="labBottomRight" src="@/static/about/lab/arr.png" alt="arr" />
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
    srollTopStyle() {
      return `top:${this.top}%`;
    },
  },

  methods: {
    animationScroll() {
      let stickyOffsetTop = document.querySelector(".lab").offsetTop;
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
  mounted() {
    window.addEventListener("scroll", this.animationScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.animationScroll);
  },
};
</script>

<style lang="less" scoped>
.lab {
  width: 100%;
  padding-top: (150 / @pcrem);

  background-color: @white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .labTitle {
    color: #000;
    padding-bottom: (50 / @pcrem);
  }
  .labTip {
    padding-bottom: (130 / @pcrem);
  }

  .labCon {
    height: (460 / @pcrem);
    width: (1230 / @pcrem);
    border-radius: (14 / @pcrem);
    display: flex;
    align-items: center;
    .labLeft {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: (930 / @pcrem);
      font-size: (18 / @pcrem);
      padding-left: (100 / @pcrem);
      padding-right: (110 / @pcrem);

      box-sizing: border-box;
      .labLeftTopText {
        color: #707070;
        padding-bottom: (80 / @pcrem);
      }
      .labLeftBottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .labLeftBottomText {
          line-height: 1.8;
          color: #a0a0a0;
        }
        .logo {
          height: (53 / @pcrem);
          width: (267 / @pcrem);
        }
      }
    }

    .labRight {
      position: relative;
      display: flex;

      height: 100%;
      width: (300 / @pcrem);
      overflow: hidden;

      .labRightLine {
        position: absolute;
        height: 100%;
        width: (266 / @pcrem);
        left: 0;
        display: flex;
        flex-direction: column;
        .lineImg {
          width: 100%;
          height: (633 / @pcrem);
          will-change: top;
        }
      }
    }
  }

  .labBottom {
    position: relative;
    margin-top: (90 / @pcrem);
    margin-bottom: (200 / @pcrem);
    height: (142 / @pcrem);
    width: (1440 / @pcrem);
    border-radius: (20 / @pcrem);
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    .iconItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: (139 / @pcrem);
      height: (124 / @pcrem);
      padding: 0 (30 / @pcrem);
      box-sizing: border-box;
      text-align: center;

      .iconText {
        font-size: (14 / @pcrem);
        color: #fe8a12;
        text-align: center;
      }
    }

    .iconItem + .iconItem::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 0;
      top: 0;
      left: 0;
      box-shadow: -1px 0px 7px 3px #fff, 2px 0px 7px 2px hsla(0, 0%, 63%, 0.8);
    }

    .labBottomRight {
      @num: (18 / @pcrem);

      position: absolute;
      top: calc(50% - @num);
      right: -(50 / @pcrem);
      height: (18 / @pcrem);
      width: (20 / @pcrem);
    }

    .labBottomLeft {
      @num: (18 / @pcrem);

      position: absolute;
      top: calc(50% - @num);
      transform: rotate(180deg);
      left: -(50 / @pcrem);
      height: (18 / @pcrem);
      width: (20 / @pcrem);
    }
  }
}
</style>
