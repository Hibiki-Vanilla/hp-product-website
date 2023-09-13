<template>
  <section class="why">
    <div class="whyTitle titleSize textBold" data-aos="fade-up">
      WHY <span>POWEHI</span>
    </div>
    <div class="whyTop">
      <div class="whyTopLeft whyTopItem imageItem" data-aos="fade-up"></div>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="@/static/home/why/yes.png" alt="icon" />
            <div class="textBold">CHOOSE THE PERFECT VAPING HARDWARE</div>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight">
          We offer a wide range of cannabis vaping hardware for our customers to choose
          from, to meet customers' comprehensive vaping device needs in various types of
          market.
        </div>
      </div>

      <div class="whyTopRight whyTopItem imageItem" data-aos="fade-up"></div>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="@/static/home/why/yes.png" alt="icon" />
            <div class="textBold">ELEVATING EXPERIENCE WITH ADVANCED TECHNOLOGY</div>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight">
          Through Meticulous Attention To Detail And A Commitment To Innovation, We Focus
          On Enhancing The Heating Coil, Optimizing The Product Structure, Perfecting The
          Industrial Design, And Maximizing Electric Functions.
        </div>
      </div>
    </div>
    <div class="whyBottom">
      <div class="whyBottomCon imageItem" data-aos="fade-up"></div>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="@/static/home/why/yes.png" alt="icon" />
            <div class="textBold">WE HANDLE IT ALL</div>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight">
          Leverage from our strong in-house team and partner supporting, we're proud to
          offer a one-stop solution for all your cannabis vaping needs, from product
          design and packaging to branding and compliance.
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
  padding-top: (100 / @morem);
  width: 100%;
  background-color: #ececec;
  background-image: url("@/static/home/why/moBg.png");
  background-size: 100% (490 / @morem);
  background-position: center (550 / @morem);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .whyTitle {
    color: #000;
    padding-bottom: (70 / @morem);

    span {
      color: @mainColor;
      border-bottom: 1px solid @mainColor;
    }
  }

  .whyTop {
    display: flex;
    flex-wrap: wrap;
    width: (550 / @morem);

    .whyTopItem {
      position: relative;
      height: (300 / @morem);
      width: (550 / @morem);
    }

    .whyTopLeft {
      background-image: url("@/static/home/why/top.png");
    }
    .whyTopRight {
      margin-top: (50 / @morem);
      background-image: url("@/static/home/why/bottom.png");
    }
  }

  .whyTopBoxCon {
    width: (550 / @morem);
    border-radius: 0 0 (12 / @morem) (12 / @morem);

    background-color: @white;
    display: flex;
    flex-direction: column;
    .whyTopBoxTop {
      height: (72 / @morem);
      width: 100%;
      padding: (16 / @morem) 0 (16 / @morem) (20 / @morem);
      border-bottom: 1px solid #dcdcdc;
      box-sizing: border-box;

      .whyTopBoxTopCon {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        img {
          height: (35 / @morem);
          width: (35 / @morem);
        }
        .textBold {
          padding-left: (10 / @morem);
          color: #fe6512;
          font-size: (18 / @morem);
        }
      }
    }
    .whyTopBoxBottom {
      width: 100%;
      padding: (24 / @morem) (20 / @morem);
      box-sizing: border-box;
      font-size: (14 / @morem);
      color: #707070;
      line-height: 1.4;
    }
  }

  //   bottom

  .whyBottom {
    margin-top: (50 / @morem);
    width: (550 / @morem);

    .whyBottomCon {
      position: relative;
      height: (300 / @morem);
      width: 100%;
      background-image: url("@/static/home/why/moBottomBg.png");
    }
    .whyBottomBox {
      height: (254 / @morem);
      width: 100%;
      border-radius: 0 0 (12 / @morem) (12 / @morem);
      background-color: @white;
    }
  }
}
</style>
