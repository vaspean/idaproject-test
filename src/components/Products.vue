<template>
  <div class="products">
    <ul class="products__list">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :imgPath="product.imgPath"
      />
    </ul>
    <p v-if="!filteredProducts.length" class="no_products_message">Товаров нет</p>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Products',
  computed: {
    filteredProducts() {
      let filteredProducts = this.$store.state.products.concat();
      if (this.$store.state.filter === 'default') {
        filteredProducts = this.$store.state.products;
      } else if (this.$store.state.filter === 'min') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.$store.state.filter === 'max') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.$store.state.filter === 'name') {
        filteredProducts.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
      return filteredProducts;
    },
  },
  components: {
    ProductItem,
  },
  watch: {
    '$store.state.products': function () {
      this.$store.commit('updateLocalStorage');
    },
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

.no_products_message {
  margin: 0;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
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
