<template>
    <section class="fully imageItem" data-aos="zoom">
        <div class="fullyCon" data-aos="fade-up">
            <h2 class="fullyTitle textBlack titleSize">
                WORRY-FREE CBD
                <br />
                VAPING EXPERIENCE
            </h2>
            <div class="fullyText textSize textLight">
                Featuring a 280mAh battery and handy rechargeable function, the SOLE double-guarantees long-lasting
                sessions until the last drop. Its medical-grade stainless steel internals and mouthpiece ensure every
                inhale is both secure and delightful.
            </div>
        </div>
    </section>
</template>

<script>
import '../index.less'
export default {}
</script>

<style lang="less" scoped>
.fully {
    height: (1334 / @morem);
    background-image: url('https://files.myuwell.com/powehi/sole/mo/worry.png');
    .fullyCon {
        display: flex;
        flex-direction: column;
        width: (550 / @morem);
        height: 100%;
        margin: 0 auto;
        text-align: center;

        .fullyTitle {
            padding-top: (160 / @morem);
            padding-bottom: (60 / @morem);
        }
        .fullyText {
            line-height: 1.2;
        }
    }
}
</style>
