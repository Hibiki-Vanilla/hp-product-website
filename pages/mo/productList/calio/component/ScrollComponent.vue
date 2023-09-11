<template>
  <section class="scroll">
    <div class="scrollTop">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item"
        class="calioImg"
        alt="calio"
      />
    </div>

    <div class="scrollBottom">
      <div class="scrollBottomCon">
        <div
          v-for="(item, index) in textList"
          :key="index"
          class="scrollItem"
          :class="[{ scrollItemTwo: index % 2 === 0 }]"
        >
          <span class="scrollItemTitle textBold">{{ item.title }}</span>
          <span class="scrollItemText textLight"> {{ item.text }}</span>
        </div>

        <div class="scrollBottomBottom">
          <div class="scrollButton textRegular" role="button">Request Sample Now</div>
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
        require("@/static/calio/mos-1.png"),
        // require("@/static/calio/mos-2.png"),
        // require("@/static/calio/mos-3.png"),
        // require("@/static/calio/mos-4.png"),
        // require("@/static/calio/mos-5.png"),
        // require("@/static/calio/mos-6.png"),
        // require("@/static/calio/mos-7.png"),
      ],
      textList: [
        { title: "Dimension", text: "62.1 mm x 30.1 mm x 16.3 mm" },
        { title: "Activation Mode ", text: "Autodraw ( Voltage 3.7 V )" },
        { title: "Coil Style", text: "Single Coil" },
        { title: "Tank Capacity ", text: "0.3 ml and 0.5 ml" },
        { title: "Resistance", text: "1.4 Ω" },
        { title: "Coil Material", text: "Ceramic + FeCr" },
        { title: "Body Material", text: "PVC" },
        { title: "Micro USB Charging ", text: "5 V / 0.5 A" },
        { title: "Battery Capacity", text: "400 mAh" },
        { title: "Charging Current", text: "0.5 A" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.scroll {
  position: relative;
  // height: ( (540*7 + 794) /@morem);
  width: 100%;
  .scrollTop {
    width: 100%;
    height: (540 / @morem);
    .calioImg {
      height: (540 / @morem);
      width: 100%;
    }
  }

  .scrollBottom {
    // position: sticky;
    // top: (540/@morem);
    // left: 0;
    // width: 100%;
    height: (793 / @morem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @white;
    .scrollBottomCon {
      display: flex;
      flex-direction: column;

      .scrollItem {
        width: (620 / @morem);
        height: (50 / @morem);
        line-height: (50 / @morem);
        background-color: @white;
        box-sizing: border-box;
        padding-left: (46 / @morem);
        .scrollItemTitle {
          display: inline-block;
          width: (280 / @morem);
          color: #000;
          font-size: (20 / @morem);
        }
        .scrollItemText {
          font-size: (18 / @morem);
        }
      }
      .scrollItemTwo {
        background-color: #eeeeee;
      }

      .scrollBottomBottom {
        padding-top: (30 / @morem);
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .scrollButton {
          cursor: pointer;
          color: @white;
          background-color: @mainColor;
          height: (50 / @morem);
          line-height: (50 / @morem);
          width: (200 / @morem);
          border-radius: (25 / @morem);
          font-size: (16 / @morem);
          text-align: center;
        }
      }
    }
  }
}
</style>
