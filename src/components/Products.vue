<template>
  <div class="products">
    <ul class="products__list">
      <ProductItem
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :imgLink="product.imgLink"
        :imgLocation="product.imgLocation"
      />
    </ul>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: this.$store.state.products,
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
    grid-template-columns: repeat(3, 32.5%);
    grid-gap: 15px;
  }

}

@media screen and (max-width: 1400px) {
  .products {
    width: 70%;
    &__list {
      grid-template-columns: repeat(3, 32.3%);
    }
  }
}

@media screen and (max-width: 1250px) {
  .products {
    width: 65%;
    &__list {
      grid-template-columns: repeat(2, 49%);
      justify-content: center;
      align-items: flex-end;
      grid-gap: 15px;
    }
  }
}

@media screen and (max-width: 1080px) {
  .products {
    width: 65%;
  }
}

@media screen and (max-width: 900px) {
  .products {
    width: 44%;
    &__list {
      grid-template-columns: repeat(1, 100%);
    }
  }
}

@media screen and (max-width: 768px) {
  .products {
    width: 100%;
    &__list {
      grid-template-columns: repeat(2, 45%);
      grid-gap: 25px;
    }
  }
}

@media screen and (max-width: 570px) {
  .products {
    &__list {
      grid-template-columns: repeat(1, 100%);
    }
  }
}
</style>
