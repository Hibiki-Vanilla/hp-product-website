<template>
  <div class="footer">
    <div class="footerTop">
      <div class="footerTopLeft">
        <img class="logo" src="@/static/logo.svg" alt="logo" />
        <div class="footerTopLeftTitle">Empower The High</div>
        <div class="footerTopLeftText">
          Providing You With An Elevated Vaping Journey Like No Other.
        </div>
      </div>
      <div class="footerTopRight">
        <div
          v-for="(item, index) in navList"
          :key="index"
          class="navItem"
          @click="onNavClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="footerBottom">
      <div class="footerBottomLeft">Copyright © 2023 POWEHI all rights reserved.</div>
      <div class="footerBottomMid">
        <div
          v-for="(item, index) in midList"
          :key="index"
          class="textLink"
          @click="onNavClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="footerBottomRight">
        <img
          v-for="(item, index) in iconList"
          :key="index"
          :src="item.src"
          class="icon"
          @click="onIconJump(item)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "PRODUCT", jumpLink: "/product/calio" },
        { name: "SOLUTION", jumpLink: "/solution" },
        { name: "ABOUT", jumpLink: "/about" },
      ],
      midList: [
        { name: "Terms of Service", jumpLink: "/terms" },
        { name: "Privacy policy", jumpLink: "/privacy" },
      ],
      iconList: [
        {
          src: require("@/static/footer/ins.png"),
          jumpLink: "https://www.instagram.com/powehiclub/",
        },
        {
          src: require("@/static/footer/facebook.png"),
          jumpLink: "https://www.facebook.com/profile.php?id=61550651796767",
        },
        {
          src: require("@/static/footer/x.png"),
          jumpLink: "https://twitter.com/POWEHICLUB",
        },
        {
          src: require("@/static/footer/youtobe.png"),
          jumpLink: "https://www.youtube.com/channel/UCQlAgqhx-wvqgqCxJP-VXNg",
        },
      ],
    };
  },
  methods: {
    onNavClick(item) {
      this.$ctx.push(item.jumpLink);
    },
    onIconJump(item) {
      window.open(item.jumpLink, "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  box-sizing: border-box;
  width: 100%;
  height: 480px;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #eeeeee;

  // top
  .footerTop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 24px;

    .footerTopLeft {
      display: flex;
      flex-direction: column;

      .logo {
        display: block;
        height: 56px;
        width: 161px;
      }

      .footerTopLeftTitle {
        font-family: "Montserrat SemiBold";
        line-height: 1;
        font-size: 22px;
        padding-top: 10px;
        padding-bottom: 50px;
        color: #434343;
      }
      .footerTopLeftText {
        font-family: "Montserrat Regular";
        line-height: 1;
        font-size: 18px;
        color: #898989;
      }
    }

    .footerTopRight {
      display: flex;

      .navItem {
        cursor: pointer;
        font-family: "Montserrat SemiBold";
        font-size: 20px;
        color: #313131;
      }
      .navItem + .navItem {
        margin-left: 65px;
      }
    }
  }

  // bottom
  .footerBottom {
    border-top: 2px solid #b5b5b5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;

    .footerBottomLeft {
      font-family: "Montserrat Regular";
      font-size: 14px;
      color: #bfbfbf;
    }

    .footerBottomMid {
      display: flex;
      font-family: "Montserrat Regular";
      font-size: 14px;
      color: #bfbfbf;

      .textLink {
        cursor: pointer;
      }
      .textLink + .textLink {
        margin-left: 30px;
      }
    }

    .footerBottomRight {
      display: flex;

      .icon {
        cursor: pointer;
        height: 20px;
        width: 20px;
        transition: all 0.3s linear;
        & + .icon {
          margin-left: 20px;
        }
        &:hover {
          box-shadow: 8px 8px 20px hsla(0, 0%, 63%, 0.2), -8px -8px 20px #fff,
            inset 4px 4px 10px hsla(0, 0%, 63%, 0.2), inset -4px -4px 10px #fff;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .footer {
    height: (650 / @morem);
    padding: 0 (58 / @morem);

    // top
    .footerTop {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: unset;
      align-items: baseline;
      padding-bottom: (20 / @morem);

      .footerTopLeft {
        display: flex;
        flex-direction: column;

        .logo {
          display: block;
          height: (46 / @morem);
          width: (132 / @morem);
        }

        .footerTopLeftTitle {
          font-size: (24 / @morem);
          padding-top: (10 / @morem);
          padding-bottom: (30 / @morem);
        }
        .footerTopLeftText {
          font-size: (18 / @morem);
        }
      }

      .footerTopRight {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        padding-top: (50 / @morem);
        .navItem {
          font-size: (18 / @morem);
          color: #313131;
          margin-bottom: (20 / @morem);
        }
        .navItem + .navItem {
          margin-left: 0;
        }
      }
    }

    // bottom
    .footerBottom {
      height: (120 / @morem);
      flex-wrap: wrap;

      .footerBottomLeft {
        width: 100%;
        font-size: (18 / @morem);
      }

      .footerBottomMid {
        width: 100%;
        font-size: (18 / @morem);
        .textLink + .textLink {
          margin-left: (24 / @morem);
        }
      }

      .footerBottomRight {
        width: 100%;
        .icon {
          height: (30 / @morem);
          width: (30 / @morem);
        }
        .icon + .icon {
          margin-left: (20 / @morem);
        }
      }
    }
  }
}
</style>
