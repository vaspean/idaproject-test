<template>
  <li class="products__item">
    <button class="products__item__btn_delete" @click="deleteProduct(id)"></button>
    <div class="products__item__img">
      <img :src="imgPath" alt="Ссылка на изображение недействительна">
    </div>
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
  props: ['id', 'name', 'description', 'price', 'imgPath'],
  filters: {
    currencyFilter,
  },
  data() {
    return {
    };
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = 'no_photo.png';
    },
    deleteProduct(id) {
      this.$store.commit('deleteProduct', id);
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

    &__btn_delete:hover {
      opacity: 0.8;
    }

    &__btn_delete:active {
    transform: scale(0.9);
    }

    &__main {
      padding: 0 12px 56px;
    }

    &__img {
      width: 100%;
      height: 205px;
      overflow: hidden;

      img {
        width: 100%;
      }
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
      position: absolute;
      bottom: 24px;
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
