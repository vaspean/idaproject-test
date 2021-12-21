<template>
  <div class="products">
    <ul class="products__list">
      <ProductItem/>
    </ul>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Products',
  data() {
    return {
    };
  },
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 74.5%;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 332px);
    grid-gap: 15px;
  }

}
</style>
