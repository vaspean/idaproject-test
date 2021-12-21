<template>
  <div class="products">
    <ul class="products__list">
      <li class="products__item">
        <button class="products__item__btn_delete"></button>
        <p class="products__item__name">Наименование товара</p>
        <p class="products__item__description">{{p}}</p>
        <span class="products__item__price">10 000 руб.</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      p: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    };
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

  &__item {
    @include border-default;
    position: relative;
    max-width: 332px;
    padding: 195px 16px 24px;
    background-image: url("../assets/product_image.png");
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
</style>
