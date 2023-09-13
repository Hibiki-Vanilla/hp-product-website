<template>
  <section id="requesForm" class="requesForm">
    <div class="con">
      <div v-if="pageValue === 'about'" class="aboutLeftImage imageItem">
        <div class="aboutLeftText titleSize textBold">
          Scale your business
          <br />
          with us today!
        </div>
        <img class="aboutLeftIconB" src="@/static/form/aboutIconB.png" alt="" />

        <img class="aboutLeftIcon" src="@/static/form/aboutIcon.png" alt="" />
      </div>
      <div v-if="pageValue === 'home'" class="homeLeftImage imageItem">
        <div class="homeLeftCon">
          <div class="homeLeftTitle textBold titleSize">GET IN TOUCH</div>
          <div class="homeLeftText textRegular textSize">
            Need more information? Get in touch and receive a complementary product
            consultation,
            <br />
            Scale your business with us today!
            <br />
            We’d love to connect with you!
          </div>
          <div class="homeLeftIconBox">
            <img class="addressIcon" src="@/static/form/address.png" alt="" />
            <div class="iconTextCon">
              <div class="topTitle textBold textSize">Find us at the office</div>
              <div class="topText textRegular">
                12345 Clark St a, Los Angles,
                <br />
                CA 91006, USA
              </div>
            </div>
          </div>

          <div class="homeLeftIconBox">
            <img class="emailIcon" src="@/static/form/email.png" alt="" />
            <div class="iconTextCon">
              <div class="topTitle textBold textSize">Send us an email</div>
              <div class="topText textRegular">info@powehiusa.com</div>
            </div>
          </div>
        </div>
        <img class="homeLeftIconB" src="@/static/form/aboutIconB.png" alt="" />
      </div>
      <div class="rightCon imageItem">
        <!-- form -->
        <div v-if="formStatus" class="rightFormCon">
          <div class="formTitle textBold titleSize">CONTACT US</div>
          <el-form
            ref="editForm"
            :rules="rules"
            :model="editForm"
            onsubmit="return false;"
            class="eidtFormCon"
          >
            <div class="formItem">
              <div class="formItemTitle"><span>*</span>First name</div>
              <el-form-item prop="firstName">
                <el-input
                  v-model="editForm.firstName"
                  placeholder="First name"
                  prefix-icon="el-icon-s-custom"
                />
              </el-form-item>
            </div>

            <div class="formItem">
              <div class="formItemTitle"><span>*</span>Last name</div>
              <el-form-item prop="lastName">
                <el-input
                  v-model="editForm.lastName"
                  placeholder="Last name"
                  prefix-icon="el-icon-s-custom"
                />
              </el-form-item>
            </div>

            <div class="formItem">
              <div class="formItemTitle"><span>*</span>Email address</div>
              <el-form-item prop="email">
                <el-input
                  v-model="editForm.email"
                  placeholder="Email address"
                  prefix-icon="el-icon-message"
                />
              </el-form-item>
            </div>

            <div class="formItem">
              <div class="formItemTitle">Website</div>
              <el-form-item prop="website">
                <el-input
                  v-model="editForm.website"
                  placeholder="Website"
                  prefix-icon="el-icon-link"
                />
              </el-form-item>
            </div>

            <div class="formItem">
              <div class="formItemTitle">Phone Numbe</div>
              <el-form-item prop="phone">
                <el-input
                  v-model="editForm.phone"
                  placeholder="Phone Numbe"
                  prefix-icon="el-icon-phone"
                />
              </el-form-item>
            </div>

            <div class="formItem">
              <div class="formItemTitle"><span>*</span>Company Name</div>
              <el-form-item prop="companyName">
                <el-input
                  v-model="editForm.companyName"
                  placeholder="Company Name"
                  prefix-icon="el-icon-s-home"
                />
              </el-form-item>
            </div>

            <div class="formItemRow">
              <div class="formItemTitle"><span>*</span>Your message</div>
              <el-form-item prop="message">
                <el-input
                  v-model="editForm.message"
                  type="textarea"
                  placeholder="Your message"
                  show-word-limit
                  maxlength="500"
                  resize="none"
                  rows="5"
                  :autosize="{ minRows: 5, maxRows: 5 }"
                />
              </el-form-item>
            </div>

            <div class="formBottom">
              <div id="contactGRecaptcha"></div>
              <div class="formSubmit textRegular" role="button" @click="onSubmit">
                Send Message
              </div>
            </div>
          </el-form>
        </div>

        <!-- ok -->
        <div v-else class="rightFormOkCon">
          <img class="rightFormOkImg" src="@/static/form/ok.png" />
          <div class="titleSize textBold">THANKS FOR YOUR REQUEST</div>
          <div class="textSize textBold">WE'LL BE IN TOUCH SOON!</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RequesForm",
  props: {
    pageValue: {
      type: String,
      default: "home",
    },
  },
  data() {
    return {
      contactGooleGRecaptcha: "",
      formStatus: true,
      loading: false,

      editForm: {
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        phone: "",
        companyName: "",
        message: "",
      },
      rules: {
        firstName: [{ required: true, message: "This field is required." }],
        lastName: [{ required: true, message: "This field is required." }],
        email: [
          {
            validator: (rule, value, callback) => {
              // 邮箱检验
              const emReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
              if (value.trim() === "") {
                callback(new Error("This field is required."));
              } else if (emReg.test(value.trim())) {
                callback();
              } else {
                callback(new Error("Please enter a valid info."));
              }
            },
          },
        ],
        // website: [
        //   {
        //     validator: (rule, value, callback) => {
        //       // 网站校验
        //       const urlRegex = /^((http[s]?|ftp):\/\/)?[^:/\s]+(\.[^:/\s]+)+\.[^:\s]+?(:\d+)?(\/[^\s]*)?$/;
        //       if (value.trim() === "") {
        //         callback();
        //       } else if (urlRegex.test(value.trim())) {
        //         callback();
        //       } else {
        //         callback(new Error("Please enter a valid info."));
        //       }
        //     },
        //   },
        // ],
        companyName: [{ required: true, message: "This field is required." }],
        message: [
          { required: true, message: "This field is required." },
          { min: 4, message: "Please enter at least 4 characters." },
        ],
      },
    };
  },
  mounted() {
    this.initGrecaptcha();
  },
  methods: {
    initGrecaptcha() {
      setTimeout(() => {
        this.contactGooleGRecaptcha = window.grecaptcha.render("contactGRecaptcha", {
          sitekey: "6LcOHRgoAAAAABQwB0iIDvtlUa1e7QsayMwl9S6n",
          callback: this.onPostValue,
          size: "invisible",
        });
      }, 800);
    },
    onSubmit() {
      if (this.loading) {
        return false;
      }
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          window.grecaptcha.execute(this.contactGooleGRecaptcha);
        }
      });
    },
    onPostValue(token) {
      this.loading = true;
      this.$axios
        .post(
          "/u/hp/front/contactUs",
          {
            ...this.editForm,
          },
          {
            headers: { reCAPTCHA: token },
          }
        )
        .then((res) => {
          if (res.success) {
            this.formStatus = false;
          }
          this.loading = false;
          window.grecaptcha.reset(this.gooleGRecaptcha);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.requesForm {
  position: relative;
  height: (830 / @pcrem);
  width: 100%;
  background-color: @white;

  .con {
    position: absolute;
    top: (110 / @pcrem);
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    width: (1512 / @pcrem);
    height: (834 / @pcrem);
    border-radius: (16 / @pcrem);
    overflow: hidden;
    .aboutLeftImage {
      position: relative;
      height: 100%;
      width: 50%;
      background-color: #f9cb22;
      overflow: hidden;

      .aboutLeftText {
        position: absolute;
        top: (280 / @pcrem);
        left: 0;
        z-index: 2;
        width: 100%;
        color: @white;
        text-align: center;
      }
      .aboutLeftIcon {
        position: absolute;
        height: (81 / @pcrem);
        width: (72 / @pcrem);
        left: (44 / @pcrem);
        bottom: (56 / @pcrem);
      }

      .aboutLeftIconB {
        position: absolute;
        height: (784 / @pcrem);
        width: (688 / @pcrem);
        left: (410 / @pcrem);
        top: (210 / @pcrem);
        animation: iconAnime 10s linear infinite;
      }

      @keyframes iconAnime {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      // background-image: url("@/static/form/aboutLeft.png");
    }
    .homeLeftImage {
      position: relative;
      height: 100%;
      width: 50%;
      background-color: #fe8a12;
      overflow: hidden;

      .homeLeftCon {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding-top: (70 / @pcrem);
        padding-left: (56 / @pcrem);
        color: @white;

        .homeLeftTitle {
          padding-bottom: (50 / @pcrem);
        }
        .homeLeftText {
          padding-bottom: (130 / @pcrem);
          width: (470 / @pcrem);
        }

        .homeLeftIconBox {
          display: flex;
          & + .homeLeftIconBox {
            padding-top: (80 / @pcrem);
          }
          .addressIcon {
            height: (37 / @pcrem);
            width: (30 / @pcrem);
          }
          .emailIcon {
            height: (24 / @pcrem);
            width: (34 / @pcrem);
          }
          .iconTextCon {
            padding-left: (20 / @pcrem);
            display: flex;
            flex-direction: column;
            .topTitle {
              margin-bottom: (16 / @pcrem);
              border-bottom: 2px solid @white;
            }
            .topText {
              font-size: (18 / @pcrem);
            }
          }
        }
      }
      .homeLeftIconB {
        position: absolute;
        height: (784 / @pcrem);
        width: (688 / @pcrem);
        left: (410 / @pcrem);
        top: (210 / @pcrem);
        animation: iconAnime 10s linear infinite;
      }

      @keyframes iconAnime {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }

    // right
    .rightCon {
      height: 100%;
      width: 50%;
      background-image: url("@/static/form/right.png");

      .rightFormCon {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: (60 / @pcrem) (80 / @pcrem) 0;

        .formTitle {
          text-align: center;
          color: @white;
          padding-bottom: (50 / @pcrem);
        }

        .eidtFormCon {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .el-form-item {
            margin-bottom: (50 / @pcrem);
            :deep(.el-form-item__content) {
              line-height: (40 / @pcrem);
              position: relative;
              font-size: (18 / @pcrem);
            }
            :deep(.el-input__icon) {
              width: (25 / @pcrem);
              line-height: (40 / @pcrem);
            }
          }

          :deep(.el-form-item__error) {
            padding-top: (8 / @pcrem);
            font-size: (14 / @pcrem);
            font-family: "Montserrat Light";
            color: #ff0000;
          }
          .el-input {
            :deep(.el-input__inner) {
              font-size: (18 / @pcrem);
              width: 100%;
              height: (40 / @pcrem);
              background: #ffffff;
              border-radius: (10 / @pcrem);
              font-family: "Montserrat Light";
              color: #898989;
              padding: 0 (30 / @pcrem);
            }
          }

          .el-textarea {
            font-size: (18 / @pcrem);

            :deep(.el-textarea__inner) {
              max-height: (170 / @pcrem);
              font-family: "Montserrat Light";
              border-radius: (10 / @pcrem);
              color: #898989;
            }
          }

          .formItem {
            width: (274 / @pcrem);
          }
          .formItemRow {
            width: 100%;
          }

          .formItemTitle {
            font-family: "Montserrat Regular";
            color: @white;
            font-size: (18 / @pcrem);
            padding-bottom: (10 / @pcrem);
            span {
              color: @mainColor;
              padding-right: (7 / @pcrem);
            }
          }
        }

        .formBottom {
          display: flex;
          justify-content: flex-end;
          width: 100%;

          .formSubmit {
            cursor: pointer;
            width: (170 / @pcrem);
            height: (36 / @pcrem);
            line-height: (36 / @pcrem);
            border-radius: (18 / @pcrem);
            text-align: center;
            color: @white;
            background-color: #f9cb22;
          }
        }
      }

      .rightFormOkCon {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 (110 / @pcrem);
        color: @white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .rightFormOkImg {
          width: (152 / @pcrem);
          height: (158 / @pcrem);
        }
        .titleSize {
          padding-top: (60 / @pcrem);
          padding-bottom: (60 / @pcrem);
        }
        .textSize {
          padding-bottom: (60 / @pcrem);
        }
      }
    }
  }
}
</style>
