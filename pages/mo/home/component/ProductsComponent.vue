<template>
  <section class="product">
    <div class="productTitle textBold">PRODUCTS</div>

    <!-- con -->
    <div class="productCon allShadow" @click="handleTo">
      <div class="productConTitle textBold">
        CALIO
        <span class="textLight">HDN002/HDN002C</span>
      </div>
      <div class="productConTip textMedium">CLASSIC DESIGN 2G DISPOSABLE VAPE</div>
      <img class="productConIcon" src="@/static/home/products/moIcon.png" alt="" />

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
  padding-top: (100 / @morem);
  padding-bottom: (120 / @morem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  .productTitle {
    color: #000;
    font-size: (55 / @morem);
    padding-bottom: (90 / @morem);
  }

  .productCon {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding-left: (30 / @morem);
    height: (256 / @morem);
    width: (612 / @morem);
    border-radius: (12 / @morem);

    .productConTitle {
      font-size: (36 / @morem);
      color: #000;
      padding-bottom: (16 / @morem);
      .textLight {
        font-size: (24 / @morem);
      }
    }
    .productConTip {
      color: #000;
      padding-bottom: (30 / @morem);
      font-size: (18 / @morem);
    }
    .productConIcon {
      height: (65 / @morem);
      width: (282 / @morem);
    }
    .productConImg {
      position: absolute;
      bottom: 0;
      right: (80 / @morem);
      height: (304 / @morem);
      width: (130 / @morem);
    }
    .productArrIcon {
      position: absolute;
      bottom: (12 / @morem);
      right: (16 / @morem);
      height: (28 / @morem);
      width: (28 / @morem);
    }
  }

  .productRow {
    display: flex;
    justify-content: space-between;
    padding-top: (60 / @morem);
    height: (266 / @morem);
    width: (612 / @morem);

    .productItem {
      cursor: pointer;
      width: (180 / @morem);
      height: 100%;
      border-radius: (12 / @morem);
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
