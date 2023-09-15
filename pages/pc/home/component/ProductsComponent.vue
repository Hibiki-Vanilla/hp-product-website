<template>
  <section class="product">
    <div class="productTitle textBold titleSize">PRODUCTS</div>

    <!-- con -->
    <div class="productCon allShadow" @click="handleTo">
      <div class="productConTitle textBold">
        CALIO
        <span class="textLight">HDN002/HDN002C</span>
      </div>
      <div class="productConTip textMedium">CLASSIC DESIGN 2G DISPOSABLE VAPE</div>
      <img class="productConIcon" src="@/static/home/products/icon.png" alt="" />

      <img class="productConImg" src="@/static/home/products/calio.png" alt="calio" />

      <img class="productArrIcon" src="@/static/home/products/arr.png" alt="calio" />
    </div>

    <!-- list -->
    <div class="productRow">
      <div v-for="(item, index) in list" :key="index" class="productItem allShadow">
        <img :src="item" alt="coming soon" />
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
        require("@/static/home/products/1.png"),
        require("@/static/home/products/2.png"),
        require("@/static/home/products/3.png"),
      ],
    };
  },
  methods: {
    handleTo() {
      this.$ctx.push("/product/calio");
    },
  },
};
</script>

<style lang="less" scoped>
.product {
  padding-top: (230 / @pcrem);
  padding-bottom: (250 / @pcrem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  .productTitle {
    color: #000;
    padding-bottom: (200 / @pcrem);
  }

  .productCon {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left: (90 / @pcrem);
    height: (572 / @pcrem);
    width: (1544 / @pcrem);
    border-radius: (12 / @pcrem);

    .productConTitle {
      font-size: (40 / @pcrem);
      color: #000;
      padding-bottom: (40 / @pcrem);
      .textLight {
        font-size: (18 / @pcrem);
      }
    }
    .productConTip {
      color: #000;
      padding-bottom: (100 / @pcrem);
      font-size: (30 / @pcrem);
    }
    .productConIcon {
      opacity: 0;
      height: (74 / @pcrem);
      width: (537 / @pcrem);
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.38, 1);
    }
    .productConImg {
      position: absolute;
      bottom: 0;
      right: (210 / @pcrem);
      height: (762 / @pcrem);
      width: (327 / @pcrem);
    }
    .productArrIcon {
      position: absolute;
      bottom: (32 / @pcrem);
      right: (40 / @pcrem);
      height: (44 / @pcrem);
      width: (44 / @pcrem);
      opacity: 0;
      transition: opacity 0.8s cubic-bezier(0.25, 1, 0.38, 1);
    }

    &:hover {
      .productConIcon {
        opacity: 1;
      }
      .productArrIcon {
        opacity: 1;
      }
    }
  }

  .productRow {
    display: flex;
    justify-content: space-between;
    padding-top: (160 / @pcrem);
    height: (668 / @pcrem);
    width: (1544 / @pcrem);

    .productItem {
      cursor: pointer;
      width: (456 / @pcrem);
      height: 100%;
      border-radius: (12 / @pcrem);
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
