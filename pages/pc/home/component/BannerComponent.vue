<template>
  <section class="banner imageItem">
  <h1>
    POWEHI cannabis vape. Atrusted partner in the cannabis community
  </h1>
    <div class="bannerTitle">
      <div class="bannerTitleBox titleSize textBold">
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
      a one-stop
      <br />
      solution for all your cannabis vaping needs, from product design and packaging to
      branding and
      <br />
      compliance.
    </div>
    <div class="bannerButtom textLight" role="button" @click="handleTo">
      FIND YOUR SOLUTION
    </div>
  </section>
</template>

<script>
import "../index.less";
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
h1{
  height: 0;
  overflow: hidden;
}
.banner {
  height: (940 / @pcrem);
  width: 100%;
  background-image: url("https://files.myuwell.com/powehi/home/banner.png");
  display: flex;
  flex-direction: column;
  align-items: center;

  .bannerTitle {
    display: flex;
    padding-top: (390 / @pcrem);
    padding-bottom: (100 / @pcrem);
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
      }
      .bannerTitleSpan {
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
    padding-bottom: (110 / @pcrem);
  }

  .bannerButtom {
    cursor: pointer;
    height: (68 / @pcrem);
    width: (260 / @pcrem);
    line-height: (68 / @pcrem);
    border-radius: (34 / @pcrem);
    font-size: (18 / @pcrem);
    text-align: center;
    color: @white;
    background-color: @mainColor;
  }
}
</style>
