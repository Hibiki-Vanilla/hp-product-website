<template>
  <section class="brand imageItem" data-aos="zoom">
    <div class="brandTitle textBold">
      ELEVATE YOUR BRAND WITH OUR
      <br />
      <span class="brandLightSpan">EXPERTISE OF CUSTOMIZATION.</span>
    </div>

    <div class="brandTip textLight">
      POWEHI offers a full-service OEM/ODM that provides customers with the complete
      customization solution. We work with customers to understand their needs and then
      develop a custom product that meets those needs.
    </div>
    <!-- toopTip -->
    <div class="brandList">
      <div v-for="(item, index) in list" :key="index" class="brandItem">
        <div class="toolTipLeft">
          <img
            :src="item.icon"
            :style="`height:${item.height}vw; width:${item.width}vw`"
            alt="icon"
          />
          <div class="brandItemText textBold">{{ item.name }}</div>
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
          height: 54 / 7.5,
          width: 54 / 7.5,
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
          height: 53 / 7.5,
          width: 46 / 7.5,
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
          height: 29 / 7.5,
          width: 53 / 7.5,
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
          height: 47 / 7.5,
          width: 48 / 7.5,
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
          height: 49 / 7.5,
          width: 44 / 7.5,
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
          height: 49 / 7.5,
          width: 50 / 7.5,
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
          height: 45 / 7.5,
          width: 40 / 7.5,
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
          height: 43 / 7.5,
          width: 42 / 7.5,
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
  // height: (2080 / @morem);
  width: 100%;
  background-image: url("@/static/solution/brand/moBg.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: (140 / @morem);

  .brandTitle {
    padding-top: (140 / @morem);
    text-align: center;
    color: @white;
    font-size: (35 / @morem);

    .brandLightSpan {
      color: @mainColor;
      border-bottom: 2px solid #fe8a12;
    }
  }

  .brandTip {
    margin: 0 auto;
    width: (550 / @morem);
    padding-top: (50 / @morem);
    padding-bottom: (70 / @morem);
    text-align: center;
    color: @white;
    font-size: (20 / @morem);
  }

  // toopTip

  .brandList {
    width: (550 / @morem);
    // height: (1520 / @morem);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: (10 / @morem);
    background-color: @white;
    .brandItem {
      display: flex;
      width: 100%;

      .toolTipLeft {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 (20 / @morem);
        width: (200 / @morem);
        border-right: 1px solid #bfbfbf;

        .brandItemText {
          padding-top: (24 / @morem);
          font-size: (16 / @morem);
          text-align: center;
        }
      }
      .toolTipRight {
        font-size: (16 / @morem);
        padding: (15 / @morem);
        flex: 1;
      }

      & + .brandItem {
        border-top: 1px solid #bfbfbf;
      }
    }
  }
}
</style>
