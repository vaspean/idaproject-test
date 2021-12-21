<template>
  <div id="app">
    <div class="container">
      <header>
        <h1>Добавление товара</h1>
        <button class="select">
          По умолчанию
        </button>
      </header>

      <main>
        <form action="" class="form">
          <label class="form__name" for="form__name_input">
            <span>Наименование товара</span>
          </label>
          <input type="text" id="form__name_input" placeholder="Введите наименование товара">
          <label class="form__description" for="form__description_input">
            Описание товара
          </label>
          <textarea rows="10" id="form__description_input" placeholder="Введите описание товара">
          </textarea>
          <label class="form__link" for="form__link_input">
            <span>Ссылка на изображение товара</span>
          </label>
          <input type="text" id="form__link_input" placeholder="Введите ссылку">
          <label class="form__price" for="form__price_input">
            <span>Цена товара</span>
          </label>
          <input type="text" id="form__price_input" placeholder="Введите цену">
          <button class="form__btn_submit">Добавить товар</button>
        </form>
        <div class="products">
          <ul class="products__list">
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
            <li class="products__item">
              <button class="products__item__btn_delete"></button>
              <p class="products__item__name">Наименование товара</p>
              <p class="products__item__description">{{p}}</p>
              <span class="products__item__price">10 000 руб.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      p: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    };
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>

.container {
  max-width: 1440px;
  margin: 0 auto;
}

header {
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.select {
  @include border-default;
  color: $text-color-gray;
  padding: 0 28px 0 15px;
  background-image: url("assets/select_arrow.svg");
  background-repeat: no-repeat;
  background-position: 87% 50%;
  box-shadow: $box-shadow-tiny;
  font-size: 12px;
}

main {
  display: flex;
  justify-content: space-between;
}

.form {
  @include border-default;
  position: sticky;
  top: 24px;
  width: 24%;
  height: 440px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;

  label {
    width: 100%;
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 12px;
    color: $forms-text-color;
  }

  // .form__name, .form__link, .form__price {
  //   background-image: url("assets/red_dot.svg");
  //   background-repeat: no-repeat;
  // }
  .form__name span, .form__link span, .form__price span{
    padding-right: 5px;
    background-image: url("assets/red_dot.svg");
    background-repeat: no-repeat;
    background-position: 100% 0%;
  }

  // .form__name {
  //   background-position: 50% 50%;
  // }

  #form__description_input {
    height: 108px;
  }

  &__btn_submit {
    width: 100%;
    height: 36px;
    margin-top: 10px;
    border: none;
    background-color: #EEEEEE;
    color: $text-color-gray;
    border-radius: 10px
  }

  input, textarea {
    @include border-default;
    min-height: 36px;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 16px;
    box-shadow: $box-shadow-tiny;
    color: $text-color-gray;
    font-size: 12px;
    line-height: 15px;
  }

  textarea {
    padding: 8px 16px;
    resize: none;
  }

  box-shadow: $box-shadow-huge;
}

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
    background-image: url("assets/product_image.png");
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
      background-color: $main-color-red;
      background-image: url("assets/trashcan.svg");
      background-repeat: no-repeat;
      background-size: 50%;
      background-position: 52% 8px;
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
