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
          <strong class="textBlack titleSize">SOLE</strong>
          <span class="textSemiBold"
            >MODEL NUMBER
            <strong class="blackBox">HDN003/HDNOO3B</strong>
          </span>
        </div>

        <div class="textLight modelRightText">
          ● Viscore® ceramic heating technology
          <br />
          ● Unique design 180°visible oil window
          <br />
          ● 3 level voltage with preheating function
          <br />
          ● 320mAh battery with type-c rechargeable port
          <br />
          ● Food-grade mouthpiece conforms with ergonomics
          <br />
          ● Convenient button activation
          <br />
          ● Fashionable LED indicator
          <br />
          ● Multiple extracts compatibility
          <br />
          ● Top filling with snap-fit making capping a breeze.
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
        'https://files.myuwell.com/powehi/sole/pc/1.png',
        'https://files.myuwell.com/powehi/sole/pc/2.png',
        'https://files.myuwell.com/powehi/sole/pc/3.png',
        'https://files.myuwell.com/powehi/sole/pc/4.png',
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
      padding-left: (100 / @pcrem);
      white-space: nowrap;

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
