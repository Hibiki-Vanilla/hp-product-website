<template>
  <section class="quote">
    <div class="quoteTitle textBold">Scale your business with us today!</div>

    <div class="quoteButton textLight" role="button" @click="onHomeForm">Get A Quote</div>
  </section>
</template>

<script>
import '../index.less'
export default {
  methods: {
    onHomeForm() {
      this.$ctx.push('/contact')
    },
  },
}
</script>

<style lang="less" scoped>
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: @white;
  width: 100%;
  box-sizing: border-box;
  padding-top: (120 / @morem);
  height: (340 / @morem);
  background-size: (701 / @morem) (243 / @morem);
  background-position: center (210 / @morem);
  background-repeat: no-repeat;
  background-image: url('https://files.myuwell.com/powehi/solution/quote/bg.png');

  .quoteTitle {
    font-size: (35 / @morem);
    margin-bottom: (60 / @morem);
    background: linear-gradient(to right, #facc22, #f83600, #facc22);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .quoteButton {
    cursor: pointer;
    font-size: (20 / @morem);
    height: (50 / @morem);
    width: (200 / @morem);
    border-radius: (25 / @morem);
    color: @white;
    text-align: center;
    line-height: (50 / @morem);
    background-color: @mainColor;
  }
}
</style>
