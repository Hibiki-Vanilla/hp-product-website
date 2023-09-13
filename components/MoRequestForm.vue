<template>
  <section id="moRequesForm" class="requesForm">
    <div class="con">
      <div v-if="pageValue === 'about'" class="aboutLeftImage imageItem">
        <div class="aboutLeftText titleSize textBold">
          Scale your business with us
          <br />
          today!
        </div>
        <img class="aboutLeftIconB" src="@/static/form/aboutIconB.png" alt="" />

        <img class="aboutLeftIcon" src="@/static/form/aboutIcon.png" alt="" />
      </div>
      <!-- home -->
      <div v-if="pageValue === 'home'" class="homeLeftImage imageItem">
        <img class="homeLeftIconB" src="@/static/form/homeIconB.png" alt="" />
        <div class="homeCon">
          <div class="homeTitle textBold titleSize">GET IN TOUCH</div>
          <div class="homeText textRegular">
            Need more information? Get in touch and
            <br />
            receive a complementary product consultation,
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
      </div>

      <!-- right bottom -->

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
  methods: {
    initGrecaptcha() {
      setTimeout(() => {
        this.contactGooleGRecaptcha = window.grecaptcha.render("contactGRecaptcha", {
          sitekey: "6LfWpvghAAAAAPYPuiAxsai2OieCy6BMlX1RXEp4",
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
  mounted() {
    this.initGrecaptcha();
  },
};
</script>

<style lang="less" scoped>
.requesForm {
  position: relative;
  width: 100%;
  background-color: @white;
  padding-bottom: (60 / @morem);

  .con {
    padding-top: (100 / @morem);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: (650 / @morem);
    // height: (1040 / @morem);
    border-radius: (16 / @morem);
    overflow: hidden;
    .aboutLeftImage {
      position: relative;
      height: (200 / @morem);
      width: 100%;
      border-radius: (14 / @morem) (14 / @morem) 0 0;
      background-color: #f9cb22;
      overflow: hidden;

      .aboutLeftText {
        position: absolute;
        top: (60 / @morem);
        left: 0;
        z-index: 2;
        width: 100%;
        color: @white;
        text-align: center;
      }
      .aboutLeftIcon {
        position: absolute;
        height: (51 / @morem);
        width: (46 / @morem);
        left: (30 / @morem);
        bottom: (20 / @morem);
      }

      .aboutLeftIconB {
        position: absolute;
        height: (415 / @morem);
        width: (279 / @morem);
        left: (420 / @morem);
        bottom: 0;
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
      height: (450 / @morem);
      width: 100%;
      border-radius: (14 / @morem) (14 / @morem) 0 0;
      background-color: #fe8a12;
      overflow: hidden;

      .homeLeftIconB {
        position: absolute;
        height: (524 / @morem);
        width: (459 / @morem);
        left: (380 / @morem);
        top: (100 / @morem);
        animation: iconAnime 10s linear infinite;
      }

      .homeCon {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: (50 / @morem);
        display: flex;
        flex-direction: column;
        align-items: center;
        .homeTitle {
          color: @white;
          padding-bottom: (40 / @morem);
        }
        .homeText {
          font-size: (20 / @morem);
          color: @white;
          width: 100%;
          box-sizing: border-box;
          padding-left: (100 / @morem);
          padding-bottom: (30 / @morem);
        }

        .homeLeftIconBox {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          padding-left: (100 / @morem);
          color: @white;
          & + .homeLeftIconBox {
            padding-top: (30 / @morem);
          }
          .addressIcon {
            height: (37 / @morem);
            width: (30 / @morem);
          }
          .emailIcon {
            height: (24 / @morem);
            width: (34 / @morem);
          }
          .iconTextCon {
            padding-left: (12 / @morem);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .topTitle {
              margin-bottom: (10 / @morem);
              border-bottom: 1px solid @white;
            }
            .topText {
              font-size: (18 / @morem);
            }
          }
        }
      }
    }

    // right
    .rightCon {
      width: 100%;
      background-image: url("@/static/form/moRight.png");
      padding-bottom: (50 / @morem);
      .rightFormCon {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: (70 / @morem) (25 / @morem) 0;

        .formTitle {
          text-align: center;
          color: @white;
          padding-bottom: (40 / @morem);
        }

        .eidtFormCon {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .el-form-item {
            margin-bottom: (40 / @morem);
            :deep(.el-form-item__content) {
              line-height: (40 / @morem);
              position: relative;
              font-size: (24 / @morem);
            }
            :deep(.el-input__icon) {
              width: (30 / @morem);
              line-height: (40 / @morem);
            }
          }

          :deep(.el-form-item__error) {
            line-height: 1;
            padding-top: (4 / @morem);
            font-size: (24 / @morem);
            font-family: "Montserrat Light";
            color: #ff0000;
          }
          .el-input {
            :deep(.el-input__inner) {
              font-size: (24 / @morem);
              width: 100%;
              height: (60 / @morem);
              line-height: (60 / @morem);
              background: #ffffff;
              border-radius: (10 / @morem);
              font-family: "Montserrat Light";
              color: #898989;
              padding: 0 (40 / @morem);
            }
          }

          .el-textarea {
            font-size: (24 / @morem);

            :deep(.el-textarea__inner) {
              max-height: (200 / @morem);
              font-family: "Montserrat Light";
              border-radius: (10 / @morem);
              color: #898989;
            }
          }

          .formItem {
            width: 100%;
          }
          .formItemRow {
            width: 100%;
          }

          .formItemTitle {
            font-family: "Montserrat Regular";
            color: @white;
            font-size: (24 / @morem);
            padding-bottom: (8 / @morem);
            span {
              color: @mainColor;
              padding-right: (6 / @morem);
            }
          }
        }

        .formBottom {
          display: flex;
          justify-content: flex-end;
          width: 100%;

          .formSubmit {
            cursor: pointer;
            width: (200 / @morem);
            height: (50 / @morem);
            line-height: (50 / @morem);
            border-radius: (25 / @morem);
            font-size: (24 / @morem);
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
        padding: 0 (110 / @morem);
        color: @white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .rightFormOkImg {
          width: (152 / @morem);
          height: (158 / @morem);
        }
        .titleSize {
          padding-top: (60 / @morem);
          padding-bottom: (60 / @morem);
        }
        .textSize {
          padding-bottom: (60 / @morem);
        }
      }
    }
  }
}
</style>
