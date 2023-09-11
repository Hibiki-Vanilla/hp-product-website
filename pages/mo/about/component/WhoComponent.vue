<template>
  <section class="who" data-aos="fade-up">
    <div class="whoCon">
      <div class="whoLeft imageItem">
        <img class="whoLeftLogo" src="@/static/about/who/logo.png" alt="logo" />
      </div>

      <div class="whoRight allShadow">
        <div class="whoRightTitle textBold titleSize">WHO <span>ARE WE</span></div>
        <div class="whoRightTip textLight">INNOVATION IS OUR MOTTO, NOT LIMITATION.</div>
        <div class="whoRightText textLight">
          Powehi is a leading cannabis electronic vaporizer solution provider that is
          revolutionizing the vaping landscape. We offer a wide range of cutting-edge
          products that are designed to provide our customers with the best possible
          experience. Our products are made with the highest quality materials and are
          built to last.
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
.who {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: (90 / @morem) 0;
  .whoCon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: (550 / @morem);
    height: (680 / @morem);

    .whoLeft {
      height: (240 / @morem);
      width: (550 / @morem);
      border-radius: (14 / @morem);
      background-image: url("@/static/about/who/moBg.png");
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-size 0.5s ease-in-out;
      .whoLeftLogo {
        height: (114 / @morem);
        width: (328 / @morem);
        transition: transform 0.5s ease-in-out;
      }

      &:hover {
        background-size: 110% 110%;

        .whoLeftLogo {
          transform: scale(0.95);
        }
      }
    }

    .whoRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: (400 / @morem);
      width: (550 / @morem);
      border-radius: (14 / @morem);
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 (44 / @morem);

      .whoRightTitle {
        color: #000;
        span {
          color: @mainColor;
          border-bottom: 3px solid @mainColor;
        }
      }
      .whoRightTip {
        padding: (30 / @morem) 0 (40 / @morem);
        font-size: (24 / @morem);
        color: #000;
      }
      .whoRightText {
        font-size: (16 / @morem);
        color: #707070;
      }
    }
  }
}
</style>
