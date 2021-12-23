<template>
  <main>
    <Form/>
    <Products/>
  </main>
</template>

<script>
import Form from '@/components/Form.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'Main',
  components: {
    Form, Products,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 900px) {
  main {
    flex-wrap: wrap;
  }
}
</style>
