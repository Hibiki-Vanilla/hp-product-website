<template>
  <div class="termWrap">
    <div class="box">
      <div class="title">PRIVACY POLICY</div>

      <div class="time">Effective Date: Sep. 15, 2023</div>
      <div class="text">
        www.powehiclub.com ( collectively, "POWEHI", "we", "us", or "our") respect your
        personal information and privacy. Therefore, we have developed a Privacy Statement
        according to legal requirements and mature industry standards (hereinafter
        referred to as "this Statement") that covers how we protect your personal data
        safely. Please take a moment to read and understand our privacy statement and let
        us know if you have any questions.
        <br />
        <br />

        This Privacy Policy outlines how we collect, use, and disclose information
        collected from users of our POWEHI website.
      </div>
      <div class="titleSmall">Information Collection and Use</div>
      <div class="text">
        We may collect personal information such as your name and email address when you
        subscribe to our newsletter or create an account on our website. We also collect
        non-personal information such as your browser type, IP address, and device
        information through the use of cookies and other tracking technologies.
        <br />
        <br />

        We use this information to provide you with a better user experience, to
        communicate with you about promotions and products, and to improve our website's
        functionality. We do not sell or share your personal information with third
        parties unless required by law or in cases of fraud or security issues.
      </div>

      <div class="titleSmall">Data Security</div>
      <div class="text">
        We take reasonable measures to protect your personal information from unauthorized
        access, disclosure, and use. However, please be aware that no method of
        transmitting information over the internet is completely secure, and we cannot
        guarantee the absolute security of your personal information.
      </div>

      <div class="titleSmall">Third-Party Links</div>
      <div class="text">
        Our website may contain links to third-party websites. We are not responsible for
        the privacy practices or content of these sites and encourage you to review their
        respective privacy policies before providing any personal information.
      </div>

      <div class="titleSmall">Children's Privacy</div>
      <div class="text">
        Our website is not intended for children under the age of 21. We do not knowingly
        collect personal information from children under 21. If we become aware that we
        have collected personal information from a child under 21, we will take steps to
        delete the information as soon as possible.
      </div>

      <div class="titleSmall">Changes to Policy</div>
      <div class="text">
        We reserve the right to amend this Privacy Policy at any time. Any changes will be
        reflected on this page, and we encourage you to review this page periodically for
        any updates.
      </div>

      <div class="titleSmall">E-mail Communications</div>
      <div class="text">
        From time to time, POWEHI may contact you via email for the purpose of providing
        announcements, promotional offers, alerts, confirmations, surveys, and/or other
        general communication.
        <br />
        <br />

        If you would like to stop receiving marketing or promotional communications via
        email from POWEHI, you may opt out of such communications by users can unsubscribe
        from our newsletter.
        <br />
        <br />

        If you have any questions or concerns about our Privacy Policy, please contact us
        at <a href="mailto:info@powehiclub.com">info@powehiclub.com.</a>
        <br />
        <br />

        By using our website, you consent to the terms of this Privacy Policy.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MPrivacy",

  head() {
    return {
      title: "Privacy Policy | POWEHI",
      meta: [
        {
          name: "keywords",
          content:
            "Privacy of cannabis hardware, OEMODM full-service policy, cbd vape pen customization policy.",
        },
        {
          name: "description",
          content:
            "POWEHI offers cannabis hardware OEM/ODM full-service that provides customers with the complete cbd vape pen customization solution.",
        },

        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:title",
          content: "Privacy Policy | POWEHI",
        },
        {
          property: "og:description",
          content:
            "POWEHI offers cannabis hardware OEM/ODM full-service that provides customers with the complete cbd vape pen customization solution.",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.termWrap {
  width: 100%;
  .box {
    margin: 0 auto;
    padding-top: (120 / @morem);
    width: (550 / @morem);
    box-sizing: border-box;
    color: #2e2e22;
    font-family: "Montserrat Regular";
    font-size: (16 / @morem);
    .title {
      font-size: (48 / @morem);
      line-height: 1;
      text-align: center;
    }
    .time {
      font-size: (20 / @morem);
      line-height: (48 / @morem);
      opacity: 0.7;
      text-align: center;
      margin: (8 / @morem) 0 (62 / @morem);
    }
    .text {
      padding-bottom: (50 / @morem);
      font-size: (22 / @morem);
    }
    .titleSmall {
      color: #000;
      font-weight: 800;
      font-size: (22 / @morem);
      line-height: (34 / @morem);
      margin-bottom: (24 / @morem);
    }
  }
}
// @media (max-width: 1280px) {
//   .termWrap {
//     .box {
//       padding: 120px 240px 80px;
//     }
//   }
// }
</style>
