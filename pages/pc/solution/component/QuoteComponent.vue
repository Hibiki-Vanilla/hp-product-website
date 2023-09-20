<template>
  <section class="quote">
    <div class="quoteTitle textBold">Scale your business with us today!</div>

    <div class="quoteButton textLight" role="button" @click="onHomeForm">Get A Quote</div>
  </section>
</template>

<script>
import "../index.less";
export default {
  methods: {
    onHomeForm() {
      this.$ctx.push("/");
      setTimeout(() => {
        document
          .getElementById("requesForm")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: @white;
  width: 100%;
  box-sizing: border-box;
  padding-top: (140 / @pcrem);
  height: (470 / @pcrem);
  background-size: (1403 / @pcrem) (486 / @pcrem);
  background-position: center (210 / @pcrem);
  background-repeat: no-repeat;
  background-image: url("https://files.myuwell.com/powehi/solution/quote/bg.png");

  .quoteTitle {
    font-size: (50 / @pcrem);
    margin-bottom: (50 / @pcrem);
    background: linear-gradient(to right, #facc22, #f83600, #facc22);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .quoteButton {
    cursor: pointer;
    font-size: (18 / @pcrem);
    height: (68 / @pcrem);
    width: (260 / @pcrem);
    border-radius: (34 / @pcrem);
    color: @white;
    text-align: center;
    line-height: (68 / @pcrem);
    background-color: @mainColor;
    transition: all 0.3s ease-in-out;
    &:hover {
      height: (66 / @pcrem);
      width: (250 / @pcrem);
      line-height: (66 / @pcrem);
    }
  }
}
</style>
