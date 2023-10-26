<template>
  <section class="product">
    <h2 class="productTitle textBold titleSize">PRODUCTS</h2>

    <!-- con -->
    <div class="productCon allShadow" @click="handleTo('/product/calio')">
      <strong class="productConTitle textBold">
        CALIO
        <span class="textLight">HDN002/HDN002C</span>
      </strong>
      <div class="productConTip textMedium"><strong>CLASSIC DESIGN</strong> 2G DISPOSABLE VAPE</div>
      <img class="productConIcon" src="https://files.myuwell.com/powehi/home/products/icon.png" alt="" />

      <img class="productConImg" src="https://files.myuwell.com/powehi/home/products/calio.png" alt="calio" />

      <img class="productArrIcon" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="calio" />
    </div>

    <!-- list -->
    <div class="productRow">
      <div v-for="(item, index) in list" :key="index" class="productItem allShadow" @click="handleTo(item.path)">
        <div class="porduct">
          <img :class="'img-' + index" :src="require(`~/assets/img/${item.img}`)" alt="PRODUCT" />
        </div>
        <strong class="title textBold">{{ item.title }}</strong>
        <strong class="tip textLight">{{ item.tip }}</strong>
        <strong v-for="(text, idx) in item.content" :key="idx" class="content textMedium">{{ text }}</strong>
        <div class="parameter">
          <strong v-for="(par, pid) in item.parameter" :key="pid" class="textLight">
            <img src="~/assets/img/crie.png" alt="crie" />{{ par }}
          </strong>
        </div>
        <img class="arrow" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="calio" />
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'

export default {
  data() {
    return {
      list: [
        {
          img: 'pro-1.png',
          title: 'SOLE',
          tip: 'HDN003/HDNOO3B',
          content: ['REPRESENTATIVE OF', 'ELEGANCE'],
          parameter: ['1-2ML', '3 LEVEL VOLTAGES', 'CERAMIC HEATING CORE'],
          path: '/product/sole',
        },
        {
          img: 'pro-2.png',
          title: 'CUSH',
          tip: 'HDN004/HDNOO4B/HDN008',
          content: ['GRASP PERSONALITY', 'IN PALM'],
          parameter: ['3ML/4ML/5ML', '3 LEVEL VOLTAGES', 'CERAMIC HEATING CORE', 'DUAL AIRFLOW'],
          path: '/product/cush',
        },
        {
          img: 'pro-3.png',
          title: 'BELLO',
          tip: 'HDN005/HDNOO5B/HDN009',
          content: ['INTEGRATION OF', 'ECONOMIC AND', 'ELEGANCE'],
          parameter: ['3ML/4ML/5ML', '3 LEVEL VOLTAGES', 'CERAMIC HEATING CORE', 'DUAL AIRFLOW'],
          path: '/product/bello',
        },
      ],
    }
  },
  methods: {
    handleTo(path) {
      this.$ctx.push(path)
    },
  },
}
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
      padding-left: (70 / @pcrem);
      box-sizing: border-box;
      position: relative;
      .title {
        display: block;
        margin-top: (260 / @pcrem);
        font-size: (40 / @pcrem);
        color: #000;
      }
      .tip {
        display: block;
        font-size: (18 / @pcrem);
        margin-bottom: (30 / @pcrem);
      }
      .content {
        display: block;
        color: #000;
        font-size: (30 / @pcrem);
      }
      .porduct {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          margin-top: -(100 / @pcrem);
        }
        .img-0 {
          width: (322 / @pcrem);
          height: (319 / @pcrem);
        }
        .img-1 {
          width: (300 / @pcrem);
          height: (305 / @pcrem);
        }
        .img-2 {
          width: (485 / @pcrem);
          height: (279 / @pcrem);
        }
      }
      .parameter {
        position: absolute;
        left: (70 / @pcrem);
        bottom: (32 / @pcrem);
        min-height: (134 / @pcrem);
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.25, 1, 0.38, 1);
        strong {
          display: flex;
          align-items: center;
          font-size: (18 / @pcrem);
          margin-bottom: (10 / @pcrem);
          img {
            width: (10 / @pcrem);
            height: (10 / @pcrem);
            margin-right: (10 / @pcrem);
          }
        }
      }
      .arrow {
        position: absolute;
        bottom: (20 / @pcrem);
        right: (20 / @pcrem);
        height: (44 / @pcrem);
        width: (44 / @pcrem);
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.25, 1, 0.38, 1);
      }
    }

    .productItem {
      &:hover {
        .parameter {
          opacity: 1;
        }
        .arrow {
          opacity: 1;
        }
      }
    }
  }
}
</style>
