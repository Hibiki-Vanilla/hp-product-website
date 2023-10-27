<template>
  <section class="banner imageItem">
    <div class="bannerTitle">
      <div class="bannerTitleBox textBold">
        <div class="bannerRow" data-aos="fade-up">
          <span
            v-for="(item, index) in textList"
            :key="index"
            class="bannerTitleSpan"
            :class="[{ bannerTitleSpanSpace: item === ' ' }]"
            :style="`animation-delay: calc(.02s*${index} + .1s);`"
            >{{ item }}</span
          >
        </div>
        <div class="bannerRow" data-aos="fade-up">
          <span
            v-for="(item, index) in bottomTextList"
            :key="index"
            class="bannerTitleSpan"
            :class="[{ bannerTitleSpanSpace: item === ' ' }]"
            :style="`animation-delay: calc(.02s*${index} + .1s)`"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <div class="bannerTip textLight textSize">
      Leverage from our strong in-house team and partner supporting, we're proud to offer
      a one-stop solution for all your cannabis vaping needs, from product design and
      packaging to branding and compliance.
    </div>
    <div class="bannerButtom textLight" role="button" @click="handleTo">
      FIND YOUR SOLUTION
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textList: "A TRUSTED PARTNER IN ",
      bottomTextList: "THE CANNABIS COMMUNITY.",
    };
  },
  methods: {
    handleTo() {
      this.$ctx.push("/solution");
    },
  },
};
</script>

<style lang="less" scoped>
    .titleSize {
        font-size: (55 /@morem);
    }
    
    .textSize {
        font-size: (24/@morem);
    }
.banner {
  height: (836 / @morem);
  width: 100%;
  background-image: url("https://files.myuwell.com/powehi/home/moBanner.png");
  display: flex;
  flex-direction: column;
  align-items: center;

  .bannerTitle {
    display: flex;
    padding-top: (190 / @morem);
    padding-bottom: (100 / @morem);
    flex-direction: column;
    align-items: center;

    .bannerTitleBox {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .bannerRow {
        display: flex;
        justify-content: center;
        width: 100%;
        background: linear-gradient(to right, #facc22, #f83600, #facc22);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        & + .bannerRow {
          width: 56vw;
          flex-wrap: wrap;
        }
      }
      .bannerTitleSpan {
        font-size: (50 / @morem);
        animation: animate-mv-title-coloring 0.8s cubic-bezier(0.16, 0.5, 0.43, 1)
          forwards;
      }

      .bannerTitleSpanSpace {
        margin-left: 0.3em;
      }

      @keyframes animate-mv-title-coloring {
        0% {
          color: transparent;
        }

        25% {
          color: #facc22;
        }

        50% {
          color: #f83600;
        }

        75% {
          color: #facc22;
        }

        100% {
          color: transparent;
        }
      }
    }
  }

  .bannerTip {
    text-align: center;
    color: #000000;
    width: (650 / @morem);
    padding-bottom: (100 / @morem);
  }

  .bannerButtom {
    cursor: pointer;
    height: (60 / @morem);
    padding: 0 (18 / @morem);
    line-height: (60 / @morem);
    border-radius: (30 / @morem);
    font-size: (18 / @morem);
    text-align: center;
    color: @white;
    background-color: @mainColor;
  }
}
</style>
