<template>
  <section class="who" data-aos="fade-up">
    <div class="whoCon">
      <div class="whoLeft imageItem">
        <img class="whoLeftLogo" src="https://files.myuwell.com/powehi/about/who/logo.png" alt="logo" />
      </div>

      <div class="whoRight allShadow">
        <h2 class="whoRightTitle textBold titleSize">WHO <span>ARE WE</span></h2>
        <div class="whoRightTip textLight">INNOVATION IS OUR MOTTO, NOT LIMITATION.</div>
        <div class="whoRightText textLight">
          POWEHI is a leading cannabis electronic vaporizer solution provider that is
          revolutionizing the vaping landscape. We offer a wide range of cutting-edge
          products that are designed to provide our customers with the best possible
          experience. Our products are made with the highest quality materials and built
          to last.
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
  padding: (150 / @pcrem) 0;
  .whoCon {
    display: flex;
    justify-content: space-between;
    width: (1400 / @pcrem);
    height: (670 / @pcrem);

    .whoLeft {
      height: (670 / @pcrem);
      width: (670 / @pcrem);
      border-radius: (14 / @pcrem);
      background-image: url("https://files.myuwell.com/powehi/about/who/bg.png");
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-size 0.5s ease-in-out;
      .whoLeftLogo {
        height: (157 / @pcrem);
        width: (452 / @pcrem);
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
      height: (670 / @pcrem);
      width: (670 / @pcrem);
      border-radius: (14 / @pcrem);
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 (100 / @pcrem);

      .whoRightTitle {
        color: #000;
        span {
          color: @mainColor;
          border-bottom: 3px solid @mainColor;
        }
      }
      .whoRightTip {
        padding: (30 / @pcrem) 0 (50 / @pcrem);
        font-size: (24 / @pcrem);
        color: #000;
      }
      .whoRightText {
        font-size: (18 / @pcrem);
        color: #707070;
      }
    }
  }
}
</style>
