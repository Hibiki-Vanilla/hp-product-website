<template>
  <section class="product">
    <h2 class="productTitle textBold">PRODUCTS</h2>

    <!-- con -->
    <div class="productCon allShadow" @click="handleTo('/product/calio')">
      <strong class="productConTitle textBold">
        CALIO
        <span class="textLight">HDN002/HDN002C</span>
      </strong>
      <div class="productConTip textMedium"><strong>CLASSIC DESIGN</strong> 2G DISPOSABLE VAPE</div>
      <img class="productConIcon" src="@/static/home/products/moIcon.png" alt="calio" />

      <img class="productConImg" src="https://files.myuwell.com/powehi/home/products/calio.png" alt="calio" />

      <img class="productArrIcon" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="calio" />
    </div>

    <div class="productCon allShadow two" @click="handleTo('/product/sole')">
      <strong class="productConTitle textBold">
        SOLE
        <span class="textLight">HDN003/HDNOO3B</span>
      </strong>
      <div class="productConTip textMedium"><strong>REPRESENTATIVE OF ELEGANCE</strong></div>
      <img class="productConIcon" src="https://files.myuwell.com/powehi/products/mo/sole.png" alt="sole" />

      <img class="productConImg" src="https://files.myuwell.com/powehi/home/pro-1.png" alt="sole" />

      <img class="productArrIcon" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="sole" />
    </div>

    <div class="productCon allShadow three" @click="handleTo('/product/cush')">
      <strong class="productConTitle textBold">
        CUSH
        <span class="textLight">HDN004/HDNOO4B/</span>
        <span class="textLight">HDN008</span>
      </strong>
      <div class="productConTip textMedium"><strong>GRASP PERSONALITY IN PALM</strong></div>
      <img class="productConIcon" src="https://files.myuwell.com/powehi/products/mo/cush.png" alt="cush" />

      <img class="productConImg" src="https://files.myuwell.com/powehi/home/pro-2.png" alt="cush" />

      <img class="productArrIcon" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="cush" />
    </div>

    <div class="productCon allShadow four" @click="handleTo('/product/bello')">
      <strong class="productConTitle textBold">
        BELLO
        <span class="textLight">HDN005/HDNOO5B/</span>
        <span class="textLight">HDN009</span>
      </strong>
      <div class="productConTip textMedium"><strong>THE EMBODIMENT OF MINIMALIST</strong></div>
      <img class="productConIcon" src="https://files.myuwell.com/powehi/products/mo/bello.png" alt="bello" />

      <img class="productConImg" src="https://files.myuwell.com/powehi/home/pro-3.png" alt="bello" />

      <img class="productArrIcon" src="https://files.myuwell.com/powehi/home/products/arr.png" alt="bello" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // list: [
      //   'https://files.myuwell.com/powehi/home/products/1.png',
      //   'https://files.myuwell.com/powehi/home/products/2.png',
      //   'https://files.myuwell.com/powehi/home/products/3.png',
      // ],
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
.titleSize {
  font-size: (55 / @morem);
}

.textSize {
  font-size: (24 / @morem);
}

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
    min-height: (256 / @morem);
    width: (612 / @morem);
    border-radius: (12 / @morem);
    margin-bottom: (100 / @morem);
    padding: (36 / @morem) 0 (36 / @morem) (30 / @morem);

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
      height: (79 / @morem);
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
  .productCon:last-child {
    margin-bottom: 0;
  }

  .two {
    .productConImg {
      position: absolute;
      bottom: (80 / @morem);
      right: (0 / @morem);
      height: (256 / @morem);
      width: (259 / @morem);
    }
    .productConIcon {
      width: (340 / @morem);
    }
  }
  .three {
    .productConTitle {
      span {
        display: block;
      }
    }
    .productConImg {
      position: absolute;
      bottom: (154 / @morem);
      right: (30 / @morem);
      height: (232 / @morem);
      width: (228 / @morem);
    }
    .productConIcon {
      width: (480 / @morem);
    }
  }

  .four {
    .productConTitle {
      span {
        display: block;
      }
    }
    .productConImg {
      position: absolute;
      bottom: (164 / @morem);
      right: -(20 / @morem);
      height: (221 / @morem);
      width: (302 / @morem);
    }
    .productConIcon {
      width: (480 / @morem);
    }
  }
}
</style>
