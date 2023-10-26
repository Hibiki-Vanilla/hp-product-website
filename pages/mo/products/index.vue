<template>
  <div class="products">
    <div class="head-title textBold">PRODUCT</div>
    <div class="product-boxs">
      <div v-for="item in list" :key="item.name" class="box">
        <strong class="name textBold">{{ item.name }}</strong>
        <strong class="paramter textLight">{{ item.paramter }}</strong>
        <div class="tips textRegular">
          <strong v-for="(tip, index) in item.tipList" :key="index">{{ tip }}</strong>
        </div>
        <div class="more textRegular" @click="handleView(item.path)">view more</div>
        <img class="pro-img" :src="require(`~/assets/img/${item.img}`)" :alt="item.name" />
      </div>
    </div>
    <div class="finish"><img src="~/assets/img/mo/finish.png" alt="finish" /></div>
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
          tipList: ['PRE-HEATING / CERAMIC CORE /', '3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/calio',
          img: 'd1.png',
        },
        {
          name: 'SOLE',
          paramter: '1ML/2ML',
          tipList: ['PRE-HEATING / CERAMIC CORE /', '3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/sole',
          img: 'd2.png',
        },
        {
          name: 'CUSH',
          paramter: '3ML/4ML/5ML',
          tipList: ['PRE-HEATING/CERAMIC CORE/', '3 LEVEL VOLTAGES ADJUSTMENT'],
          path: '/product/cush',
          img: 'd3.png',
        },
        {
          name: 'BELLO',
          paramter: '3ML/4ML/5ML',
          tipList: ['PRE-HEATING/CERAMIC CORE/', '3 LEVEL VOLTAGES ADJUSTMENT'],
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
  padding: 0 (58 / @morem);
  .head-title {
    width: 100%;
    padding: (100 / @morem) 0 (58 / @morem) 0;
    text-align: center;
    .mfontSize(55);
  }
  .product-boxs {
    width: 100%;
    .box {
      width: 100%;
      height: (800 / @morem);
      background: url('~/assets/img/rectbg.png');
      background-size: cover;
      margin-bottom: (40 / @morem);
      display: flex;
      flex-direction: column;
      align-items: center;
      .name {
        .mfontSize(36);
        margin-top: (70 / @morem);
      }
      .paramter {
        color: #6b6b6b;
        .mfontSize(20);
        margin: (24 / @morem) 0 (40 / @morem) 0;
      }
      .tips {
        .mfontSize(24);
        text-align: center;
        margin-bottom: (40 / @morem);
        strong {
          display: block;
        }
      }
      .more {
        width: (176 / @morem);
        height: (52 / @morem);
        display: flex;
        justify-content: center;
        align-items: center;
        .mfontSize(18);
        color: #fff;
        background: #fe8a12;
        border-radius: (26 / @morem);
        cursor: pointer;
      }
    }
    .box:nth-child(1) {
      .pro-img {
        width: (326 / @morem);
        height: (357 / @morem);
        margin-top: (22 / @morem);
      }
    }
    .box:nth-child(2) {
      .pro-img {
        width: (246 / @morem);
        height: (324 / @morem);
        margin-top: (52 / @morem);
      }
    }
    .box:nth-child(3) {
      .pro-img {
        width: (284 / @morem);
        height: (288 / @morem);
        margin-top: (46 / @morem);
      }
    }
    .box:nth-child(4) {
      .pro-img {
        width: (456 / @morem);
        height: (262 / @morem);
        margin-top: (62 / @morem);
      }
    }
  }
  .finish {
    display: flex;
    justify-content: center;
    margin: (90 / @morem) 0 (190 / @morem) 0;
    img {
      width: 100%;
    }
  }
}
</style>
