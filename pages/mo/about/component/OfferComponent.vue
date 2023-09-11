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
  padding-bottom: (100 / @morem);
  width: 100%;
  background-color: @white;

  .offerCon {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: (550 / @morem);
    margin: 0 auto;
    .offerLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      box-sizing: border-box;
      .offerLeftTitle {
        width: 100%;
        color: #000;
        box-sizing: border-box;
        padding-left: (170 / @morem);
        padding-bottom: (10 / @morem);
        span {
          color: @mainColor;
          border-bottom: 3px solid @mainColor;
        }
      }
      .offerLeftTip {
        width: 100%;
        color: #000;
        box-sizing: border-box;
        padding-left: (170 / @morem);
        padding-bottom: (20 / @morem);
      }
      .offerLeftText {
        font-size: (16 / @morem);
        color: #707070;
      }
    }
    .offerRight {
      position: relative;
      height: (550 / @morem);
      width: 100%;
      background-repeat: no-repeat;
      background-position: (86 / @morem) (217 / @morem);
      background-size: (318 / @morem) (321 / @morem);
      background-image: url("@/static/about/offer/moBg.png");

      .offerRightBox {
        background-color: @white;
        border-radius: (14 / @morem);
        box-sizing: border-box;
        padding-top: (24 / @morem);
        text-align: center;
        font-family: "Montserrat Light";
        line-height: 1.5;
        font-size: (14 / @morem);
        .offerRightTitle {
          font-size: (16 / @morem);
          color: @mainColor;
          padding-bottom: (10 / @morem);
        }
      }
      .offerRightTop {
        position: absolute;
        top: (95 / @morem);
        left: -(40 / @morem);
        height: (230 / @morem);
        width: (230 / @morem);
      }

      .offerRightBottom {
        position: absolute;
        top: (320 / @morem);
        left: (363 / @morem);
        height: (230 / @morem);
        width: (230 / @morem);
      }
    }
  }
}
</style>
