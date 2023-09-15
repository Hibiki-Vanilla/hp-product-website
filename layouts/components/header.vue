<template>
  <div class="header">
    <div :class="{ headerWrap: true, headerFixed: isFixed }">
      <div class="headerLeft" role="button" @click="handleHome"></div>
      <div class="headerRight">
        <!-- go inqury -->
        <div class="headerRightInquryButton" role="button" @click="onHomeForm">
          Inqury Now
        </div>
        <!-- nav  -->
        <div class="navButton" :class="{ navButtonOn: onNav }" @click="onNavButton">
          <div class="navIconLine"></div>
          <div class="navIconLine"></div>
          <div class="navIconLine"></div>
          <div class="navIconOn">
            <div class="navIconLineOn"></div>
            <div class="navIconLineOn"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- open window -->
    <div class="headerBottomRow" :class="{ headerBottomRowOn: onNav }">
      <div
        v-for="(item, index) in navList"
        :key="index"
        class="windowNavItem"
        @click="onNavClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      hanTopBtn: false,
      onNav: false,
      navList: [
        { name: "PRODUCT", jumpLink: "/product/calio" },
        { name: "SOLUTION", jumpLink: "/solution" },
        { name: "ABOUT", jumpLink: "/about" },
      ],
    };
  },

  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onHomeForm() {
      this.$ctx.push("/");
      setTimeout(() => {
        document
          .getElementById(this.$store.state.isPc ? "requesForm" : "moRequesForm")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    },
    handleScroll() {
      const scroll =
        Window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(this.$store.state.isPc);
      this.isFixed = scroll > 0;
      this.hanTopBtn = scroll > 100;
    },
    handleHome() {
      this.$ctx.push("/");
    },
    handleTo(nav) {
      if (nav.jumpLink) {
        this.$ctx.push(nav.jumpLink);
      }
    },
    handleTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    onNavButton() {
      this.onNav = !this.onNav;
      const htmlCss = document.getElementsByTagName("html");
      if (this.onNav) {
        document.body.style.cssText = "overflow:hidden";
        htmlCss[0].style.cssText = "overflow:hidden";
      } else {
        document.body.style.cssText = "overflow:unset";
        htmlCss[0].style.cssText = "overflow:unset";
        this.onLang = false;
      }
    },
    onNavClick(item) {
      this.$ctx.push(item.jumpLink);
      this.onNavButton();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 100px;
  width: 100%;
  .headerWrap {
    position: absolute;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px 0 80px;
    box-sizing: border-box;
    background: #ffffff;
    transition: height 0.3s;

    .headerLeft {
      cursor: pointer;
      width: 160px;
      height: 55px;
      background-image: url("@/static/logo.png");
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      transition: background-size 0.1s ease-in-out;
      &:hover {
        background-size: 95% 95%;
      }
    }

    .headerRight {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .headerRightInquryButton {
        cursor: pointer;
        font-family: "Montserrat Regular";
        font-size: 18px;
        color: @white;
        background-color: @mainColor;
        border-radius: 26px;
        height: 52px;
        line-height: 52px;
        text-align: center;
        width: 176px;
        transition: all 0.2s ease-in-out;
        margin-right: 34px;
        &:hover {
          height: 50px;
          line-height: 50px;
          width: 170px;
          font-size: 19px;
        }
      }

      .navButton {
        z-index: 101;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 64px;
        height: 58px;

        .navIconLine {
          transition: all 0.3s ease-in-out;
          width: 100%;
          height: 6px;
          background: #626262;
        }

        .navIconOn {
          transition: all 0.3s;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;

          .navIconLineOn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 6px;
            background: #626262;
            &:first-child {
              transform: translate(-50%, -50%) rotate(0.125turn);
            }
            &:last-child {
              transform: translate(-50%, -50%) rotate(0.375turn);
            }
          }
        }
      }

      .navButton.navButtonOn {
        .navIconLine {
          opacity: 0;
        }
        .navIconOn {
          opacity: 1;
        }
      }
    }
  }

  //   移动状态

  .headerFixed {
    position: fixed;
    top: 0;
    z-index: 666;
    width: 100%;
    background: #ffffff;
    // height: 80px;
    transition: height 0.3s, background 0.3s;

    img {
      height: 36px;
      transition: all 0.3s;
    }
  }

  //   展开窗口

  .headerBottomRow {
    z-index: 101;
    position: fixed;
    height: 0;
    opacity: 0;
    overflow: hidden;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(to right, rgba(255, 255, 0, 0.8), rgba(241, 90, 36, 0.8));

    .windowNavItem {
      cursor: pointer;
      font-family: "Montserrat Bold";
      font-size: 40px;
      color: #fff;
      margin-bottom: 60px;
    }
  }

  .headerBottomRowOn {
    transition: opacity 0.2s;
    opacity: 1;
    height: calc(100vh - 100px);
    padding: 80px;
  }
}

@media (max-width: 1000px) {
  .header {
    height: (100 / @morem);
    .headerWrap {
      height: (100 / @morem);
      padding: 0 (40 / @morem);
      .headerLeft {
        width: (132 / @morem);
        height: (46 / @morem);
      }

      .headerRight {
        .headerRightInquryButton {
          font-size: (14 / @morem);
          border-radius: (18 / @morem);
          height: (36 / @morem);
          line-height: (36 / @morem);
          width: (110 / @morem);
          margin-right: (30 / @morem);
          &:hover {
            height: (38 / @morem);
            line-height: (38 / @morem);
            width: (112 / @morem);
            font-size: (15 / @morem);
          }
        }

        .navButton {
          width: (40 / @morem);
          height: (38 / @morem);

          .navIconLine {
            height: (4 / @morem);
          }

          .navIconOn {
            .navIconLineOn {
              height: (4 / @morem);
            }
          }
        }
      }
    }

    //   展开窗口

    .headerBottomRow {
      top: (100 / @morem);
      .windowNavItem {
        font-size: (40 / @morem);
        margin-bottom: (50 / @morem);
      }
    }

    .headerBottomRowOn {
      @num: (100 / @morem);
      height: calc(100vh - @num);
      padding: (60 / @morem);
    }
  }
}
</style>
