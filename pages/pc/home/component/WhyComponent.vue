<template>
  <section class="why">
    <h2 class="whyTitle titleSize textBold" data-aos="fade-up">
      WHY <span>POWEHI</span>
    </h2>
    <div class="whyTop">
      <div class="whyTopLeft whyTopItem imageItem" data-aos="fade-up">
        <h3 class="textBold">DIVERSE RANGE OF PRODUCTS</h3>

        <div class="whyTopBoxCon" data-aos="fade-up">
          <div class="whyTopBoxTop">
            <div class="whyTopBoxTopCon">
              <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
              <h3 class="textBold">CHOOSE THE PERFECT VAPING HARDWARE</h3>
            </div>
          </div>
          <div class="whyTopBoxBottom textLight">
            We offer a wide range of cannabis vaping hardware for our customers to choose
            from, to meet customers' comprehensive vaping device needs in various types of
            market.
          </div>
        </div>
      </div>
      <div class="whyTopRight whyTopItem imageItem" data-aos="fade-up">
        <h3 class="textBold">CUTTING-EDGE TECHNOLOGY</h3>
        <div class="whyTopBoxCon" data-aos="fade-up">
          <div class="whyTopBoxTop">
            <div class="whyTopBoxTopCon">
              <h3 class="textBold">ELEVATING EXPERIENCE WITH ADVANCED TECHNOLOGY</h3>
              <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
            </div>
          </div>
          <div class="whyTopBoxBottom textLight">
            Through meticulous attention to detail and a commitment to innovation, we
            focus on enhancing the heating coil, optimizing the product structure,
            perfecting the industrial design, and maximizing electric functions.
          </div>
        </div>
      </div>
    </div>
    <div class="whyBottom">
      <div class="whyBottomCon imageItem" data-aos="fade-up">
        <h2 class="whyBottomTitle textBold titleSize">TURNKEY SOLUTION</h2>
        <div class="whyBottomBox">
          <div class="whyBoxTop">
            <div class="whyBoxTopCon">
              <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
              <h3 class="textBold">WE HANDLE IT ALL</h3>
            </div>
          </div>
          <div class="whyBoxBottom textLight">
            Leverage from our strong in-house team and partner supporting, we're proud to
            offer a one-stop solution for all your cannabis vaping needs, from product
            design and packaging to branding and compliance.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.why {
  padding-top: (150 / @pcrem);
  width: 100%;
  background-color: #ececec;
  background-image: url("https://files.myuwell.com/powehi/home/why/bg.png");
  background-size: (1920 / @pcrem) (553 / @pcrem);
  background-position: center (570 / @pcrem);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .whyTitle {
    color: #000;
    padding-bottom: (100 / @pcrem);

    span {
      color: @mainColor;
      border-bottom: 3px solid @mainColor;
    }
  }

  .whyTop {
    display: flex;
    justify-content: space-between;
    height: (700 / @pcrem);
    width: (1400 / @pcrem);

    .whyTopItem {
      position: relative;
      box-sizing: border-box;
      padding-top: (40 / @pcrem);
      padding-left: (40 / @pcrem);
      height: (355 / @pcrem);
      width: (680 / @pcrem);
      font-size: (30 / @pcrem);
      color: @white;
      .whyTopBoxCon {
        position: absolute;
        height: (312 / @pcrem);
        width: (380 / @pcrem);
        background-color: @white;
        display: flex;
        flex-direction: column;
        .whyTopBoxTop {
          height: (134 / @pcrem);
          width: 100%;
          padding: (40 / @pcrem) (20 / @pcrem) (30 / @pcrem);
          border-bottom: 1px solid #dcdcdc;
          box-sizing: border-box;

          .whyTopBoxTopCon {
            display: flex;
            align-items: center;
            height: 100%;
            width: 100%;
            padding: 0 (10 / @pcrem);
            box-sizing: border-box;
            background-color: #ffe8d0;
            border-radius: (4 / @pcrem);
            img {
              height: (35 / @pcrem);
              width: (35 / @pcrem);
            }
            .textBold {
              padding-left: (10 / @pcrem);
              color: #fe6512;
              font-size: (16 / @pcrem);
            }
          }
        }
        .whyTopBoxBottom {
          width: 100%;
          padding: (24 / @pcrem) (20 / @pcrem) 0;
          box-sizing: border-box;
          font-size: (14 / @pcrem);
          color: #707070;
          line-height: 1.4;
        }
      }
    }
    .whyTopLeft {
      background-image: url("https://files.myuwell.com/powehi/home/why/topLeft.png");
      .whyTopBoxCon {
        top: (307 / @pcrem);
        right: 0;
        border-radius: (12 / @pcrem) 0 (12 / @pcrem) (12 / @pcrem);
      }
    }
    .whyTopRight {
      background-image: url("https://files.myuwell.com/powehi/home/why/topRight.png");

      .whyTopBoxCon {
        top: (307 / @pcrem);
        left: 0;
        border-radius: 0 (12 / @pcrem) (12 / @pcrem) (12 / @pcrem);

        .whyTopBoxTopCon {
          .textBold {
            text-align: right;
            padding-left: 0;
            padding-right: (10 / @pcrem);
          }
        }
        .whyTopBoxBottom {
          text-align: right;
        }
      }
    }
  }

  //   bottom

  .whyBottom {
    width: (1400 / @pcrem);
    height: (700 / @pcrem);

    .whyBottomCon {
      position: relative;
      height: (530 / @pcrem);
      width: 100%;
      background-image: url("https://files.myuwell.com/powehi/home/why/bottomBg.png");
      font-size: (38 / @pcrem);
      color: @white;
      .whyBottomTitle {
        padding-top: (40 / @pcrem);
        width: 100%;
        text-align: center;
      }
      .whyBottomBox {
        position: absolute;
        top: (446 / @pcrem);
        left: 50%;
        transform: translate(-50%, 0);
        height: (254 / @pcrem);
        width: (800 / @pcrem);
        border-radius: (12 / @pcrem);
        background-color: @white;

        .whyBoxTop {
          height: (120 / @pcrem);
          width: 100%;
          padding: (32 / @pcrem) (267 / @pcrem);
          border-bottom: 1px solid #dcdcdc;
          box-sizing: border-box;
          .whyBoxTopCon {
            display: flex;
            align-items: center;
            height: 100%;
            width: 100%;
            padding: 0 (10 / @pcrem);
            box-sizing: border-box;
            background-color: #ffe8d0;
            border-radius: (4 / @pcrem);
            img {
              height: (35 / @pcrem);
              width: (35 / @pcrem);
            }
            .textBold {
              padding-left: (12 / @pcrem);
              color: #fe6512;
              font-size: (18 / @pcrem);
            }
          }
        }

        .whyBoxBottom {
          width: 100%;
          text-align: center;
          padding: (30 / @pcrem) (40 / @pcrem) 0;
          box-sizing: border-box;
          font-size: (14 / @pcrem);
          color: #707070;
          line-height: 1.4;
        }
      }
    }
  }
}
</style>
