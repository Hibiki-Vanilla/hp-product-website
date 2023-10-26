<template>
  <section class="why">
    <h2 class="whyTitle textBold" data-aos="fade-up">WHY <span>POWEHI</span></h2>
    <div class="whyTop">
      <h3 class="whyTopLeft whyTopItem textBold imageItem" data-aos="fade-up">DIVERSE RANGE OF PRODUCTS</h3>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
            <h3 class="textBold">CHOOSE THE PERFECT VAPING HARDWARE</h3>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight textSize">
          We offer a wide range of cannabis vaping hardware for our customers to choose from, to meet customers'
          comprehensive vaping device needs in various types of market.
        </div>
      </div>

      <h3 class="whyTopRight whyTopItem textBold imageItem" data-aos="fade-up">CUTTING-EDGE TECHNOLOGY</h3>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
            <h3 class="textBold">ELEVATING EXPERIENCE WITH ADVANCED TECHNOLOGY</h3>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight textSize">
          Through meticulous attention to detail and a commitment to innovation, We focus on enhancing the heating coil,
          Optimizing the product structure, perfecting the industrial design, and maximizing electric functions.
        </div>
      </div>
    </div>
    <div class="whyBottom">
      <div class="whyBottomCon imageItem" data-aos="fade-up"></div>
      <div class="whyTopBoxCon" data-aos="fade-up">
        <div class="whyTopBoxTop">
          <div class="whyTopBoxTopCon">
            <img src="https://files.myuwell.com/powehi/home/why/yes.png" alt="icon" />
            <h3 class="textBold">WE HANDLE IT ALL</h3>
          </div>
        </div>
        <div class="whyTopBoxBottom textLight textSize">
          Leverage from our strong in-house team and partner supporting, we're proud to offer a one-stop solution for
          all your cannabis vaping needs, from product design and packaging to branding and compliance.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.titleSize {
  font-size: (55 / @morem);
}

.textSize {
  font-size: (24 / @morem);
}
.why {
  padding-top: (100 / @morem);
  width: 100%;
  background-color: #ececec;
  background-image: url('https://files.myuwell.com/powehi/home/why/moBg.png');
  background-size: 100% (490 / @morem);
  background-position: center (550 / @morem);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .whyTitle {
    color: #000;
    padding-bottom: (55 / @morem);
    font-size: (55 / @morem);

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
      box-sizing: border-box;
      padding-top: (30 / @morem);
      padding-left: (20 / @morem);
      font-size: (24 / @morem);
      color: @white;
    }

    .whyTopLeft {
      background-image: url('https://files.myuwell.com/powehi/home/why/top.png');
    }
    .whyTopRight {
      margin-top: (50 / @morem);
      background-image: url('https://files.myuwell.com/powehi/home/why/bottom.png');
    }
  }

  .whyTopBoxCon {
    width: (550 / @morem);
    border-radius: 0 0 (12 / @morem) (12 / @morem);

    background-color: @white;
    display: flex;
    flex-direction: column;
    .whyTopBoxTop {
      display: flex;
      align-items: center;
      height: (72 / @morem);
      width: 100%;
      // padding: (16 / @morem) 0 (16 / @morem) (20 / @morem);
      padding-left: (20 / @morem);
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
          font-size: (24 / @morem);
        }
      }
    }
    .whyTopBoxBottom {
      width: 100%;
      padding: (20 / @morem) (30 / @morem);
      box-sizing: border-box;
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
      background-image: url('https://files.myuwell.com/powehi/home/why/moBottomBg.png');
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
