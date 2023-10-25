<template>
  <div class="contant">
    <RequestForm page-value="home" />
  </div>
</template>

<script>
export default {
  name: 'Contant',
  components: {},
  head() {
    return {
      title: 'contant',
      meta: [
        {
          name: 'keywords',
          content: '',
        },
        {
          name: 'description',
          content: '',
        },

        {
          property: 'og:type',
          content: 'product',
        },
        {
          property: 'og:title',
          content: '',
        },
        {
          property: 'og:description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
