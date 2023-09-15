<template>
  <div class="team" data-aos="fade-up">
    <div class="teamTitle titleSize textBold">MEET OUR TEAM</div>
    <div class="teamTip textSize textLight">THE TALENTS WITH CREATIVE</div>

    <div class="teamText textLight">
      POWEHI has an efficient operation management and production mechanism. It boasts a
      massive think tank with a vibrant R&D team, an excellent business sales team, a
      sophisticated supply chain system, an efficient production line, a brand marketing
      team with accurate insights, and a refined internal service team.
      <br />
      <br />

      We focuses on cultivating an emerging talents team with professional qualities,
      striving to promote technological innovation, actively promoting the coordinated
      development of the vape industry, and taking social responsibility as the principle
      of a benchmark enterprise.
    </div>
  </div>
</template>

<script>
import "../index.less";
export default {};
</script>

<style lang="less" scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: (570 / @pcrem);
  width: (1400 / @pcrem);
  background-size: (1400 / @pcrem) (485 / @pcrem);
  background-position: center (285 / @pcrem);
  background-repeat: no-repeat;
  background-image: url("@/static/solution/quote/bg.png");
  color: #000;

  .teamTitle {
    padding-top: (120 / @pcrem);
    padding-bottom: (40 / @pcrem);
  }
  .teamTip {
    padding-bottom: (70 / @pcrem);
  }

  .teamText {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 0 (40 / @pcrem);
    font-size: (18 / @pcrem);
    color: #707070;
  }
}
</style>
