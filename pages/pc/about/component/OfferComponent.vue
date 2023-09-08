<template>
  <section class="offer">
    <div class="offerCon" data-aos="fade-up">
      <div class="offerLeft">
        <div class="offerLeftTitle textBold titleSize">WHAT WE <span>OFFER</span></div>
        <div class="offerLeftTip textLight textSize">WE HANDLE IT ALL</div>
        <div class="offerLeftText textLight">
          Our robust internal teams serve as contacts for customer service. With POWEHI's
          high-standard supplier evaluation system and collaboration principle, we
          introduce third-party partners to create an end-to-end cannabis vaporization
          one-stop solution service platform.
        </div>
      </div>

      <div class="offerRight">
        <div class="offerRightTop allShadow offerRightBox">
          <div class="offerRightTitle textBold">POWEHI IN-HOUSE TEAM</div>
          Design
          <br />
          Marketing
          <br />
          Project Management
          <br />
          Testing
          <br />
          Quality
          <br />
          Procurement
          <br />
          Product Development
        </div>

        <div class="offerRightBottom allShadow offerRightBox">
          <div class="offerRightTitle textBold">3RD PARTY PARTNERS</div>
          Design House
          <br />
          {{ "Media &KOLs" }}
          <br />
          Raw materials
          <br />
          {{ "Packaging & Printing" }}
          <br />
          Molding
          <br />
          Laboratories
          <br />
          Automation Equipment
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.offer {
  height: (660 / @pcrem);
  padding-bottom: (100 / @pcrem);
  width: 100%;
  background-color: @white;

  .offerCon {
    display: flex;
    height: 100%;
    width: (1400 / @pcrem);
    margin: 0 auto;
    .offerLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 (130 / @pcrem) 0 (90 / @pcrem);
      .offerLeftTitle {
        color: #000;
        padding-bottom: (25 / @pcrem);
        span {
          color: @mainColor;
          border-bottom: 3px solid @mainColor;
        }
      }
      .offerLeftTip {
        padding-bottom: (70 / @pcrem);
      }
      .offerLeftText {
        font-size: (18 / @pcrem);
        color: #707070;
      }
    }
    .offerRight {
      position: relative;
      width: 50%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: (86 / @pcrem) (147 / @pcrem);
      background-size: (427 / @pcrem) (489 / @pcrem);
      background-image: url("@/static/about/offer/bg.png");

      .offerRightBox {
        background-color: @white;
        border-radius: (14 / @pcrem);
        box-sizing: border-box;
        padding-top: (30 / @pcrem);
        text-align: center;
        font-family: "Montserrat Light";
        line-height: 2;
        font-size: (14 / @pcrem);
        .offerRightTitle {
          font-size: (20 / @pcrem);
          color: @mainColor;
          padding-bottom: (10 / @pcrem);
        }
      }
      .offerRightTop {
        position: absolute;
        top: 0;
        left: -(56 / @pcrem);
        height: (332 / @pcrem);
        width: (332 / @pcrem);
      }

      .offerRightBottom {
        position: absolute;
        top: (320 / @pcrem);
        left: (447 / @pcrem);
        height: (332 / @pcrem);
        width: (332 / @pcrem);
      }
    }
  }
}
</style>
