<template>
  <div id="app">
    <div class="container">
      <Header/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue';
import Main from '@/components/app/Main.vue';

export default {
  name: 'App',
  data() {
    return {
      products: JSON.parse(localStorage.getItem('products')) || this.$store.state.products,
    };
  },
  created() {
    if (this.products !== this.$store.state.products) {
      this.$store.commit('loadData', this.products);
    }
  },
  components: {
    Header, Main,
  },
};
</script>

<style lang="scss" scoped>

.container {
  max-width: $container-width;
  margin: 0 auto;
}

@media screen and (max-width: 1400px) {
  .container {
    padding: 0 40px;
  }
}
</style>
