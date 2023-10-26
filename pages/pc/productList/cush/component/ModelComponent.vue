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
          <strong class="textBlack titleSize">CUSH</strong>
          <span class="textSemiBold"
            >MODEL NUMBER
            <strong class="blackBox">HDN004/HDNOO4B/HDN008</strong>
          </span>
        </div>

        <div class="textLight modelRightText">
          ● Powered by VISCORE® heating coil
          <br />
          ● Up to 5g Larger volume
          <br />
          ● 3 Voltage settings adjustment with preheat
          <br />
          ● LED Indicator in bottom
          <br />
          ● Fully visible and customizable oil window
          <br />
          ● 280mah battery&Rechargeable Type-C Port
          <br />
          ● Convenient button activation
          <br />
          ● Multiple extracts compatibility
          <br />
          ● Top filling with snap-fit makes batch capping a breeze.
          <br />
          ● Stylish pattern options available for customization
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
        require('@/static/cush/pc/01.png'),
        require('@/static/cush/pc/02.png'),
        require('@/static/cush/pc/03.png'),
        require('@/static/cush/pc/04.png'),
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.model {
  box-sizing: border-box;
  padding-top: (200 / @pcrem);
  height: (1080 / @pcrem);
  .modelCon {
    display: flex;
    width: (1400 / @pcrem);
    height: 100%;

    margin: 0 auto;

    .modelLeft {
      height: 100%;

      width: 50%;
      .modelMainBox {
        position: relative;
        height: (600 / @pcrem);
        width: (600 / @pcrem);
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
          left: -(40 / @pcrem);
          height: (22 / @pcrem);
          width: (15 / @pcrem);
        }
        .modelMainRight {
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: -(40 / @pcrem);
          height: (22 / @pcrem);
          width: (15 / @pcrem);
        }
      }

      .modelDeptBox {
        display: flex;
        justify-content: space-between;
        width: (600 / @pcrem);
        padding-top: (75 / @pcrem);
        .modelDeptImg {
          cursor: pointer;
          height: (100 / @pcrem);
          width: (100 / @pcrem);
        }
      }
    }

    .modelRight {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      padding-left: (80 / @pcrem);

      .modelRightTitle {
        display: flex;
        align-items: flex-end;
        .textBlack {
          color: @mainColor;
          border-bottom: 3px solid @mainColor;
        }
        .textSemiBold {
          padding-left: (15 / @pcrem);
          font-size: (18 / @pcrem);

          .blackBox {
            background-color: #000;
            color: @white;
            padding: 2px;
          }
        }
      }

      .modelRightText {
        padding-top: (50 / @pcrem);
        font-size: (24 / @pcrem);
        line-height: 2;
      }
    }
  }
}
</style>
