<template>
  <section class="scroll">
    <div class="scrollLeft">
      <img v-for="(item, index) in list" :key="index" :src="item" class="calioImg" alt="calio" />
    </div>
    <div class="scrollRight">
      <div class="scrollRightCon">
        <div
          v-for="(item, index) in textList"
          :key="index"
          class="scrollItem"
          :class="[{ scrollItemTwo: index % 2 === 0 }]"
        >
          <span class="scrollItemTitle textBold textSize">{{ item.title }}</span>
          <span class="scrollItemText textLight"> {{ item.text }}</span>
        </div>

        <div class="scrollRightBottom">
          <div class="scrollButton textRegular" role="button">Request Sample Now</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../index.less'
export default {
  data() {
    return {
      list: [
        require('@/static/calio/s-1.png'),
        require('@/static/calio/s-2.png'),
        require('@/static/calio/s-3.png'),
        require('@/static/calio/s-4.png'),
        require('@/static/calio/s-5.png'),
        require('@/static/calio/s-6.png'),
        require('@/static/calio/s-7.png'),
      ],
      textList: [
        { title: 'Dimension', text: '62.1 mm x 30.1 mm x 16.3 mm' },
        { title: 'Activation Mode ', text: 'Autodraw ( Voltage 3.7 V )' },
        { title: 'Coil Style', text: 'Single Coil' },
        { title: 'Tank Capacity ', text: '0.3 ml and 0.5 ml' },
        { title: 'Resistance', text: '1.4 Ω' },
        { title: 'Coil Material', text: 'Ceramic + FeCr' },
        { title: 'Body Material', text: 'PVC' },
        { title: 'Micro USB Charging ', text: '5 V / 0.5 A' },
        { title: 'Battery Capacity', text: '400 mAh' },
        { title: 'Charging Current', text: '0.5 A' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.scroll {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .scrollLeft {
    width: (1100 / @pcrem);
    .calioImg {
      width: 100%;
    }
  }

  .scrollRight {
    position: sticky;
    top: 0;
    right: 0;
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .scrollRightCon {
      display: flex;
      flex-direction: column;

      .scrollItem {
        width: (670 / @pcrem);
        height: (60 / @pcrem);
        line-height: (60 / @pcrem);
        background-color: @white;
        box-sizing: border-box;
        padding-left: (48 / @pcrem);
        .scrollItemTitle {
          display: inline-block;
          width: (300 / @pcrem);
          color: #000;
        }
        .scrollItemText {
          font-size: (20 / @pcrem);
        }
      }
      .scrollItemTwo {
        background-color: #eeeeee;
      }

      .scrollRightBottom {
        padding-top: (50 / @pcrem);
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .scrollButton {
          cursor: pointer;
          color: @white;
          background-color: @mainColor;
          height: (68 / @pcrem);
          line-height: (68 / @pcrem);
          width: (260 / @pcrem);
          border-radius: (34 / @pcrem);
          text-align: center;
        }
      }
    }
  }
}
</style>
