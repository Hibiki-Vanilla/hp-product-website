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
export default {
  data() {
    return {
      nowIndex: 0,
      timer: null,
      list: [
        "https://files.myuwell.com/powehi/home/change/mo1.png",
        "https://files.myuwell.com/powehi/home/change/mo2.png",
        "https://files.myuwell.com/powehi/home/change/mo3.png",
        require("@/static/home/change/mo4.png"),
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
    .titleSize {
        font-size: (55 /@morem);
    }
    
    .textSize {
        font-size: (24/@morem);
    }
.change {
  position: relative;
  overflow: hidden;
  height: (724 / @morem);
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
    left: 0;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: @white;
    z-index: 2;

    .changeTitle {
      padding-top: (30 / @morem);
      padding-bottom: (20 / @morem);
    }
    .changeText {
      width: (580 / @morem);
    }
  }
}
</style>
