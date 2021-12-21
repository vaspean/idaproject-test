<template>
  <form @submit.prevent="" action="" class="form">
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
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style lang="scss" scoped>
.form {
  @include border-default;
  position: sticky;
  top: 24px;
  // width: 24%;
  width: 332px;
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

  .form__name span, .form__link span, .form__price span{
    padding-right: 5px;
    background-image: url("../assets/red_dot.svg");
    background-repeat: no-repeat;
    background-position: 100% 0%;
  }

  #form__description_input {
    height: 108px;
  }

  &__btn_submit {
    width: 100%;
    height: 36px;
    margin-top: 10px;
    border: none;
    background-color: #7BAE73;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }

  &__btn_submit:hover {
    opacity: 0.8;
  }

  &__btn_submit:active {
    transform: scale(0.95);
  }

  .btn_disabled {
    background-color: #EEEEEE;
    color: $text-color-gray;
  }

  input, textarea {
    @include border-default;
    min-height: 36px;
    width: 100%;
    margin-bottom: 16px;
    padding: 0 16px;
    box-shadow: $box-shadow-tiny;
    font-size: 12px;
    line-height: 15px;
  }

  input::placeholder, textarea::placeholder {
    color: $text-color-gray;
  }

  textarea {
    padding: 8px 16px;
    resize: none;
  }

  box-shadow: $box-shadow-huge;
}

@media screen and (max-width: 1080px) {
  .form {
    width: 33%;
  }
}

@media screen and (max-width: 900px) {
  .form {
    position: static;
    width: 52%;
  }
}

@media screen and (max-width: 768px) {
  .form {
    width: 100%;
    margin-bottom: 20px;
  }
}

// @media screen and (max-width: 600px) {
//   form { background-color: #fc0; }
// }
</style>
