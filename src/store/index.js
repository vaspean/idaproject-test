import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://www.kvartira-box.ru/wp-content/uploads/2020/11/1636-sovremennaya-uzkaya-prihozhaya-100-foto-primerov-im-1.jpg',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://webformyself.com/wp-content/uploads/2020/118/1.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://webref.ru/assets/images/html5-css3/img-03.png',
      },
      {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      },
    ],
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
