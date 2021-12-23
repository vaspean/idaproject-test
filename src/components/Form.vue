<template>
  <form @submit.prevent="addProduct" class="form">
    <label class="form__name" for="form__name_input">
      <span>Наименование товара</span>
    </label>
    <input :class="{ 'form__input_unvalidate' : validate.name && validation }" type="text" id="form__name_input" placeholder="Введите наименование товара" v-model="name">
    <span v-show="validate.name && validation" class="form__span_unvalidate">Поле является обязательным</span>
    <label class="form__description" for="form__description_input">
      Описание товара
    </label>
    <textarea rows="10" id="form__description_input" placeholder="Введите описание товара" v-model="description">
    </textarea>
    <label class="form__link" for="form__link_input">
      <span>Ссылка на изображение товара</span>
    </label>
    <input :class="{ 'form__input_unvalidate' : validate.imgPath && validation }" type="text" id="form__link_input" placeholder="Введите ссылку" v-model="imgPath">
    <span v-show="validate.imgPath && validation" class="form__span_unvalidate">Поле является обязательным</span>
    <label class="form__price" for="form__price_input">
      <span>Цена товара</span>
    </label>
    <input :class="{ 'form__input_unvalidate' :validate.price && validation }" type="text" id="form__price_input" placeholder="Введите цену" v-model="priceModel" @keypress="isLetterOrNumber($event)">
    <span v-show="validate.price && validation" class="form__span_unvalidate">Поле является обязательным</span>
    <button :class="{ 'btn_disabled': (validate.name || validate.imgPath || validate.price) }" class="form__btn_submit">Добавить товар</button>
  </form>
</template>

<script>
import currencyFilter from '../filters/currency.filter';

export default {
  name: 'Form',
  data() {
    return {
      name: '',
      description: '',
      imgPath: '',
      price: 0,
      validation: false,
    };
  },
  computed: {
    validate() {
      return {
        name: !this.name,
        imgPath: !this.imgPath,
        price: !this.price,
      };
    },
    priceModel: {
      get() {
        return currencyFilter(this.price.toLocaleString());
      },
      set(value) {
        this.price = +value.replace(/[^0-9]/g, '');
      },
    },
  },
  methods: {
    addProduct() {
      this.validation = true;
      if (!(this.validate.name || this.validate.imgPath || this.validate.price)) {
        let newProductId = 1;
        if (this.$store.state.products.length !== 0) {
          newProductId = this.$store.state.products.reduce((accumulator, current) => (
            accumulator.id > current.id ? accumulator : current
          )).id + 1;
        }
        this.$store.commit('addProduct', {
          id: newProductId, name: this.name, description: this.description, imgPath: this.imgPath, price: +this.price,
        });
        this.name = '';
        this.description = '';
        this.imgPath = '';
        this.price = '';
        this.validation = false;
      }
    },
    isLetterOrNumber(event) {
      if (!+event.key && !(event.key === '0')) {
        event.preventDefault();
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  @include border-default;
  position: sticky;
  top: 24px;
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

  &__link, &__description, &__price, &__btn_submit {
    margin-top: 16px !important;
  }

  &__name span, &__link span, &__price span {
    padding-right: 5px;
    background-image: url("../assets/red_dot.svg");
    background-repeat: no-repeat;
    background-position: 100% 0%;
  }

  &__span_unvalidate {
    font-size: 8px;
    line-height: 10px;
    color: $main-color-red;
  }

  .form__input_unvalidate {
    border: 2px solid $main-color-red;
  }

  #form__description_input {
    height: 108px;
  }

  &__btn_submit {
    width: 100%;
    height: 36px;
    margin-top: 6px;
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

  input {
    height: 36px
  }

  input, textarea {
    @include border-default;
    width: 100%;
    padding: 0 16px;
    box-shadow: $box-shadow-tiny;
    font-size: 12px;
    line-height: 15px;
  }

  input::placeholder, textarea::placeholder {
    color: $text-color-gray;
  }

  input:focus, textarea:focus {
    outline: none;
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
</style>
