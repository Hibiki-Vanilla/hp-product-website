<template>
  <section class="subscribe">
    <div class="title titleSize textBold">SUBSCRIBE</div>
    <div class="tip textSize textRegular">Stay updated, sign up for our newsletter.</div>
    <div class="buttonRow">
      <div class="iconBox">
        <img src="@/static/home/subscribe/m.png" alt="" />
      </div>
      <input
        v-model="emailValue"
        class="emaillInput"
        type="text"
        placeholder="Your Email Address"
      />
      <div class="emailbutton" role="button" @click="onSubmit">Subscribe</div>
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
      <div class="bottomRowBlock textRegular"></div>
      By Subscribing, You Are Agreeing To Our Privacy Policy.
    </div>
  </section>
</template>

<script>
import "../index.less";
export default {
  data() {
    return {
      subscribeGooleGRecaptcha: "",
      loading: false,
      textStatus: null,
      returnText: "",
      emailValue: "",
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
      if (this.loading) {
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
  },
};
</script>

<style lang="less" scoped>
.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  background-size: (1400 / @pcrem) / (484 / @pcrem);
  background-image: url("@/static/home/subscribe/bg.png");
  background-repeat: no-repeat;
  background-position: center (180 / @pcrem);
  height: (490 / @pcrem);
  width: 100%;

  .title {
    color: #000;
    padding-bottom: (50 / @pcrem);
  }
  .tip {
    color: #000;
    padding-bottom: (70 / @pcrem);
  }

  .buttonRow {
    display: flex;
    justify-content: space-between;
    width: (654 / @pcrem);
    height: (50 / @pcrem);
    border-radius: (25 / @pcrem);
    overflow: hidden;
    border: 1px solid #fe8a12;
    background-color: @white;
    .iconBox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: (66 / @pcrem);
      img {
        height: (24 / @pcrem);
        width: (24 / @pcrem);
      }
    }

    .emaillInput {
      flex: 1;
      font-family: "Montserrat Regular";
      font-size: (18 / @pcrem);
    }

    .emailbutton {
      cursor: pointer;
      height: 100%;
      width: (140 / @pcrem);
      line-height: (50 / @pcrem);
      text-align: center;
      color: @white;
      background-color: #fe8a12;
    }
  }
  .returnTextRow {
    width: (654 / @pcrem);
    height: (60 / @pcrem);
    padding: (10 / @pcrem) 0 0 (65 / @pcrem);
    box-sizing: border-box;
    font-size: (16 / @pcrem);
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
    font-size: (18 / @pcrem);
    .bottomRowBlock {
      margin-right: (10 / @pcrem);
      height: (15 / @pcrem);
      width: (15 / @pcrem);
      background-color: #a0a0a0;
    }
  }
}
</style>
