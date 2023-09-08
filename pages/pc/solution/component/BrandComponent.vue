<template>
  <section class="brand imageItem" data-aos="zoom">
    <div class="brandTitle textBold">
      ELEVATE YOUR BRAND
      <br />
      WITH OUR <span class="brandLightSpan">EXPERTISE OF CUSTOMIZATION.</span>
    </div>

    <div class="brandTip textLight">
      POWEHI offers a full-service OEM/ODM that provides customers with the complete
      customization solution.
      <br />
      We work with customers to understand their needs and then develop a custom product
      that meets those needs.
    </div>
    <!-- toopTip -->
    <div class="brandList">
      <el-tooltip
        v-for="(item, index) in list"
        :key="index"
        placement="bottom"
        effect="light"
        popper-class="solutionToolTipSytle"
      >
        <div slot="content">
          <div class="toolTipCon">
            <div class="toolTipLeft">
              <img
                :src="item.icon"
                :style="`height:${item.height}; width:${item.width}`"
                alt="icon"
              />
            </div>

            <div class="toolTipRight">
              <div
                v-for="(child, childIndex) in item.list"
                :key="childIndex"
                :class="child.font"
              >
                {{ child.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="brandItem">
          <div class="brandItemText textRegular">{{ item.name }}</div>
        </div>
      </el-tooltip>
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
          name: "REQUIREMENT EVALUATION",
          icon: require("@/static/solution/brand/icon/1.png"),
          height: "2.81vw",
          width: "2.76vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "1-2 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Collect requirements from you.
Discuss requirements to ensure understanding.
Conduct a feasibility study to determine manufacturability.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that we understand your needs.
Ensures that your product is realistic to manufacture.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "ENGINEERING",
          icon: require("@/static/solution/icon/2.png"),
          height: "2.76vw",
          width: "2.39vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "2-4 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Design product based on requirements and feasibility study.
Create prototypes for you to review and approve.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that your product is designed to meet your needs.
Ensures that your product is manufacturable.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "ID & MD COMPLETION & APPROVAL",
          icon: require("@/static/solution/brand/icon/3.png"),
          height: "1.51vw",
          width: "2.76vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "1-2 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `The complete industrial design of the product.
Complete mechanical design of the product.
Present designs to you for review and approval.
`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures the product has a sleek and attractive design.
Ensures the product is structurally sound.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "PROJECT KICKOFF",
          icon: require("@/static/solution/brand/icon/4.png"),
          height: "2.5vw",
          width: "2.5vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "1-2 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Go over project schedule, budget, and deliverables.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that everyone is on the same page.
Ensures the project is on track to be completed on time and within budget.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "PRE-PRODUCTION VERIFICATION",
          icon: require("@/static/solution/brand/icon/5.png"),
          height: "2.55vw",
          width: "2.29vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "1-2 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Conduct EVT, DVT, and PVT tests to ensure product meets requirements and is ready for mass production.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that your product is of the highest quality.
Ensures that your product is ready to be manufactured.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "PROTOTYPING",
          icon: require("@/static/solution/brand/icon/6.png"),
          height: "2.7vw",
          width: "2.7vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "2-3 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Create prototypes of product to ensure it meets requirements and is manufacturable.
Present prototypes to you for review and approval.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that your product is designed to meet your needs.
Ensures that your product is manufacturable.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "MOLDING",
          icon: require("@/static/solution/brand/icon/7.png"),
          height: "2.60vw",
          width: "2.29vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "4 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Create molds for products so that it can be mass-produced.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that your product can be produced in large quantities.`,
              font: "textLight",
            },
          ],
        },
        {
          name: "MASS PRODUCTION",
          icon: require("@/static/solution/brand/icon/8.png"),
          height: "2.55vw",
          width: "2.44vw",
          list: [
            { text: "Timeframe:", font: "textBold" },
            { text: "4-6 weeks", font: "textLight" },
            { text: "What happens: ", font: "textBold" },
            {
              text: `Begin mass production of product.`,
              font: "textLight",
            },
            { text: "Benefits:", font: "textBold" },
            {
              text: `Ensures that your product is available to your customers in a timely manner.`,
              font: "textLight",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.brand {
  height: (1090 / @pcrem);
  width: 100%;
  background-image: url("@/static/solution/brand/bg.png");
  display: flex;
  flex-direction: column;
  align-items: center;

  .brandTitle {
    padding-top: (230 / @pcrem);
    text-align: center;
    color: @white;
    font-size: (50 / @pcrem);

    .brandLightSpan {
      color: @mainColor;
      border-bottom: 2px solid #fe8a12;
    }
  }

  .brandTip {
    padding-top: (40 / @pcrem);
    padding-bottom: (120 / @pcrem);
    text-align: center;
    color: @white;
    font-size: (24 / @pcrem);
  }

  // toopTip

  .brandList {
    width: (1300 / @pcrem);
    height: (200 / @pcrem);
    display: flex;
    flex-wrap: wrap;

    .brandItem {
      position: relative;
      box-sizing: border-box;
      height: 50%;
      width: 25%;
      font-size: (14 / @pcrem);
      display: flex;
      align-items: center;
      justify-content: center;

      .brandItemText {
        z-index: 1;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
      }

      &::before {
        border-left: #e5e5e5 solid 1px;
        border-top: #e5e5e5 solid 1px;
        transition-property: background-color, top, right, bottom, left, border-color,
          border-radius, box-shadow, -webkit-box-shadow;
        will-change: background-color, top, right, bottom, left, border-color,
          border-radius, box-shadow;
        content: "";
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
      }
      &:hover {
        .brandItemText {
          color: @white;
        }
        &::before {
          z-index: 1;
          top: -0.5rem;
          right: -0.5rem;
          bottom: -0.5rem;
          left: -0.5rem;
          border-color: #fff;
          border-radius: (14 / @pcrem);
          -webkit-box-shadow: 0 0 4rem rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 4rem rgba(0, 0, 0, 0.1);
          background-color: @mainColor;
        }
      }
    }
    .brandItem:nth-child(-n + 4) {
      &::before {
        border-top: none;
      }
    }

    .brandItem:nth-child(4n + 1) {
      &::before {
        border-left: none;
      }
    }

    .brandItem:first-child {
      &::before {
        border-top-left-radius: (14 / @pcrem);
      }
    }
    .brandItem:nth-child(4) {
      &::before {
        border-top-right-radius: (14 / @pcrem);
      }
    }
    .brandItem:nth-child(5) {
      &::before {
        border-bottom-left-radius: (14 / @pcrem);
      }
    }
    .brandItem:nth-child(8) {
      &::before {
        border-bottom-right-radius: (14 / @pcrem);
      }
    }
  }
}

// tooltip style
</style>
