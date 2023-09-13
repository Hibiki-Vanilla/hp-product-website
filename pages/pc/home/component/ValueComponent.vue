<template>
  <section class="valueBox" data-aos="fade-up">
    <div class="valueTitle textBold titleSize">MANUFACTURING</div>
    <div class="valueText textLight textSize">
      Efficient manufacturing and shipping are key to a successful cannabis business. We
      have established a robust network of manufacturing partners to produce your products
      at scale while maintaining strict quality control.
    </div>

    <!-- bottom -->
    <div class="valueBottom">
      <div v-for="(item, index) in rowList" :key="index" class="rowItem">
        <div class="textBold rowItemTitle">
          {{ item.title }}
          <span v-if="index === 4">㎡</span>
        </div>
        <div class="rowItemText textRegular">{{ item.text }}</div>
      </div>

      <!-- left -->
      <img class="valueBottomLeft" src="@/static/about/lab/arr.png" alt="arr" />

      <!-- right -->
      <img class="valueBottomRight" src="@/static/about/lab/arr.png" alt="arr" />
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      rowList: [
        { title: "85", text: "State-Of-The-Art Production Lines" },
        { title: "6", text: "International Certifications" },
        { title: "GMP", text: "Dust-Free Workshop" },
        { title: "4,000+", text: "Trained & Skilled Workers" },
        { title: "30,000+", text: "Manufacturing Base" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.valueBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: (190 / @pcrem);
  .valueTitle {
    color: #000;
    padding-bottom: (50 / @pcrem);
  }
  .valueText {
    color: #000;
    width: (1240 / @pcrem);
    text-align: center;
    padding-bottom: (90 / @pcrem);
  }

  .valueBottom {
    position: relative;
    height: (236 / @pcrem);
    width: (1400 / @pcrem);
    border-radius: (20 / @pcrem);
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;

    .rowItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: (270 / @pcrem);
      height: (150 / @pcrem);
      padding: 0 (50 / @pcrem);
      box-sizing: border-box;
      text-align: center;
      text-align: center;

      .rowItemTitle {
        display: flex;
        align-items: flex-end;
        color: #fe8a12;
        padding-bottom: (26 / @pcrem);
        font-size: (38 / @pcrem);
        span {
          font-size: (18 / @pcrem);
        }
      }
      .rowItemText {
        font-size: (18 / @pcrem);
        color: #707070;
      }
    }
    .rowItem + .rowItem::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 0;
      top: 0;
      left: 0;
      box-shadow: -1px 0px 7px 3px #fff, 2px 0px 7px 2px hsla(0, 0%, 63%, 0.8);
    }
  }
  .valueBottomLeft {
    @num: (18 / @pcrem);
    position: absolute;
    top: calc(50% - @num);
    transform: rotate(180deg);
    left: -(70 / @pcrem);
    height: (18 / @pcrem);
    width: (20 / @pcrem);
  }
  .valueBottomRight {
    @num: (18 / @pcrem);
    position: absolute;
    top: calc(50% - @num);
    right: -(70 / @pcrem);
    height: (18 / @pcrem);
    width: (20 / @pcrem);
  }
}
</style>
