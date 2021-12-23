import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        id: 2,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://www.kvartira-box.ru/wp-content/uploads/2020/11/1636-sovremennaya-uzkaya-prihozhaya-100-foto-primerov-im-1.jpg',
      },
      {
        id: 3,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        id: 4,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg',
      },
      {
        id: 5,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        id: 6,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'product_images/product_image.png',
      },
      {
        id: 7,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://webformyself.com/wp-content/uploads/2020/118/1.png',
      },
      {
        id: 8,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://webref.ru/assets/images/html5-css3/img-03.png',
      },
      {
        id: 9,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: 10000,
        imgPath: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      },
    ],
  },
  mutations: {
    loadData(state, payload) {
      state.products = payload;
    },
    updateLocalStorage(state) {
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    addProduct(state, payload) {
      state.products.push(payload);
    },
    deleteProduct(state, payload) {
      const productIndex = state.products.findIndex((product) => (product.id === payload));
      state.products.splice(productIndex, 1);
    },
  },
});
