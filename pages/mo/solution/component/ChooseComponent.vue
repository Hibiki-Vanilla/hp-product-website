<template>
  <section class="choose" data-aos="fade-up">
    <h2 class="chooseTitle textBold titleSize">CHOOSE US FOR A</h2>
    <h2 class="chooseTitleLine textBold titleSize">COMPREHENSIVE AND</h2>
    <h2 class="chooseTitleLine textBold titleSize">SEAMLESS EXPERIENCE.</h2>
    <!-- con -->
    <div class="chooseCon">
      <div class="hoverBox imageItem"></div>

      <div class="chooseRight textLight allShadow">
        Our robust internal teams serve as contacts for customer service. With POWEHI's
        high-standard supplier evaluation system and collaboration principle, we introduce
        third-party partners to create an end-to-end cannabis vaporization one-stop
        solution service platform.
      </div>
    </div>

    <!-- bottom -->
    <div class="chooseBottom">
      <div v-for="(item, index) in iconList" :key="index" class="iconItem">
        <div class="iconBox">
          <img
            :src="item.src"
            :style="`height:${item.height}vw; width:${item.width}vw;`"
            alt="icon"
          />
        </div>
        <div class="iconText textLight">{{ item.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      iconList: [
        {
          src: "https://files.myuwell.com/powehi/solution/icon/1.png",
          height: 44 / 7.5,
          width: 44 / 7.5,
          text: "Customizable & Professional",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/2.png",
          height: 38 / 7.5,
          width: 40 / 7.5,
          text: "Time-Saving & Cost-Effective",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/3.png",
          height: 35 / 7.5,
          width: 35 / 7.5,
          text: "Comprehensive & Integrated",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/4.png",
          height: 33 / 7.5,
          width: 27 / 7.5,
          text: "Reliable & Secure",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/5.png",
          height: 37 / 7.5,
          width: 33 / 7.5,
          text: "Innovative & Flexible",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/6.png",
          height: 32 / 7.5,
          width: 32 / 7.5,
          text: "Customer-Oriented & Responsive",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/7.png",
          height: 33 / 7.5,
          width: 31 / 7.5,
          text: "Sustainable & Scalable",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.choose {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: (100 / @morem);
  width: 100%;
  .chooseTitle {
    color: #1b1b1b;
  }
  .chooseTitleLine {
    color: @mainColor;
    border-bottom: 1px solid @mainColor;
  }

  .chooseCon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: (50 / @morem) 0;

    .hoverBox {
      height: (81 / @morem);
      width: (551 / @morem);
      background-image: url("https://files.myuwell.com/powehi/solution/abc.png");
    }

    .chooseRight {
      margin-top: (30 / @morem);
      box-sizing: border-box;
      height: auto;
      width: (550 / @morem);
      font-size: (24 / @morem);
      border-radius: (14 / @morem);
      padding: (40 / @morem);
      text-align: center;
    }
  }

  .chooseBottom {
    width: (550 / @morem);
    border-radius: (10 / @morem);
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: center;
    padding: (48 / @morem) 0;
    .iconItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25%;
      height: (90 / @morem);
      padding: 0 (20 / @morem);
      box-sizing: border-box;

      .iconBox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: (34 / @morem);
        width: 100%;
        padding-bottom: (20 / @morem);
      }
      .iconText {
        font-size: (14 / @morem);
        color: #707070;
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

    .iconItem:nth-child(n + 5) {
      margin-top: (50 / @morem);
    }
    .iconItem:nth-child(5)::before {
      box-shadow: none;
    }
  }
}
</style>
