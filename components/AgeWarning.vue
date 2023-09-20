<template>
  <div v-if="warningStatus" class="warningBox">
    <div class="warningCon">
      <img class="logo" src="@/static/logoWhite.svg" alt="" />
      <div class="warningTitle textBold">CONFIRM YOUR AGE</div>
      <div class="warningContent">ARE YOU 21+ YEARS OLD?</div>
      <div class="warningBottom">
        <div class="warningButtom textBold yesButtom" @click="onOkClick">YES</div>
        <div class="warningButtom textBold noButtom">NO</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeWarning",
  data() {
    return {
      warningStatus: false,
    };
  },
  mounted() {
    const stauts = this.$ctx.cookies.get("co_s_h");
    if (stauts) {
      this.warningStatus = false;
    } else {
      this.warningStatus = true;
      this.htmlHidden(true);
    }
  },
  methods: {
    onOkClick() {
      const random = Math.random();
      this.$ctx.cookies.set("co_s_h", random);
      this.htmlHidden(false);
      this.warningStatus = false;
    },
    htmlHidden(status) {
      const body = document.body;
      body.style.overflowX = status ? "auto" : "visible";
      body.style.overflow = status ? "hidden" : "unset";
      const htmlStyle = document.getElementsByTagName("html")[0].style;
      htmlStyle.overflow = status ? "hidden" : "unset";
      htmlStyle.overflowX = status ? `overflow:'hidden'` : `overflow-x:'auto'`;
    },
  },
};
</script>

<style scoped lang="less">
.warningBox {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #facc22, #f83600);
  .warningCon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 80px;
    border-radius: 12px;
    border: 1px solid @white;
    text-align: center;
    color: @white;

    .logo {
      height: 72px;
      width: 210px;
    }
  }
  .warningTitle {
    padding-top: 26px;
    font-size: 35px;
    line-height: 1;
  }
  .warningContent {
    padding-top: 10px;
    padding-bottom: 40px;
    font-size: 20px;
  }
  .warningBottom {
    width: 100%;
    display: flex;
    justify-content: center;
    .warningButtom {
      cursor: pointer;
      width: 150px;
      height: 50px;
      line-height: 50px;
      border-radius: 6px;
      font-size: 24px;
    }
    .yesButtom {
      border: 1px solid #fff01d;
      background: #fff01d;
      color: #f15b24;
    }
    .noButtom {
      border: 1px solid @white;
      margin-left: 80px;
      color: @white;
    }
  }
}
@media (max-width: 1000px) {
  .warningBox {
    .warningCon {
      width: (650 / @morem);
      box-sizing: border-box;
      padding: (40 / @morem) (80 / @morem);
      border-radius: (6 / @morem);
      .logo {
        height: (72 / @morem);
        width: (210 / @morem);
      }
    }
    .warningTitle {
      padding-top: (26 / @morem);
      font-size: (40 / @morem);
    }
    .warningContent {
      padding-top: (20 / @morem);
      padding-bottom: (40 / @morem);
      font-size: (24 / @morem);
    }
    .warningBottom {
      .warningButtom {
        width: (160 / @morem);
        height: (60 / @morem);
        line-height: (60 / @morem);
        border-radius: (6 / @morem);
        font-size: (28 / @morem);
      }
      .noButtom {
        margin-left: (80 / @morem);
      }
    }
  }
}
</style>
