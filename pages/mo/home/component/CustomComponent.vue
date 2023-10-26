<template>
  <section class="custom">
    <h2 class="customTitle textBold titleSize" data-aos="fade-up">CUSTOMIZATION</h2>
    <div class="customText textLight textSize" data-aos="fade-up">
      Our CMF design service helps you create a distinctive and appealing look and feel for your cannabis vaping
      products. We offer a range of options for color, material, and finishing that suit different styles, preferences,
      and budgets. All these customization solutions make your products stand out from the crowd!
    </div>
    <div class="customTipRow" data-aos="fade-up">
      <img class="customTipIcon" src="https://files.myuwell.com/powehi/home/custom/moTipIcon.png" alt="" />
      <div class="customTipCon allShadow textLight">
        <div>
          <strong class="textBold">Materials:</strong> Aluminium Alloy, PCTG, ABS+PC, PP, PC, ABS, Stainless Steel,
          Leather, PLA, Silicone, Glass, Ceramic…
        </div>

        <br />
        <div>
          <strong class="textBold">Finishing:</strong> Polishing, Sandblasting, Wire Drawing, Anodizing, Blast Light
          Development, Radium Carving, Etching, Painting, Spraying, Water Plating, Vacuum Plating, Water Sticker,
          Composite Plate Coating, Glass Coating…
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
        :class="[{ allShadow: index !== 2 }, { customBottomItem: index !== 2 }, { customBottomItemSpace: index === 2 }]"
      >
        <div class="customBottomImgBox">
          <img v-if="item.icon" :style="`height:${item.height}vw;width:${item.width}vw`" :src="item.icon" alt="icon" />
        </div>
        <span class="textRegular">{{ item.text }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topSiderList: [
        'https://files.myuwell.com/powehi/home/custom/line/1.png',
        'https://files.myuwell.com/powehi/home/custom/line/2.png',
        'https://files.myuwell.com/powehi/home/custom/line/3.png',
        'https://files.myuwell.com/powehi/home/custom/line/4.png',
        'https://files.myuwell.com/powehi/home/custom/line/5.png',
        'https://files.myuwell.com/powehi/home/custom/line/1.png',
        'https://files.myuwell.com/powehi/home/custom/line/2.png',
        'https://files.myuwell.com/powehi/home/custom/line/3.png',
        'https://files.myuwell.com/powehi/home/custom/line/4.png',
        'https://files.myuwell.com/powehi/home/custom/line/5.png',
      ],
      bottomSiderList: [
        'https://files.myuwell.com/powehi/home/custom/twoLine/1.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/2.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/3.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/4.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/5.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/1.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/2.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/3.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/4.png',
        'https://files.myuwell.com/powehi/home/custom/twoLine/5.png',
      ],

      iconList: [
        {
          icon: 'https://files.myuwell.com/powehi/home/custom/icon/1.png',
          text: 'High-Quality & Durable Materials',
          width: 56 / 7.5,
          height: 52 / 7.5,
        },
        {
          icon: 'https://files.myuwell.com/powehi/home/custom/icon/2.png',
          text: 'Custom Colors & Patterns',
          width: 55 / 7.5,
          height: 55 / 7.5,
        },
        {},
        {
          icon: 'https://files.myuwell.com/powehi/home/custom/icon/3.png',
          text: 'Special Finishing Options',
          width: 45 / 7.5,
          height: 45 / 7.5,
        },
        {
          icon: 'https://files.myuwell.com/powehi/home/custom/icon/4.png',
          text: 'Meet Diverse Budgets',
          width: 45 / 7.5,
          height: 51 / 7.5,
        },
        {
          icon: 'https://files.myuwell.com/powehi/home/custom/icon/5.png',
          text: 'Suit Different Styles',
          width: 48 / 7.5,
          height: 48 / 7.5,
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.titleSize {
  font-size: (55 / @morem);
}

.textSize {
  font-size: (24 / @morem);
}

.custom {
  display: flex;
  overflow: hidden;
  padding-top: (90 / @morem);
  width: 100%;
  flex-direction: column;
  align-items: center;

  .customTitle {
    padding-bottom: (30 / @morem);
    color: #000;
  }
  .customText {
    width: (550 / @morem);
    padding-bottom: (30 / @morem);
    color: #000;
    text-align: center;
  }
  .customTipRow {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: (550 / @morem);
    padding-bottom: (60 / @morem);

    .customTipIcon {
      height: (50 / @morem);
      width: (492 / @morem);
    }

    .customTipCon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: (20 / @morem);
      width: (490 / @morem);
      box-sizing: border-box;
      padding: (20 / @morem) (30 / @morem);
      border-radius: (8 / @morem);
      color: #707070;
      font-size: (18 / @morem);
    }
  }

  .slider {
    width: 200%;
    & + .slider {
      margin-top: -(160 / @morem);
    }
    .sliderRow {
      width: 100%;
      overflow: hidden;
      transform: matrix(1, 0.27, -0.8, 0.7, 0, 0);
      margin-left: -(200 / @morem);
      padding: (70 / @morem) 0;
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
            margin-bottom: (20 / @morem);
            li {
              margin: 0 (25 / @morem);
              &:hover {
                img {
                  transform: translateY(-1vw);
                  box-shadow: (20 / @morem) (30 / @morem) (40 / @morem) rgba(0, 0, 0, 0.3);
                }
              }
              img {
                height: (200 / @morem);
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
    width: 100%;
    padding: (150 / @morem) (80 / @morem);
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    background-image: url('https://files.myuwell.com/powehi/home/custom/moBg.png');
    background-size: 100% (414 / @morem);
    background-position: center (220 / @morem);
    background-repeat: no-repeat;

    .customBottomItem {
      height: (170 / @morem);
      width: (170 / @morem);
      box-sizing: border-box;
      padding: 0 (10 / @morem);
      border-radius: (12 / @morem);
      background-color: @white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .customBottomImgBox {
        height: (96 / @morem);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .textRegular {
        font-size: (18 / @morem);
        color: #707070;
        text-align: center;
      }
      & + .customBottomItem {
        margin-left: (40 / @morem);
      }
      &:nth-child(n + 3) {
        margin-top: (50 / @pcrem);
      }
      &:nth-child(4) {
        margin-left: 0;
      }
    }
    .customBottomItemSpace {
      height: (170 / @morem);
      width: (170 / @morem);
    }
  }
}
</style>
