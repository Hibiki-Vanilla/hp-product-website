<template>
  <section class="tech">
    <div class="techCon" data-aos="fade-up">
      <h2 class="techTitle textBold titleSize">CUTTING-EDGE TECHNOLOGY</h2>
      <h3 class="techTip textLight textSize">
        ELEVATING EXPERIENCE WITH ADVANCED TECHNOLOGY
      </h3>
      <div class="techText textLigth">
        In our turnkey solution for cannabis vaping, we prioritize research and
        development to create cutting-edge products that surpass industry standards.
        Through meticulous attention to detail and a commitment to innovation, we focus on
        enhancing the heating coil, optimizing the product structure, perfecting the
        industrial design, and maximizing electric functions.
      </div>

      <!-- bottom -->
      <div class="techBottom">
        <div class="techBottomLeft">
          <img
            class="techBottomLeftImg"
            src="https://files.myuwell.com/powehi/about/tech/left.png"
            alt="technology"
          />
        </div>
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
            <strong class="techItemText textLight">
              {{ item.text }}
            </strong>
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
          img: "https://files.myuwell.com/powehi/about/tech/1.png",
          width: 41 / 19.2,
          height: 85 / 19.2,
        },
        {
          text: "AIRFLOW",
          img: "https://files.myuwell.com/powehi/about/tech/2.png",
          width: 36 / 19.2,
          height: 98 / 19.2,
        },
        {
          text: "STRUCTURE",
          img: "https://files.myuwell.com/powehi/about/tech/3.png",
          width: 63 / 19.2,
          height: 78 / 19.2,
        },
        {
          text: "FUNCTIONS",
          width: 87 / 19.2,
          height: 60 / 19.2,
          img: "https://files.myuwell.com/powehi/about/tech/4.png",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tech {
  padding-top: (110 / @pcrem);
  padding-bottom: (100 / @pcrem);
  display: flex;
  width: 100%;
  justify-content: center;

  .techCon {
    width: (1400 / @pcrem);
    text-align: center;
    .techTitle {
      padding-bottom: (50 / @pcrem);
    }
    .techTip {
      padding-bottom: (60 / @pcrem);
    }
    .techText {
      color: #707070;
      font-size: (18 / @pcrem);
    }

    .techBottom {
      padding-top: (70 / @pcrem);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .techBottomLeft {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        .techBottomLeftImg {
          height: (305 / @pcrem);
          width: (677 / @pcrem);
        }
      }

      .techBottomRight {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50%;
        box-sizing: border-box;
        height: (410 / @pcrem);
        padding: 0 (148 / @pcrem);
        .techItem {
          height: (180 / @pcrem);
          width: (180 / @pcrem);
          border-radius: (12 / @pcrem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.8s cubic-bezier(0.25, 1, 0.38, 1);
          &:nth-child(n + 3) {
            margin-top: (45 / @pcrem);
          }

          .textItemImgBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: (100 / @pcrem);
            padding-top: (15 / @pcrem);
            padding-bottom: (15 / @pcrem);
            .textItemImg {
            }
          }

          .techItemText {
            font-size: (14 / @pcrem);
            color: #707070;
            transition: color 0.8s cubic-bezier(0.25, 1, 0.38, 1);
          }
          &:hover {
            box-shadow: 8px 8px 20px hsla(0, 0%, 63%, 0.2), -8px -8px 20px #fff,
              inset 4px 4px 10px hsla(0, 0%, 63%, 0.2), inset -4px -4px 10px #fff;

            .techItemText {
              color: @mainColor;
            }
          }
        }
      }
    }
  }
}
</style>
