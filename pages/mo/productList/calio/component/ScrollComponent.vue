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
        <div class="listRow listRowTop">
          <div class="listItem textBold">Model Name</div>
          <div class="listItem textLight">HDN002</div>
          <div class="listItem textLight">HDN002C</div>
        </div>

        <!-- for -->
        <div
          v-for="(item, index) in textList"
          :key="index"
          class="listRow"
          :class="[{ scrollItemTwo: index % 2 === 1 }]"
        >
          <strong class="listItem textBold">{{ item.title }}</strong>
          <div class="listItem textLight">{{ item.text }}</div>
          <div class="listItem textLight">{{ item.twoText }}</div>
        </div>

        <!-- <div
          v-for="(item, index) in textList"
          :key="index"
          class="scrollItem"
          :class="[{ scrollItemTwo: index % 2 === 0 }]"
        >
          <span class="scrollItemTitle textBold">{{ item.title }}</span>
          <span class="scrollItemText textLight"> {{ item.text }}</span>
        </div> -->
      </div>

      <div class="scrollBottomBottom">
        <div class="scrollButton textRegular" role="button" @click="onHomeForm">
          Request Sample Now
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
        "https://files.myuwell.com/powehi/calio/mos-1.png",
        // "https://files.myuwell.com/powehi/calio/mos-2.png",
        // "https://files.myuwell.com/powehi/calio/mos-3.png",
        // "https://files.myuwell.com/powehi/calio/mos-4.png",
        // "https://files.myuwell.com/powehi/calio/mos-5.png",
        // "https://files.myuwell.com/powehi/calio/mos-6.png",
        // "https://files.myuwell.com/powehi/calio/mos-7.png",
      ],
      textList: [
        {
          title: "Dimension",
          text: "102.7*21*12mm (L*W*H)",
          twoText: "102.7*21*12mm (L*W*H)",
        },
        { title: "Tank Capacity", text: "2.0mL", twoText: "1.0mL" },
        { title: "Battery Capacity", text: "280mAh", twoText: "280mAh" },
        { title: "Charging Port", text: "USB Type-C", twoText: "USB Type-C" },
        {
          title: "Voltage",
          text: "2V(Pre-heat)/ 3.0/3.3/3.6V",
          twoText: "2V(Pre-heat)/ 3.0/3.3/3.6V",
        },
        { title: "Activation", text: "Button Active", twoText: "Button Active" },
        {
          title: "Airway",
          text: "Optional Dual airway",
          twoText: "Optional Dual airway",
        },
        { title: "Filling Type", text: "Top Fill", twoText: "Top Fill" },
        {
          title: "Materials",
          text: "Aluminum, PC, PCTG 316 Stainless Steel Center Post.",
          twoText: "Aluminum, PC, PCTG 316 Stainless Steel Center Post.",
        },
      ],
    };
  },
  methods: {
    onHomeForm() {
      this.$ctx.push("/");
      setTimeout(() => {
        document
          .getElementById("moRequesForm")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    },
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
    height: (1030 / @morem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: @white;
    .scrollBottomCon {
      border: 2px solid #dcdcdc;
      display: flex;
      flex-direction: column;
      width: (670 / @morem);

      .listRow {
        display: flex;
        width: 100%;
        background-color: @white;
        .listItem {
          height: 100%;
          flex: 1;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: (20 / @morem);
          font-size: (18 / @morem);
          &:first-child {
            font-size: (20 / @morem);
          }
          & + .listItem {
            border-left: 2px solid #dcdcdc;
          }
        }
      }

      .scrollItemTwo {
        background-color: #eeeeee;
      }
      .listRowTop {
        .listItem {
          background-color: #707070;
          color: @white;
        }
      }

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
    }

    .scrollBottomBottom {
      padding-top: (30 / @morem);
      .scrollButton {
        cursor: pointer;
        color: @white;
        background-color: @mainColor;
        height: (50 / @morem);
        line-height: (50 / @morem);
        width: (260 / @morem);
        border-radius: (25 / @morem);
        font-size: (18 / @morem);
        text-align: center;
      }
    }
  }
}
</style>
