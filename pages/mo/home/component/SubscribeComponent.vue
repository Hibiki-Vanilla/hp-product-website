<template>
  <section class="subscribe">
    <div class="title titleSize textBold">SUBSCRIBE</div>
    <div class="tip textSize textRegular">Stay updated, sign up for our newsletter.</div>
    <div class="buttonRow">
      <div class="iconBox">
        <img src="https://files.myuwell.com/powehi/home/subscribe/m.png" alt="" />
      </div>
      <input
        v-model="emailValue"
        class="emaillInput"
        type="text"
        placeholder="Your Email Address"
      />
      <div
        class="emailbutton"
        :class="[{ emailbuttonLock: !userOk }]"
        role="button"
        @click="onSubmit"
      >
        Subscribe
      </div>
    </div>
    <div
      class="returnTextRow textRegular"
      :class="[
        { returnTextRowRed: textStatus === 'error' },
        { returnTextRowOk: textStatus === 'success' },
      ]"
    >
      {{ returnText }}
    </div>
    <div id="subscribeGooleGRecaptcha"></div>
    <div class="bottomRow">
      <div class="bottomRowBlock textRegular allShadow" @click="userOk = !userOk">
        <i v-show="userOk" class="el-icon-check yesIcon"></i>
      </div>
      By Subscribing, You Are Agreeing To Our &nbsp;
      <span @click="goPrivacy"> Privacy Policy</span> .
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subscribeGooleGRecaptcha: "",
      loading: false,
      textStatus: null,
      returnText: "",
      emailValue: "",
      userOk: true,
    };
  },
  mounted() {
    this.initGrecaptcha();
  },
  methods: {
    initGrecaptcha() {
      setTimeout(() => {
        this.subscribeGooleGRecaptcha = window.grecaptcha.render(
          "subscribeGooleGRecaptcha",
          {
            sitekey: "6LcOHRgoAAAAABQwB0iIDvtlUa1e7QsayMwl9S6n",
            callback: this.onPostValue,
            size: "invisible",
          }
        );
      }, 1000);
    },
    onSubmit() {
      if (this.loading || !this.userOk) {
        return false;
      }
      const emReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (this.emailValue.trim() === "") {
        this.textStatus = "error";
        this.returnText = "This field is required.";
      } else if (emReg.test(this.emailValue.trim())) {
        this.textStatus = null;
        this.returnText = "";
        window.grecaptcha.execute(this.subscribeGooleGRecaptcha);
      } else {
        this.textStatus = "error";
        this.returnText = "Please enter a valid info.";
      }
    },
    onPostValue(token) {
      this.loading = true;
      this.$axios
        .post(
          "/u/hp/front/subscribe",
          {
            email: this.emailValue.trim(),
          },
          {
            headers: { reCAPTCHA: token },
          }
        )
        .then((res) => {
          if (res.success) {
            this.textStatus = "success";
            this.returnText = "Thanks for your subscribing!";
          }
          this.loading = false;
          window.grecaptcha.reset(this.subscribeGooleGRecaptcha);
        });
    },
    goPrivacy() {
      this.$ctx.push("/m/privacy");
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

.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  background-size: (663 / @morem) / (230 / @morem);
  background-image: url("https://files.myuwell.com/powehi/home/subscribe/moBg.png");
  background-repeat: no-repeat;
  background-position: center (284 / @morem);
  height: (410 / @morem);
  width: 100%;

  .title {
    color: #000;
    padding-bottom: (40 / @morem);
  }
  .tip {
    color: #000;
    padding-bottom: (46 / @morem);
  }

  .buttonRow {
    display: flex;
    justify-content: space-between;
    width: (550 / @morem);
    height: (50 / @morem);
    border-radius: (25 / @morem);
    overflow: hidden;
    border: 1px solid #fe8a12;
    background-color: @white;
    .iconBox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: (66 / @morem);
      img {
        height: (24 / @morem);
        width: (24 / @morem);
      }
    }

    .emaillInput {
      flex: 1;
      font-family: "Montserrat Regular";
      font-size: (18 / @morem);
    }

    .emailbutton {
      cursor: pointer;
      height: 100%;
      width: (140 / @morem);
      line-height: (50 / @morem);
      font-size: (24 / @morem);
      text-align: center;
      color: @white;
      background-color: #fe8a12;
    }
    .emailbuttonLock {
      cursor: no-drop;
      background-color: rgba(160, 160, 160, 0.5);
    }
  }
  .returnTextRow {
    width: (654 / @morem);
    height: (60 / @morem);
    padding: (10 / @morem) 0 0 (65 / @morem);
    box-sizing: border-box;
    font-size: (16 / @morem);
  }
  .returnTextRowRed {
    color: #ff0000;
  }
  .returnTextRowOk {
    color: @mainColor;
  }

  .bottomRow {
    display: flex;
    align-items: center;
    color: #a0a0a0;
    font-size: (18 / @morem);
    .bottomRowBlock {
      cursor: pointer;
      margin-right: (10 / @morem);
      height: (20 / @morem);
      width: (20 / @morem);
      border: 2px solid rgba(160, 160, 160, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      .yesIcon {
        color: @mainColor;
      }
    }
    span {
      cursor: pointer;
      border-bottom: 1px solid #a0a0a0;
    }
  }
}
</style>
