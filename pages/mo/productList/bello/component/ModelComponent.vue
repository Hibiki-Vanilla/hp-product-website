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
            alt="bello"
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
            alt="bello"
            @click="nowIndex = index"
          />
        </div>
      </div>

      <div class="modelRight" data-aos="fade-up">
        <div class="modelRightTitle">
          <strong class="textBlack titleSize">BELLO</strong>
          <br />
          <span class="textSemiBold"
            >MODEL NUMBER
            <strong class="blackBox">HDN005/HDNOO5B/HDN009</strong>
          </span>
        </div>

        <div class="textLight modelRightText">
          ● Powered by VISCORE® heating coil
          <br />
          ● Up to 5g Larger volume
          <br />
          ● Dual air-flow for anti-clogging
          <br />
          ● 3 Voltage settings adjustment with preheat
          <br />
          ● LED Indicator in bottom
          <br />
          ● Unique design 180° visible oil window
          <br />
          ● 280mah battery&Rechargeable Type-C Port
          <br />
          ● Convenient button activation
          <br />
          ● Multiple extracts compatibility
          <br />
          ● Top filling with snap-fit makes batch capping a breeze.
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
      nowIndex: 0,
      list: [
        require('@/static/bello/01.png'),
        require('@/static/bello/02.png'),
        require('@/static/bello/03.png'),
        require('@/static/bello/04.png'),
      ],
    }
  },
}
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
        
        .textBlack {
          color: @mainColor;
          border-bottom: 1px solid @mainColor;
        }
        .textSemiBold {
          padding-top: (10/@morem);
          display: flex;
          align-items: center;
          font-size: (24 / @morem);
          white-space:nowrap;
          .blackBox {
            margin-left: (6/@morem);
            background-color: #000;
            color: @white;
            padding: 2px;
          }
        }
      }

      .modelRightText {
        padding-top: (20 / @morem);
        font-size: (18 / @morem);
        line-height: 2;
      }
    }
  }
}
</style>
