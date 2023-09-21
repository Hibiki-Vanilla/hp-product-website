<template>
  <section class="choose" data-aos="fade-up">
    <h2 class="chooseTitle textBold titleSize">CHOOSE US FOR A</h2>
    <h2 class="chooseTitleLine textBold titleSize">
      COMPREHENSIVE AND SEAMLESS EXPERIENCE.
    </h2>
    <!-- con -->
    <div class="chooseCon">
      <div class="chooseConMid">
        <div
          v-for="(item, index) in chooseList"
          :key="index"
          :style="`background-image: url(${item.src})`"
          class="hoverBox imageItem"
        ></div>

        <div class="chooseRight textLight allShadow">
          Our robust internal teams serve as contacts for customer service. With POWEHI's
          high-standard supplier evaluation system and collaboration principle, we
          introduce third-party partners to create an end-to-end cannabis vaporization
          one-stop solution service platform.
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="chooseBottom">
      <div v-for="(item, index) in iconList" :key="index" class="iconItem">
        <div class="iconBox">
          <img
            :src="item.src"
            :style="`height:${item.height}px; width:${item.width}px;`"
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
      chooseList: [
        { src: "https://files.myuwell.com/powehi/solution/a.png" },
        { src: "https://files.myuwell.com/powehi/solution/b.png" },
        { src: "https://files.myuwell.com/powehi/solution/c.png" },
      ],

      iconList: [
        {
          src: "https://files.myuwell.com/powehi/solution/icon/1.png",
          height: 44,
          width: 44,
          text: "Customizable & Professional",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/2.png",
          height: 38,
          width: 40,
          text: "Time-Saving & Cost-Effective",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/3.png",
          height: 35,
          width: 35,
          text: "Comprehensive & Integrated",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/4.png",
          height: 33,
          width: 27,
          text: "Reliable & Secure",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/5.png",
          height: 37,
          width: 33,
          text: "Innovative & Flexible",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/6.png",
          height: 32,
          width: 32,
          text: "Customer-Oriented & Responsive",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/icon/7.png",
          height: 33,
          width: 31,
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
  padding-top: (190 / @pcrem);
  width: 100%;
  .chooseTitle {
    color: #1b1b1b;
  }
  .chooseTitleLine {
    color: @mainColor;
    border-bottom: 3px solid @mainColor;
  }

  .chooseCon {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: (70 / @pcrem) 0;
    .chooseConMid {
      display: flex;
      justify-content: space-between;
      width: (1184 / @pcrem);
      height: (260 / @pcrem);

      .hoverBox {
        height: (260 / @pcrem);
        width: (137 / @pcrem);
        overflow: hidden;
        border-radius: (12 / @pcrem);
        transition: background-size 0.3s ease-in-out;
        &:hover {
          background-size: 110% 110%;
        }
      }

      .chooseRight {
        box-sizing: border-box;
        height: (260 / @pcrem);
        width: (700 / @pcrem);
        font-size: (24 / @pcrem);
        border-radius: (14 / @pcrem);
        padding: (40 / @pcrem) (60 / @pcrem) 0;
      }
    }
  }

  .chooseBottom {
    height: (190 / @pcrem);
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
      width: (206 / @pcrem);
      height: (124 / @pcrem);
      padding: 0 (30 / @pcrem);
      box-sizing: border-box;

      .iconBox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: (44 / @pcrem);
        width: 100%;
        padding-top: (20 / @pcrem);
        padding-bottom: (20 / @pcrem);
      }
      .iconText {
        font-size: (14 / @pcrem);
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
  }
}
</style>
