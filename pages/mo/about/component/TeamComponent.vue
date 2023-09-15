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
  height: (500 / @morem);
  width: 100%;
  background-size: (663 / @morem) (231 / @morem);
  background-position: center (370 / @morem);
  background-repeat: no-repeat;
  background-image: url("@/static/solution/quote/bg.png");
  color: #000;

  .teamTitle {
    padding-top: (80 / @morem);
    padding-bottom: (30 / @morem);
  }
  .teamTip {
    padding-bottom: (40 / @morem);
  }

  .teamText {
    box-sizing: border-box;
    width: (550 / @morem);
    text-align: center;
    font-size: (16 / @morem);
    color: #707070;
  }
}
</style>
