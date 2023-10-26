<template>
  <div class="products">
    <div class="head-title fmb">PRODUCT</div>
    <div class="product-boxs">
      <div v-for="item in list" :key="item.name" class="box">
        <strong class="name fmb">{{ item.name }}</strong>
        <strong class="paramter fml">{{ item.paramter }}</strong>
        <div class="tips fmr">
          <strong v-for="(tip, index) in item.tipList" :key="index">{{ tip }}</strong>
        </div>
        <div class="more fmr" @click="handleView(item.path)">view more</div>
        <img class="pro-img" :src="require(`~/assets/img/${item.img}`)" :alt="item.name" />
      </div>
    </div>
    <div class="finish"><img src="~/assets/img/finish.png" alt="finish" /></div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  components: {},
  data() {
    return {
      list: [
        {
          name: 'CALIO',
          paramter: '1ML/2ML',
          tipList: ['PRE-HEATING / CERAMIC CORE / 3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/calio',
          img: 'd1.png',
        },
        {
          name: 'SOLE',
          paramter: '1ML/2ML',
          tipList: ['PRE-HEATING / CERAMIC CORE / 3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/sole',
          img: 'd2.png',
        },
        {
          name: 'CUSH',
          paramter: '3ML/4ML/5ML',
          tipList: ['PRE-HEATING/CERAMIC CORE/DUAL AIR-FLOW/', '3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/cush',
          img: 'd3.png',
        },
        {
          name: 'BELLO',
          paramter: '3ML/4ML/5ML',
          tipList: ['PRE-HEATING/CERAMIC CORE/DUAL AIR-FLOW/', '3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/bello',
          img: 'd4.png',
        },
      ],
    }
  },
  head() {
    return {
      title: 'POWEHI PRODUCTS-Diverse CBD Products for Any Preference and Budget',
      meta: [
        {
          name: 'keywords',
          content: 'CBD, THC, POWEHI, diverse products, preference, budget, D8 oil, D9 oil',
        },
        {
          name: 'description',
          content:
            "Discover the perfect CBD product to fit your preference and budget with POWEHI's diverse selection. Our products are compatible with D8/D9 oil and feature designs to meet a variety of needs.",
        },

        {
          property: 'og:type',
          content: 'product',
        },
        {
          property: 'og:title',
          content: 'POWEHI PRODUCTS-Diverse CBD Products for Any Preference and Budget',
        },
        {
          property: 'og:description',
          content:
            "Discover the perfect CBD product to fit your preference and budget with POWEHI's diverse selection. Our products are compatible with D8/D9 oil and feature designs to meet a variety of needs.",
        },
      ],
    }
  },
  methods: {
    handleView(path) {
      this.$ctx.push(path)
    },
  },
}
</script>

<style lang="less" scoped>
.products {
  padding: 0 150px;
  .head-title {
    width: 100%;
    padding: (120 / @pcrem) 0;
    text-align: center;
    .fontSize(50);
  }
  .product-boxs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box {
      width: calc(50% - 1.302vw);
      height: (1000 / @pcrem);
      background: url('~/assets/img/rectbg.png');
      background-size: cover;
      margin-bottom: (50 / @pcrem);
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        .fontSize(40);
        margin-top: (124 / @pcrem);
      }
      .paramter {
        color: #6b6b6b;
        .fontSize(24);
        margin: (24 / @pcrem) 0 (48 / @pcrem) 0;
      }
      .tips {
        .fontSize(20);
        text-align: center;
        margin-bottom: (100 / @pcrem);
        strong {
          display: block;
        }
      }
      .more {
        width: (176 / @pcrem);
        height: (52 / @pcrem);
        display: flex;
        justify-content: center;
        align-items: center;
        .fontSize(18);
        color: #fff;
        background: #fe8a12;
        border-radius: (26 / @pcrem);
        cursor: pointer;
      }
    }
    .box:nth-child(1) {
      .pro-img {
        width: (435 / @pcrem);
        height: (476 / @pcrem);
        margin-top: (24 / @pcrem);
      }
    }
    .box:nth-child(2) {
      .pro-img {
        width: (326 / @pcrem);
        height: (429 / @pcrem);
        margin-top: (48 / @pcrem);
      }
    }
    .box:nth-child(3) {
      .pro-img {
        width: (379 / @pcrem);
        height: (386 / @pcrem);
        margin-top: (96 / @pcrem);
      }
    }
    .box:nth-child(4) {
      .pro-img {
        width: (625 / @pcrem);
        height: (360 / @pcrem);
        margin-top: (102 / @pcrem);
      }
    }
  }
  .finish {
    display: flex;
    justify-content: center;
    margin: (75 / @pcrem) 0 (240 / @pcrem) 0;
    img {
      width: (850 / @pcrem);
    }
  }
}
</style>
