<template>
  <li class="products__item">
    <button class="products__item__btn_delete"></button>
    <img class="products__item__img" :src="resolve(imgLink)" alt="">
    <div class="products__item__main">
      <p class="products__item__name">{{ name }}</p>
      <p class="products__item__description">{{ description }}</p>
      <span class="products__item__price">{{ price | currencyFilter }} руб.</span>
    </div>
  </li>
</template>

<script>
import currencyFilter from '../filters/currency.filter';

export default {
  name: 'ProductItem',
  props: ['name', 'description', 'price', 'imgLink', 'imgLocation'],
  filters: {
    currencyFilter,
  },
  data() {
    return {
    };
  },
  methods: {
    resolve(path) {
      return this.imgLocation === 'locale' ? require.context('../assets/', false, /\.png$/)(`./${path}`) : path;
    },
  },
};
</script>

<style lang="scss" scoped>
.products {

  &__item {
    @include border-default;
    position: relative;
    height: 100%;
    max-width: 332px;
    box-shadow: $box-shadow-huge;

    &:hover button {
      display: block;
    }

    &__btn_delete {
      display: none;
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
      cursor: pointer;
    }

    &__btn_delete:active {
    transform: scale(0.9);
    }

    &__main {
      // position: absolute;
      padding: 0 12px 24px;
    }

    &__img {
      width: 100%;
      max-height: 200px;
    }

    &__name {
      margin: 10px 0 16px;
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
