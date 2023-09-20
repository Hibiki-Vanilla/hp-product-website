<template>
  <section class="model">
    <div class="modelCon">
      <div class="modelLeft">
        <div class="modelMainBox">
          <img
            v-for="(item, index) in list"
            :key="index"
            :src="item"
            class="modelMainImg"
            :class="[{ modelMainImgAct: nowIndex === index }]"
            alt="calio"
          />
          <img
            class="modelMainLeft"
            src="https://files.myuwell.com/powehi/calio/arr.png"
            alt="left"
            @click="nowIndex = nowIndex === 0 ? 3 : nowIndex - 1"
          />

          <img
            class="modelMainRight"
            src="https://files.myuwell.com/powehi/calio/arr.png"
            alt="right"
            @click="nowIndex = nowIndex === 3 ? 0 : nowIndex + 1"
          />
        </div>

        <div class="modelDeptBox">
          <img
            v-for="(item, index) in list"
            :key="index"
            :src="item"
            class="modelDeptImg"
            alt="calio"
            @click="nowIndex = index"
          />
        </div>
      </div>

      <div class="modelRight" data-aos="fade-up">
        <div class="modelRightTitle">
          <strong class="textBlack textSize">CALIO</strong>
          <span class="textSemiBold"
            >MODEL NUMBER
            <strong class="blackBox">HDN002/HDN002C</strong>
          </span>
        </div>

        <div class="textLight modelRightText">
          ● VISCORE® Ceramic Heating Technology
          <br />
          ● Fully Visible And Customizable Oil Window
          <br />
          ● Pre-Heating For Anti-Clogging
          <br />
          ● Button Activation & 3 Level Voltages Adjustment
          <br />

          ● LED Indicator & Rechargeable Type-C Port
          <br />

          ● Multiple Extracts Compatibility
          <br />

          ● 1-2ml Optional Capacity
          <br />

          ● Food-Grade Mouthpiece
          <br />

          ● Available For Customization
          <br />

          ● Medical-Grade Stainless Steel Center Post
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
      nowIndex: 0,
      list: [
        "https://files.myuwell.com/powehi/calio/01.png",
        "https://files.myuwell.com/powehi/calio/02.png",
        "https://files.myuwell.com/powehi/calio/03.png",
        "https://files.myuwell.com/powehi/calio/04.png",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.model {
  box-sizing: border-box;
  padding-top: (80 / @morem);
  height: (1334 / @morem);
  .modelCon {
    display: flex;
    flex-direction: column;
    width: (550 / @morem);
    height: 100%;
    margin: 0 auto;

    .modelLeft {
      width: 100%;
      .modelMainBox {
        position: relative;
        height: (550 / @morem);
        width: (550 / @morem);
        .modelMainImg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
        }

        .modelMainImgAct {
          opacity: 1;
        }

        .modelMainLeft {
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: rotate(180deg);
          left: -(36 / @morem);
          height: (22 / @morem);
          width: (15 / @morem);
        }
        .modelMainRight {
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: -(36 / @morem);
          height: (22 / @morem);
          width: (15 / @morem);
        }
      }

      .modelDeptBox {
        display: flex;
        justify-content: space-between;
        width: (550 / @morem);
        padding-top: (40 / @morem);
        .modelDeptImg {
          cursor: pointer;
          height: (117 / @morem);
          width: (117 / @morem);
        }
      }
    }

    .modelRight {
      padding-top: (60 / @pcrem);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .modelRightTitle {
        display: flex;
        align-items: flex-end;
        .textBlack {
          color: @mainColor;
          border-bottom: 1px solid @mainColor;
        }
        .textSemiBold {
          padding-left: (15 / @morem);
          font-size: (18 / @morem);

          .blackBox {
            background-color: #000;
            color: @white;
            padding: 2px;
          }
        }
      }

      .modelRightText {
        padding-top: (40 / @morem);
        font-size: (18 / @morem);
        line-height: 2;
      }
    }
  }
}
</style>
