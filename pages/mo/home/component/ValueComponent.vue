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
  padding-bottom: (90 / @morem);
  .valueTitle {
    color: #000;
    padding-bottom: (50 / @morem);
  }
  .valueText {
    color: #000;
    width: (550 / @morem);
    text-align: center;
    padding-bottom: (50 / @morem);
  }

  .valueBottom {
    position: relative;

    padding: (30 / @morem) 0;
    width: (550 / @morem);
    border-radius: (20 / @morem);
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .rowItem {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 40%;
      height: (90 / @morem);
      padding: 0 (24 / @morem);
      box-sizing: border-box;
      text-align: center;

      &:nth-child(n + 3) {
        width: 33%;
        margin-top: (40 / @morem);
      }

      .rowItemTitle {
        display: flex;
        align-items: flex-end;
        color: #fe8a12;
        padding-bottom: (10 / @morem);
        font-size: (24 / @morem);
        span {
          font-size: (18 / @morem);
        }
      }
      .rowItemText {
        font-size: (16 / @morem);
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

    .rowItem:nth-child(3)::before {
      box-shadow: unset;
    }
  }
  .valueBottomLeft {
    @num: (18 / @morem);
    position: absolute;
    top: calc(50% - @num);
    transform: rotate(180deg);
    left: -(50 / @morem);
    height: (18 / @morem);
    width: (20 / @morem);
  }
  .valueBottomRight {
    @num: (18 / @morem);
    position: absolute;
    top: calc(50% - @num);
    right: -(50 / @morem);
    height: (18 / @morem);
    width: (20 / @morem);
  }
}
</style>
