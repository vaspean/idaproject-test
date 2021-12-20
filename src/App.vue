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
          <input type="text" id="form__description_input" placeholder="Введите описание товара">
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
  components: {
  },
};
</script>

<style lang="scss" scoped>

header {
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
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
}

main {
  display: flex;
  justify-content: space-between;
}

.form {
  @include border-default;
  width: 20.5%;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  &__name {
    width: 100%;
  }

  &__btn_submit {
    width: 100%;
  }

  input {
    width: 100%;
  }

}

#app {
  // // font-family: Sans Pro;
  // // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
