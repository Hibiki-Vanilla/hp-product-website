<template>
  <section class="tabPage">
    <div class="tabLeft">
      <div class="tabLeftCon">
        <div class="tabItemBox">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="tabItem"
            :class="[{ tabItemAct: nowIndex === index }]"
            @mouseover="nowIndex = index"
          >
            <div class="tabItemIcon">
              <img :src="item.src" alt="icon" :style="`height:${item.height};width:${item.width}`" />
            </div>

            <strong class="tabItemText textBold">{{ item.text }}</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="tabRight">
      <!-- 1 -->
      <div class="tabRightOne tabRightItem" :class="[{ tabRightItemAct: nowIndex === 0 }]">
        <h2 class="tabRightItemTitle textBold">BRAND BUILDING SERVICE</h2>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            Our brand strategy services will guide you through the process of developing a distinctive identity that
            captures the essence of your cannabis vaping business.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>

      <!-- 2 -->
      <div class="tabRightTwo tabRightItem" :class="[{ tabRightItemAct: nowIndex === 1 }]">
        <div class="tabRightItemTitle textBold">
          {{ 'TESTING & COMPLIANCE' }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            Our turnkey solution includes rigorous testing protocols to ensure our cannabis vaping products meet the
            highest quality and regulatory standards.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>

      <!-- 3 -->
      <div class="tabRightThree tabRightItem" :class="[{ tabRightItemAct: nowIndex === 2 }]">
        <div class="tabRightItemTitle textBold">
          {{ 'PRODUCE & MANUFACTURING' }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            We understand that every aspect of the manufacturing process must be carefully monitored to ensure
            consistency in product quality and customer satisfaction.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>
      <!-- 4 -->
      <div class="tabRightFour tabRightItem fourItem" :class="[{ tabRightItemAct: nowIndex === 3 }]">
        <div class="tabRightItemTitle textBold">
          {{ 'FILLING, ASSEMBLING & PACKAGING' }}
        </div>
        <div class="tabRightItemTitle textBold garyTitle">
          {{ 'FINISHING IS EVERYTHING' }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            State-of-the-art filling, assembling, and packaging services, to ensure the final step is secure and proper.
          </div>
        </div>

        <div class="tabRightItemImgCon">
          <div class="tabRightItemImgItem">
            <img class="tabRightItemImg" src="https://files.myuwell.com/powehi/solution/tab/10.png" alt="filling" />
            <div class="tabRightItemImgText textLight">FILLING</div>
          </div>
          <div class="tabRightItemImgItem">
            <img class="tabRightItemImg" src="https://files.myuwell.com/powehi/solution/tab/11.png" alt="capping" />
            <div class="tabRightItemImgText textLight">CAPPING</div>
          </div>
          <div class="tabRightItemImgItem">
            <img class="tabRightItemImg" src="https://files.myuwell.com/powehi/solution/tab/12.png" alt="packaging" />
            <div class="tabRightItemImgText textLight">PACKAGING</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {
  data() {
    return {
      list: [
        {
          src: 'https://files.myuwell.com/powehi/solution/tab/1.png',
          width: '1.51vw',
          height: '1.67vw',
          text: 'BRAND BUILDING SERVICE',
        },
        {
          src: 'https://files.myuwell.com/powehi/solution/tab/2.png',
          width: '1.35vw',
          height: '1.67vw',
          text: 'TESTING & COMPLIANCE',
        },
        {
          src: 'https://files.myuwell.com/powehi/solution/tab/3.png',
          width: '1.67vw',
          height: '1.67vw',
          text: 'PRODUCE & MANUFACTURING',
        },
        {
          src: 'https://files.myuwell.com/powehi/solution/tab/4.png',
          width: '1.67vw',
          height: '1.67vw',
          text: "FILLING, CAPPING & PACKAGING",
        },
      ],
      nowIndex: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.tabPage {
  display: flex;
  padding: (200 / @pcrem) 0;
  width: (1400 / @pcrem);
  margin: 0 auto;
  .tabLeft {
    height: (700 / @pcrem);
    width: 50%;
    box-sizing: border-box;
    padding-left: (64 / @pcrem);

    .tabLeftCon {
      position: relative;
      height: (700 / @pcrem);
      width: (446 / @pcrem);
      border-radius: (14 / @pcrem);
      background: linear-gradient(to top, rgba(250, 204, 34, 0.15), rgba(248, 54, 0, 0.15));

      // 真实选区
      .tabItemBox {
        position: absolute;
        top: 0;
        left: -(84 / @pcrem);
        height: 100%;
        padding: (80 / @pcrem) 0;
        width: (500 / @pcrem);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .tabItem {
          height: (100 / @pcrem);
          width: (500 / @pcrem);
          border-radius: (14 / @pcrem);
          background-color: #fff;
          box-shadow: 0px 0px 10px 2px rgba(215, 142, 67, 0.3);
          box-sizing: border-box;
          display: flex;
          padding-left: (16 / @pcrem);
          align-items: center;
          transition: 0.4s ease-in-out;

          .tabItemIcon {
            height: (60 / @pcrem);
            width: (60 / @pcrem);
            border-radius: 50%;
            background-color: #ffe8d0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tabItemText {
            padding-left: (10 / @pcrem);
            font-size: (24 / @pcrem);
            color: #000;
            letter-spacing: -1px;
          }
        }

        .tabItemAct {
          @leftNum: (115 / @pcrem);
          transform: translate(@leftNum, 0);
          background-color: @mainColor;
          color: @white;

          .tabItemText {
            color: @white;
          }
        }
      }
    }
  }

  .tabRight {
    width: 50%;
    height: (700 / @pcrem);
    .tabRightItem {
      display: none;
      padding-top: (120 / @pcrem);
      widows: 100%;

      .tabRightItemTitle {
        height: (180 / @pcrem);
        font-size: (50 / @pcrem);
      }

      .tabRightItemCon {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .tabRightItemLeft {
          width: (300 / @pcrem);
          color: #000;
          font-size: (24 / @pcrem);
        }
        .tabRightItemRight {
          height: (302 / @pcrem);
          width: (302 / @pcrem);
          border-radius: (14 / @pcrem);
          overflow: hidden;
        }
      }
    }

    .tabRightItem.fourItem {
      padding-top: (20 / @pcrem);
      .tabRightItemTitle {
        height: auto;
        padding-bottom: (30 / @pcrem);
      }
      .tabRightItemTitle.garyTitle {
        color: #dcdcdc;
      }
      .tabRightItemLeft {
        width: 100%;
      }
    }

    .tabRightItemImgCon {
      padding-top: (40 / @pcrem);
      width: 100%;
      display: flex;
      justify-content: space-between;
      .tabRightItemImgItem {
        width: (210 / @pcrem);

        .tabRightItemImg {
          height: (300 / @pcrem);
          width: (210 / @pcrem);
        }
        .tabRightItemImgText {
          padding-top: (28 / @pcrem);
          font-size: (18 / @pcrem);
          color: #707070;
          text-align: center;
        }
      }
    }

    .tabRightItem.tabRightItemAct {
      display: block;
    }

    .tabRightOne .tabRightItemRight {
      background-image: url('https://files.myuwell.com/powehi/solution/tab/one.png');
    }

    .tabRightTwo .tabRightItemRight {
      background-image: url('https://files.myuwell.com/powehi/solution/tab/two.png');
    }
    .tabRightThree .tabRightItemRight {
      background-image: url('https://files.myuwell.com/powehi/solution/tab/three.png');
    }
  }
}
</style>
