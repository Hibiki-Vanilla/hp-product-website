<template>
  <section class="engage" data-aos="fade-up">
    <div class="engageTitle textBold">ENGAGE CUSTOMERS WITH OUR CUSTOM PACKAGING</div>
    <div class="engageText textLight">
      Our team has years of experience in designing custom packaging and displaying for
      cannabis companies. We create eye-catching packaging that is guaranteed to turn
      heads and heighten consumer engagement. We are always on the lookout for
      leading-edge innovations, and our work has been featured by top-tier cannabis and
      CBD brands.
    </div>

    <div class="engageCon">
      <!-- icon -->
      <div class="engageLeft">
        <div class="engageLeftIcon">
          <div class="engageLeftIconTop textLight imageItem">
            CUSTOM SIZE
            <br />
            STYLE
          </div>
          <div class="engageLeftIconBottom textLight imageItem">
            FREE DESIGN
            <br />
            SUPPORT
          </div>
        </div>

        <div class="engageMidIcon">
          <div class="engageMidIconTop imageItem">HIGH QUALITY PRINTING</div>

          <div class="engageMidIconBottom">
            <div class="engageMidIconBottomLeft imageItem">
              RECYCLABLE
              <br />
              MATERIAL
            </div>
            <div class="engageMidIconBottomRight imageItem">
              SPECIAL
              <br />
              FINISHES
            </div>
          </div>
        </div>

        <div class="engageRightIcon imageItem">CO-PACKING SERVICE</div>
      </div>

      <!-- text -->
      <div class="engageRight textBlack">
        RETAIL
        <br />
        COMPLIANT &
        <br />
        RELIABLE
        <br />
        PACKAGING SERVICE
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.engage {
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  width: 100%;
  height: (850 / @pcrem);

  .engageTitle {
    padding-top: (150 / @pcrem);
    padding-bottom: (60 / @pcrem);
    line-height: 1;
    font-size: (50 / @pcrem);
    color: #000;
    text-align: center;
  }
  .engageText {
    margin: 0 auto;
    width: (1400 / @pcrem);
    font-size: (24 / @pcrem);
    text-align: center;
  }

  .engageCon {
    position: relative;
    flex: 1;
    margin: 0 auto;
    width: (1400 / @pcrem);
    padding-top: (70 / @pcrem);

    .engageLeft {
      position: absolute;
      top: (110 / @pcrem);
      left: 0;
      display: flex;
      height: (260 / @pcrem);
      font-size: (14 / @pcrem);
      color: #000;
      text-align: center;
      .engageLeftIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: (150 / @pcrem);
        .engageLeftIconTop {
          height: (120 / @pcrem);
          width: 100%;
          box-sizing: border-box;
          padding-top: (77 / @pcrem);
          background-image: url("@/static/solution/engage/icon/1.png");
        }
        .engageLeftIconBottom {
          height: (120 / @pcrem);
          width: 100%;
          box-sizing: border-box;
          padding-top: (77 / @pcrem);
          background-image: url("@/static/solution/engage/icon/2.png");
        }
      }

      .engageMidIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: (20 / @pcrem);
        height: 100%;
        width: (330 / @pcrem);
        .engageMidIconTop {
          height: (90 / @pcrem);
          width: 100%;
          box-sizing: border-box;
          padding-top: (60 / @pcrem);
          background-image: url("@/static/solution/engage/icon/3.png");
        }

        .engageMidIconBottom {
          display: flex;
          height: (150 / @pcrem);

          .engageMidIconBottomLeft {
            height: 100%;
            width: (150 / @pcrem);
            box-sizing: border-box;
            padding-top: (108 / @pcrem);
            background-image: url("@/static/solution/engage/icon/4.png");
          }
          .engageMidIconBottomRight {
            margin-left: (20 / @pcrem);

            height: 100%;
            width: (98 / @pcrem);
            box-sizing: border-box;
            padding-top: (108 / @pcrem);
            background-image: url("@/static/solution/engage/icon/5.png");
          }
        }
      }
      .engageRightIcon {
        height: (90 / @pcrem);
        width: (220 / @pcrem);
        box-sizing: border-box;
        padding-top: (60 / @pcrem);
        margin-left: (20 / @pcrem);
        background-image: url("@/static/solution/engage/icon/6.png");
      }
    }
    .engageRight {
      position: absolute;
      top: (70 / @pcrem);
      right: 0;
      text-align: right;
      font-size: (65 / @pcrem);
      color: @white;
    }
  }
}
</style>
