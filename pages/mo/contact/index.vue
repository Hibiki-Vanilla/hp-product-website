<template>
  <div class="contant">
    <div class="mapBox">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3214578564803!2d-117.68964199999999!3d33.984276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcccd8b007c6a9%3A0x1efd83df939f14f1!2zMTQ4MTYgQ2VudHJhbCBBdmUsIENoaW5vLCBDQSA5MTcxMOe-juWbvQ!5e0!3m2!1szh-CN!2shk!4v1698372841487!5m2!1szh-CN!2shk"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <MoRequestForm page-value="home" />
  </div>
</template>

<script>
export default {
  name: 'Contant',
  components: {},
  head() {
    return {
      title: 'Discover Innovative Cannabis Solutions with POWEHI',
      meta: [
        {
          name: 'keywords',
          content:
            'POWEHI, cannabis industry, manufacturer, R&D, production, packing, brand building, product innovation, cutting-edge products, multiple extracts, quality, innovation, sustainability',
        },
        {
          name: 'description',
          content:
            'As a leading manufacturer in the cannabis industry, POWEHI integrates R&D, production, packing, and brand building, with a specialty in product CMF innovation.',
        },

        {
          property: 'og:type',
          content: 'contant',
        },
        {
          property: 'og:title',
          content: 'Discover Innovative Cannabis Solutions with POWEHI',
        },
        {
          property: 'og:description',
          content:
            'As a leading manufacturer in the cannabis industry, POWEHI integrates R&D, production, packing, and brand building, with a specialty in product CMF innovation.',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.mapBox {
  padding-top: (60/@morem);
  width: (650 / @morem);
  margin: 0 auto;
  iframe {
    border: 0;
    width: 100%;
    height: (350 / @morem);
  }
}</style>
