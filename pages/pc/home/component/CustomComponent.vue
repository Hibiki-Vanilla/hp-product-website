<template>
  <section class="custom">
    <h2 class="customTitle textBold titleSize" data-aos="fade-up">CUSTOMIZATION</h2>
    <div class="customText textLight textSize" data-aos="fade-up">
      Our CMF design service helps you create a distinctive and appealing look and feel
      for your cannabis vaping products. We offer a range of options for color, material,
      and finishing that suit different styles, preferences, and budgets. All these
      customization solutions make your products stand out from the crowd!
    </div>
    <div class="customTipRow" data-aos="fade-up">
      <img class="customTipIcon" src="https://files.myuwell.com/powehi/home/custom/tipIcon.png" alt="" />
      <div class="customTipCon allShadow textLight">
        <div>
          <strong class="textBold">Materials:</strong> Aluminium Alloy, PCTG, ABS+PC, PP, PC,
          ABS, Stainless Steel, Leather, PLA, Silicone, Glass, Ceramic…
        </div>

        <br />
        <div>
          <strong class="textBold">Finishing:</strong> Polishing, Sandblasting, Wire Drawing,
          Anodizing, Blast Light Development, Radium Carving, Etching, Painting, Spraying,
          Water Plating, Vacuum Plating, Water Sticker, Composite Plate Coating, Glass
          Coating…
        </div>
      </div>
    </div>

    <div class="slider">
      <div class="sliderRow">
        <article>
          <div class="sliderRowItem">
            <ul>
              <li v-for="(item, index) in topSiderList" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
          <div class="sliderRowItem">
            <ul>
              <li v-for="(item, index) in topSiderList" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
    <div class="slider">
      <div class="sliderRow">
        <article>
          <div class="sliderRowItem">
            <ul>
              <li v-for="(item, index) in bottomSiderList" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
          <div class="sliderRowItem">
            <ul>
              <li v-for="(item, index) in bottomSiderList" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <!-- bottom -->
    <div class="customBottom">
      <div
        v-for="(item, index) in iconList"
        :key="index"
        class="customBottomItem allShadow"
      >
        <div class="customBottomImgBox">
          <img
            :style="`height:${item.height}vw;width:${item.width}vw`"
            :src="item.icon"
            alt="icon"
          />
        </div>
        <span class="textRegular">{{ item.text }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      topSiderList: [
        "https://files.myuwell.com/powehi/home/custom/line/1.png",
        "https://files.myuwell.com/powehi/home/custom/line/2.png",
        "https://files.myuwell.com/powehi/home/custom/line/3.png",
        "https://files.myuwell.com/powehi/home/custom/line/4.png",
        "https://files.myuwell.com/powehi/home/custom/line/5.png",
        "https://files.myuwell.com/powehi/home/custom/line/1.png",
        "https://files.myuwell.com/powehi/home/custom/line/2.png",
        "https://files.myuwell.com/powehi/home/custom/line/3.png",
        "https://files.myuwell.com/powehi/home/custom/line/4.png",
        "https://files.myuwell.com/powehi/home/custom/line/5.png",
      ],
      bottomSiderList: [
        "https://files.myuwell.com/powehi/home/custom/twoLine/1.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/2.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/3.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/4.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/5.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/1.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/2.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/3.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/4.png",
        "https://files.myuwell.com/powehi/home/custom/twoLine/5.png",
      ],

      iconList: [
        {
          icon: "https://files.myuwell.com/powehi/home/custom/icon/1.png",
          text: "High-Quality & Durable Materials",
          width: 83 / 19.2,
          height: 77 / 19.2,
        },
        {
          icon: "https://files.myuwell.com/powehi/home/custom/icon/2.png",
          text: "Custom Colors & Patterns",
          width: 81 / 19.2,
          height: 81 / 19.2,
        },
        {
          icon: "https://files.myuwell.com/powehi/home/custom/icon/3.png",
          text: "Special Finishing Options",
          width: 67 / 19.2,
          height: 67 / 19.2,
        },
        {
          icon: "https://files.myuwell.com/powehi/home/custom/icon/4.png",
          text: "Meet Diverse Budgets",
          width: 67 / 19.2,
          height: 75 / 19.2,
        },
        {
          icon: "https://files.myuwell.com/powehi/home/custom/icon/5.png",
          text: "Suit Different Styles",
          width: 71 / 19.2,
          height: 71 / 19.2,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.custom {
  display: flex;
  overflow: hidden;
  padding-top: (180 / @pcrem);
  width: 100%;
  flex-direction: column;
  align-items: center;

  .customTitle {
    padding-bottom: (60 / @pcrem);
    color: #000;
  }
  .customText {
    width: (1400 / @pcrem);
    padding-bottom: (60 / @pcrem);
    color: #000;
    text-align: center;
  }
  .customTipRow {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: (1400 / @pcrem);
    padding-bottom: (60 / @pcrem);

    .customTipIcon {
      height: (254 / @pcrem);
      width: (274 / @pcrem);
    }

    .customTipCon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: (10 / @pcrem);
      height: (200 / @pcrem);
      width: (590 / @pcrem);
      box-sizing: border-box;
      padding-left: (30 / @pcrem);
      padding-right: (40 / @pcrem);
      border-radius: (8 / @pcrem);
      color: #707070;
      font-size: (14 / @pcrem);
    }
  }

  .slider {
    width: 200%;
    & + .slider {
      margin-top: -(160 / @pcrem);
    }
    .sliderRow {
      width: 100%;
      overflow: hidden;
      transform: matrix(1, 0.27, -0.8, 0.7, 0, 0);
      margin-left: -200px;
      padding: (70 / @pcrem) 0;
      article {
        &:hover {
          animation-play-state: paused;
        }
        display: flex;
        width: 200%;
        animation: bannermove 40s linear infinite;
        .sliderRowItem {
          width: 100%;
          ul {
            display: flex;
            padding-left: 0;
            margin-bottom: (20 / @pcrem);
            li {
              margin: 0 (25 / @pcrem);
              &:hover {
                img {
                  transform: translateY(-1vw);
                  box-shadow: (20 / @pcrem) (30 / @pcrem) (40 / @pcrem) rgba(0, 0, 0, 0.3);
                }
              }
              img {
                height: (300 / @pcrem);
                width: auto;
                transition: all 0.2s ease;
              }
            }
          }
        }
      }
      @keyframes bannermove {
        100% {
          transform: translateX(-50%);
        }
      }
    }
  }

  .customBottom {
    padding-top: (350 / @pcrem);
    width: 100%;
    display: flex;
    justify-content: center;
    height: (500 / @pcrem);
    background-image: url("https://files.myuwell.com/powehi/home/custom/bg.png");
    background-size: 100% (553 / @pcrem);
    background-position: center (220 / @pcrem);
    background-repeat: no-repeat;

    .customBottomItem {
      height: (250 / @pcrem);
      width: (250 / @pcrem);
      box-sizing: border-box;
      padding: 0 (40 / @pcrem);
      border-radius: (12 / @pcrem);
      background-color: @white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .customBottomImgBox {
        height: (170 / @pcrem);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .textRegular {
        font-size: (18 / @pcrem);
        color: #707070;
        text-align: center;
      }
      & + .customBottomItem {
        margin-left: (80 / @pcrem);
      }
    }
  }
}
</style>
