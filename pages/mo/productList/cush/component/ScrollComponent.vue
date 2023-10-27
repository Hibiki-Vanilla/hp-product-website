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
          <div class="listItem textLight">HDN005</div>
          <div class="listItem textLight">HDN005B</div>
          <div class="listItem textLight">HDN009</div>

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

      <div class="scrollBottomBottom">
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
      list: [
         "https://files.myuwell.com/powehi/cush/mo/swiper-1.png",
      ],
      textList: [
        {
          title: "Deminsion",
          text: "69.5*41*13.5mm (L*W*H)",
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
          padding: (20 / @morem)  (5 / @morem);
          font-size: (18 / @morem);
          white-space: pre-wrap;
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
