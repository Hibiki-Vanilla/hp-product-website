<template>
  <section class="swiper" data-aos="zoom">
    <img
      v-for="(item, index) in 7"
      :key="index"
      :src="`https://files.myuwell.com/powehi/bello/swiper-${item}.png`"
      class="swiperImg"
      :class="[{'swiperImgAct': item === nowIndex }]"
      alt="bello"
    />
    <img class="swiperLeftArr" src="https://files.myuwell.com/powehi/bello/arr.png"  role="button" alt="arr"  @click="nowIndex = nowIndex === 1? 7:nowIndex - 1" >
    <img class="swiperRightArr" src="https://files.myuwell.com/powehi/bello/arr.png" role="button" alt="arr" @click="nowIndex = nowIndex === 7? 1:nowIndex + 1" >
  </section>
</template>

<script>
import '../index.less'
export default {
  data(){
    return{
      nowIndex:0
    }
  },
  mounted() {
    this.nowIndex = 1
  },

}
</script>

<style lang="less" scoped>
.swiper {
  position: relative;
  height: (1080 / @pcrem);
  width: 100%;

  .swiperImg{
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  .swiperImgAct{
    opacity: 1;
  }

  .swiperLeftArr{
    position: absolute;
    cursor: pointer;
    top: calc( 50% - 2vw);
    left: (80/@pcrem);
    height: (80/@pcrem);
    width: (80/@pcrem);
    aspect-ratio: 1;
  }

  .swiperRightArr{
    position: absolute;
    cursor: pointer;
    top: calc( 50% - 2vw);
    right: (80/@pcrem);
    height: (80/@pcrem);
    width: (80/@pcrem);
    aspect-ratio: 1;
    transform: rotate(180deg);
  }
}
</style>
