<template>
  <section class="tabPage">
    <div class="tabLeft">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="tabItem"
        :class="[{ tabItemAct: nowIndex === index }]"
        @mouseover="nowIndex = index"
      >
        <div class="tabItemIcon">
          <img
            :src="item.src"
            alt="icon"
            :style="`height:${item.height}vw;width:${item.width}vw`"
          />
        </div>

        <strong class="tabItemText textBold">{{ item.text }}</strong>
      </div>
    </div>

    <div class="tabRight">
      <!-- 1 -->
      <div
        class="tabRightOne tabRightItem"
        :class="[{ tabRightItemAct: nowIndex === 0 }]"
      >
        <h2 class="tabRightItemTitle textBold">BRAND BUILDING SERVICE</h2>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            Our brand strategy services will guide you through the process of developing a
            distinctive identity that captures the essence of your cannabis vaping
            business.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>

      <!-- 2 -->
      <div
        class="tabRightTwo tabRightItem"
        :class="[{ tabRightItemAct: nowIndex === 1 }]"
      >
        <div class="tabRightItemTitle textBold">
          {{ "TESTING & COMPLIANCE" }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            Our turnkey solution includes rigorous testing protocols to ensure our
            cannabis vaping products meet the highest quality and regulatory standards.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>

      <!-- 3 -->
      <div
        class="tabRightThree tabRightItem"
        :class="[{ tabRightItemAct: nowIndex === 2 }]"
      >
        <div class="tabRightItemTitle textBold">
          {{ "PRODUCE & MANUFACTURING" }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            We understand that every aspect of the manufacturing process must be carefully
            monitored to ensure consistency in product quality and customer satisfaction.
          </div>
          <div class="tabRightItemRight imageItem"></div>
        </div>
      </div>
      <!-- 4 -->
      <div
        class="tabRightFour tabRightItem fourItem"
        :class="[{ tabRightItemAct: nowIndex === 3 }]"
      >
        <div class="tabRightItemTitle textBold">
          {{ "FILLING, ASSEMBLING & PACKAGING" }}
        </div>
        <div class="tabRightItemTitle textBold garyTitle">
          {{ "FINISHING IS EVERYTHING" }}
        </div>
        <div class="tabRightItemCon">
          <div class="tabRightItemLeft textLight">
            State-of-the-art filling, assembling, and packaging services, to ensure the
            final step is secure and proper.
          </div>
        </div>

        <div class="tabRightItemImgCon">
          <div class="tabRightItemImgItem">
            <img
              class="tabRightItemImg"
              src="https://files.myuwell.com/powehi/solution/tab/10.png"
              alt="filling"
            />
            <div class="tabRightItemImgText textLight">FILLING</div>
          </div>
          <div class="tabRightItemImgItem">
            <img
              class="tabRightItemImg"
              src="https://files.myuwell.com/powehi/solution/tab/11.png"
              alt="capping"
            />
            <div class="tabRightItemImgText textLight">CAPPING</div>
          </div>
          <div class="tabRightItemImgItem">
            <img
              class="tabRightItemImg"
              src="https://files.myuwell.com/powehi/solution/tab/12.png"
              alt="packaging"
            />
            <div class="tabRightItemImgText textLight">PACKAGING</div>
          </div>
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
      list: [
        {
          src: "https://files.myuwell.com/powehi/solution/tab/1.png",
          width: 29 / 7.5,
          height: 32 / 7.5,
          text: "BRAND BUILDING SERVICE",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/tab/2.png",
          width: 26 / 7.5,
          height: 32 / 7.5,
          text: "TESTING & COMPLIANCE",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/tab/3.png",
          width: 32 / 7.5,
          height: 31 / 7.5,
          text: "PRODUCE & MANUFACTURING",
        },
        {
          src: "https://files.myuwell.com/powehi/solution/tab/4.png",
          width: 31 / 7.5,
          height: 32 / 7.5,
          text: "FILLING, CAPPING & PACKAGING",
        },
      ],
      nowIndex: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.tabPage {
  display: flex;
  flex-direction: column;
  padding: (90 / @morem) 0;
  width: (550 / @morem);
  margin: 0 auto;
  .tabLeft {
    height: (300 / @morem);
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .tabItem {
      height: (54 / @morem);
      width: 100%;
      border-radius: (10 / @morem);
      background-color: #fff;
      box-shadow: 0px 0px (10 / @morem) 2px rgba(215, 142, 67, 0.3);
      box-sizing: border-box;
      display: flex;
      padding-left: (8 / @morem);
      align-items: center;
      transition: 0.4s ease-in-out;

      .tabItemIcon {
        height: (38 / @morem);
        width: (38 / @morem);
        border-radius: 50%;
        background-color: #ffe8d0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tabItemText {
        padding-left: (20 / @morem);
        font-size: (24 / @morem);
        color: #000;
        letter-spacing: -1px;
      }
    }

    .tabItemAct {
      background-color: @mainColor;
      color: @white;

      .tabItemText {
        color: @white;
      }
    }
  }

  .tabRight {
    width: 100%;
    min-height: (540 / @morem);
    .tabRightItem {
      display: none;
      padding-top: (60 / @morem);
      width: 100%;

      .tabRightItemTitle {
        font-size: (30 / @morem);
        padding-bottom: (30 / @morem);
      }

      .tabRightItemCon {
        display: flex;
        flex-direction: column;

        .tabRightItemLeft {
          color: #000;
          font-size: (24 / @morem);
          padding-bottom: (40 / @morem);
        }
        .tabRightItemRight {
          height: (250 / @morem);
          width: (550 / @morem);
          border-radius: (14 / @morem);
          overflow: hidden;
        }
      }
    }

    .tabRightItem.fourItem {
      // padding-top: (20 / @morem);
      .tabRightItemTitle {
        height: auto;
        padding-bottom: (20 / @morem);
      }
      .tabRightItemTitle.garyTitle {
        color: #dcdcdc;
      }
      .tabRightItemLeft {
        width: 100%;
      }
    }

    .tabRightItemImgCon {
      padding-top: (20 / @morem);
      width: 100%;
      display: flex;
      justify-content: space-between;
      .tabRightItemImgItem {
        width: (128 / @morem);

        .tabRightItemImg {
          height: (188 / @morem);
          width: (128 / @morem);
        }
        .tabRightItemImgText {
          padding-top: (20 / @morem);
          font-size: (16 / @morem);
          color: #707070;
          text-align: center;
        }
      }
    }

    .tabRightItem.tabRightItemAct {
      display: block;
    }

    .tabRightOne .tabRightItemRight {
      background-image: url("https://files.myuwell.com/powehi/solution/tab/moOne.png");
    }

    .tabRightTwo .tabRightItemRight {
      background-image: url("https://files.myuwell.com/powehi/solution/tab/moTwo.png");
    }
    .tabRightThree .tabRightItemRight {
      background-image: url("https://files.myuwell.com/powehi/solution/tab/moThree.png");
    }
  }
}
</style>
