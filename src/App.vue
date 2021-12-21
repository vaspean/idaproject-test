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
            Наименование товара
          </label>
          <input type="text" id="form__name_input" placeholder="Введите наименование товара">
          <label class="form__description" for="form__description_input">
            Описание товара
          </label>
          <textarea rows="10" id="form__description_input" placeholder="Введите описание товара">
          </textarea>
          <label class="form__link" for="form__link_input">
            Ссылка на изображение товара
          </label>
          <input type="text" id="form__link_input" placeholder="Введите ссылку">
          <label class="form__price" for="form__price_input">
            Цена товара
          </label>
          <input type="text" id="form__price_input" placeholder="Введите цену">
          <button class="form__btn_submit">Добавить товар</button>
        </form>
        <div class="products">
          <ul class="products__list">
            <li class="products__item">
              <!-- <div class="products__img"></div> -->
              <p class="products__name">Наименование товара</p>
              <p class="products__description">{{p}}</p>
              <span class="products__price">10 000 руб.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

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
  width: 24%;
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
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
  }

  &__item {
    @include border-default;
    max-width: 332px;
    padding: 195px 16px 24px;
    background-image: url("assets/product_image.png");
    background-repeat: no-repeat;
    box-shadow: $box-shadow-huge;
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

</style>
