<template>
  <section class="tech">
    <div class="techCon" data-aos="fade-up">
      <div class="techTitle textBold titleSize">CUTTING-EDGE TECHNOLOGY</div>
      <div class="techTip textLight textSize">
        ELEVATING EXPERIENCE WITH ADVANCED TECHNOLOGY
      </div>
      <div class="techText textLigth">
        In our turnkey solution for cannabis vaping, we prioritize research and
        development to create cutting-edge products that surpass industry standards.
        Through meticulous attention to detail and a commitment to innovation, we focus on
        enhancing the heating coil, optimizing the product structure, perfecting the
        industrial design, and maximizing electric functions.
      </div>

      <!-- bottom -->
      <div class="techBottom">
        <img
          class="techBottomLeftImg"
          src="@/static/about/tech/left.png"
          alt="technology"
        />

        <div class="techBottomRight">
          <div v-for="(item, index) in list" :key="index" class="techItem">
            <div class="textItemImgBox">
              <img
                class="textItemImg"
                :src="item.img"
                :style="`height:${item.height}vw;width:${item.width}vw`"
                :alt="item.text"
              />
            </div>
            <div class="techItemText textLight">
              {{ item.text }}
            </div>
          </div>
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
        {
          text: "HEATING COIL",
          img: require("@/static/about/tech/1.png"),
          width: 35 / 7.5,
          height: 72 / 7.5,
        },
        {
          text: "AIRFLOW",
          img: require("@/static/about/tech/2.png"),
          width: 31 / 7.5,
          height: 84 / 7.5,
        },
        {
          text: "STRUCTURE",
          img: require("@/static/about/tech/3.png"),
          width: 53 / 7.5,
          height: 67 / 7.5,
        },
        {
          text: "FUNCTIONS",
          width: 75 / 7.5,
          height: 51 / 7.5,
          img: require("@/static/about/tech/4.png"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tech {
  padding-top: (100 / @morem);
  padding-bottom: (70 / @morem);
  display: flex;
  width: 100%;
  justify-content: center;

  .techCon {
    text-align: center;
    .techTitle {
      padding-bottom: (30 / @morem);
    }
    .techTip {
      padding-bottom: (40 / @morem);
    }
    .techText {
      width: (550 / @morem);
      margin: 0 auto;
      color: #707070;
      font-size: (16 / @morem);
    }

    .techBottom {
      width: (550 / @morem);
      padding-top: (70 / @morem);
      display: flex;
      flex-direction: column;
      align-items: center;

      .techBottomLeftImg {
        height: (247 / @morem);
        width: (550 / @morem);
      }

      .techBottomRight {
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        padding-top: (60 / @morem);
        .techItem {
          height: (180 / @morem);
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .textItemImgBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: (110 / @morem);
          }

          .techItemText {
            font-size: (14 / @morem);
            color: @mainColor;
          }
        }
      }
    }
  }
}
</style>
