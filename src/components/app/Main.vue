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
  data() {
    return {
      p: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    };
  },
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
</style>
