<template>
  <section class="change">
    <div class="changeBg">
      <img
        v-for="(item, index) in list"
        :key="index"
        :src="item"
        class="changeBgItem"
        :class="[{ changeBgItemAct: index === nowIndex }]"
      />
    </div>
    <div class="changeCon">
      <h2 class="changeTitle textBold titleSize">EMPOWER THE HIGH.</h2>
      <div class="changeText textRegular textSize">
        Step into the extraordinary world of POWEHI, where cutting-edge technology,
        exceptional quality, and unparalleled cannabis experiences converge. We aim to be
        a leading cannabis electronic vaporizer solution provider that revolutionizes the
        vaping landscape. Brace our partner for an exquisite fusion of safety, innovation,
        and reliability as we present our state-of-the-art all-in-one solutions.
      </div>
    </div>
  </section>
</template>

<script>
import "../index.less";

export default {
  data() {
    return {
      nowIndex: 0,
      timer: null,
      list: [
        "https://files.myuwell.com/powehi/home/change/1.png",
        "https://files.myuwell.com/powehi/home/change/2.png",
        "https://files.myuwell.com/powehi/home/change/3.png",
        "https://files.myuwell.com/powehi/home/change/4.png",
      ],
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.nowIndex = this.nowIndex === 3 ? 0 : this.nowIndex + 1;
    }, 2800);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.change {
  position: relative;
  height: (680 / @pcrem);
  width: 100%;

  .changeBg {
    position: relative;
    height: 100%;
    width: 100%;

    .changeBgItem {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transition: opacity 0.8s linear;
    }
    .changeBgItemAct {
      opacity: 1;
      z-index: 1;
    }
  }

  .changeCon {
    position: absolute;
    height: 100%;
    top: 0;
    left: (260 / @pcrem);
    width: (700 / @pcrem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: @white;
    z-index: 2;

    .changeTitle {
      padding-bottom: (40 / @pcrem);
    }
    .changeText {
      width: (500 / @pcrem);
    }
  }
}
</style>
