<template>
  <section class="scroll">
    <div class="scrollLeft">
      <img
        v-for="(item, index) in 7"
        :key="index"
        :src="`https://files.myuwell.com/powehi/sole/pc/swiper-${item}.png`"
        class="soleImg"
        alt="sole"
      />
    </div>
    <div class="scrollRight">
      <div class="scrollRightCon">
        <div class="listRow listRowTop">
          <div class="listItem textBold">Model Name</div>
          <div class="listItem textLight">HDN003</div>
          <div class="listItem textLight">HDN003B</div>
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
      </div>
      <div class="scrollRightBottom">
        <div class="scrollButton textRegular" role="button" @click="onContant">
          REQUEST SAMPLE NOW
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
      textList: [
        {
          title: "Dimension",
          text: "108*19*10.6mm (L*W*H)",
          twoText: "98*19*10.6mm (L*W*H)",
        },
        { title: "Tank Capacity", text: "2.0mL", twoText: "1.0mL" },
        { title: "Battery Capacity", text: "280mAh", twoText: "280mAh" },
        { title: "Charging Port", text: "Type-C", twoText: "Type-C" },
        {
          title: "Voltage",
          text: "2V(Pre-heat)/ 3.0/3.3/3.6V",
          twoText: "2V(Pre-heat)/ 3.0/3.3/3.6V",
        },
        { title: "Active", text: "Button Active", twoText: "Button Active" },
        { title: "Resistance", text: "1.0/1.2/1.4Ω", twoText: "1.0/1.2/1.4Ω" },
        { title: "Filling Type", text: "Top Fill", twoText: "Top Fill" },
        {
          title: "Materials",
          text: "Aluminum, PC, PCTG\n\n316 Stainless Steel Center Post.",
          twoText: "Aluminum, PC, PCTG\n\n316 Stainless Steel Center Post.",
        },
      ],
    };
  },
  methods: {
    onContant() {
      this.$ctx.push("/contact");
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
    .soleImg {
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
      width: (720 / @pcrem);
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
          white-space: pre-wrap;
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
