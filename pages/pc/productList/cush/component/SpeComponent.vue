<template>
  <section class="scroll">

    <div class="scrollCon">
      <div class="scrollRightCon">
        <div class="listRow listRowTop">
          <div class="listItem textBold">Model Name</div>
          <div class="listItem textLight">HDN004</div>
          <div class="listItem textLight">HDN004B</div>
          <div class="listItem textLight">HDN008</div>

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
          <div class="listItem textLight">{{ item.threeText }}</div>
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
          title: "Deminsion",
          text: "69.5*41*13.5mm(L*W*H)",
          twoText: "69.5*41*13.5mm (L*W*H)",
          threeText: "67*38*12.5mm (L*W*H)",
        },
        { title: "Oil Capacity", text: "5.0mL", twoText: "4.0mL",threeText:'3.0mL' },
        { title: "Battery Capacity", text: "320mAh", twoText: "320mAh",threeText:'320mAh' },
        { title: "Charging Port", text: "Type-C", twoText: "Type-C",threeText:'Type-C' },
        { title: "Voltage", text: "2V(Pre-heat)/3.0/3.3/3.6V", twoText: "2V(Pre-heat)/3.0/3.3/3.6V",threeText:'2V(Pre-heat)/3.0/3.3/3.6V' },
        { title: "Active", text: "Button Active", twoText: "Button Active",threeText:'Button Active' },
        { title: "Resistance", text: "1.0/1.2/1.4Ω", twoText: "1.0/1.2/1.4Ω",threeText:'1.0/1.2/1.4Ω' },
        { title: "Filling way", text: "Top Fill", twoText: "Top Fill",threeText:'Top Fill' },
        { title: "Materials", text: "PC, ABS, PCTG,\n\n316 Stainless Steel Center Post.", twoText: "PC, ABS, PCTG,\n\n316 Stainless Steel Center Post.",threeText:'PC, ABS, PCTG,\n\n316 Stainless Steel Center Post.' },

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
  height: (1080/@pcrem);
  display: flex;
  align-items: center;
  justify-content: center;

  .scrollCon {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .scrollRightCon {
      border: 2px solid #dcdcdc;
      display: flex;
      flex-direction: column;
      width: (1400 / @pcrem);
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
          padding: (24 / @pcrem);
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
      padding-top: (50 / @pcrem);
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
