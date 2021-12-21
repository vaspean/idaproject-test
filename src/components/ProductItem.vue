<template>
  <li class="products__item">
    <button class="products__item__btn_delete"></button>
    <p class="products__item__name">Наименование товара</p>
    <p class="products__item__description">{{p}}</p>
    <span class="products__item__price">10 000 руб.</span>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      p: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    };
  },
};
</script>

<style lang="scss" scoped>
.products {

  &__item {
    @include border-default;
    position: relative;
    max-width: 332px;
    padding: 195px 16px 24px;
    background-image: url("../assets/product_image.png");
    background-position: 50% 0%;
    background-repeat: no-repeat;
    box-shadow: $box-shadow-huge;

    &__btn_delete {
      position: absolute;
      top: -2%;
      left: 92%;
      width: 32px;
      height: 32px;
      box-shadow: $box-shadow-tiny;
      border: none;
      background: no-repeat 52% 8px/50% url("../assets/trashcan.svg");
      background-color: $main-color-red;
      border-radius: 10px;
    }

    &__name {
      margin-bottom: 16px;
      font-size: 20px;
      font-weight: 600;
    }

    &__description {
      margin-bottom: 32px;
      font-size: 16px;
    }

    &__price {
      font-size: 24px;
      font-weight: 600;
    }

  }
}

@media screen and (max-width: 768px) {
  .products {
    &__item {
      &__name {
        margin-bottom: 8px;
        font-size: 16px;
      }

      &__description {
        margin-bottom: 16px;
        font-size: 12px;
      }

      &__price {
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 570px) {
  .products {
    &__item {
      margin: 0 auto;
    }
  }
}
</style>
