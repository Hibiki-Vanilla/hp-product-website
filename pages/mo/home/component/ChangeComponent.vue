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
      <div class="changeTitle textBold titleSize">EMPOWER THE HIGH.</div>
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
        require("@/static/home/change/mo1.png"),
        require("@/static/home/change/mo2.png"),
        require("@/static/home/change/mo3.png"),
      ],
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.nowIndex = this.nowIndex === 2 ? 0 : this.nowIndex + 1;
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
  overflow: hidden;
  height: (400 / @morem);
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
    left: (50 / @morem);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: @white;
    z-index: 2;

    .changeTitle {
      padding-bottom: (40 / @morem);
    }
    .changeText {
      width: (350 / @morem);
    }
  }
}
</style>
