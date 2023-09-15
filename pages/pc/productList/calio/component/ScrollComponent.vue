<template>
  <section class="scroll">
    <div class="scrollLeft">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item"
        class="calioImg"
        alt="calio"
      />
    </div>
    <div class="scrollRight">
      <div class="scrollRightCon">
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
          <div class="listItem textBold">{{ item.title }}</div>
          <div class="listItem textLight">{{ item.text }}</div>
          <div class="listItem textLight">{{ item.twoText }}</div>
        </div>

        <!-- <div

          class="scrollItem"

        >
          <span class="scrollItemTitle textBold textSize">{{ item.title }}</span>
          <span class="scrollItemText textLight"> {{ item.text }}</span>
        </div> -->
      </div>
      <div class="scrollRightBottom">
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
        require("@/static/calio/s-1.png"),
        require("@/static/calio/s-2.png"),
        require("@/static/calio/s-3.png"),
        require("@/static/calio/s-4.png"),
        require("@/static/calio/s-5.png"),
        require("@/static/calio/s-6.png"),
        require("@/static/calio/s-7.png"),
      ],
      textList: [
        {
          title: "Dimension",
          text: "102.7*21*12mm(L*W*H)",
          twoText: "102.7*21*12mm(L*W*H)",
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
          .getElementById("requesForm")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.scroll {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .scrollLeft {
    width: (1100 / @pcrem);
    .calioImg {
      width: 100%;
    }
  }

  .scrollRight {
    position: sticky;
    top: 0;
    right: 0;
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .scrollRightCon {
      border: 2px solid #dcdcdc;
      display: flex;
      flex-direction: column;
      margin-top: (50 / @pcrem);
      width: (712 / @pcrem);
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
          padding: (20 / @pcrem);
          font-size: (18 / @pcrem);
          &:first-child {
            font-size: (20 / @pcrem);
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
        width: (670 / @pcrem);
        height: (60 / @pcrem);
        line-height: (60 / @pcrem);

        .scrollItemTitle {
          display: inline-block;
          width: (300 / @pcrem);
          color: #000;
        }
        .scrollItemText {
          font-size: (20 / @pcrem);
        }
      }
    }

    .scrollRightBottom {
      padding-top: (30 / @pcrem);
      .scrollButton {
        cursor: pointer;
        color: @white;
        background-color: @mainColor;
        height: (68 / @pcrem);
        line-height: (68 / @pcrem);
        width: (260 / @pcrem);
        border-radius: (34 / @pcrem);
        font-size: (18 / @pcrem);
        text-align: center;
      }
    }
  }
}
</style>
