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
      p: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    };
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
