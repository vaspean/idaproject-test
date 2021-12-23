import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      // {
      //   id: 1,
      //   name: 'ЯНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 1000000,
      //   imgPath: 'product_images/product_image.png',
      // },
      // {
      //   id: 2,
      //   name: 'БНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 2000,
      //   imgPath: 'https://www.kvartira-box.ru/wp-content/uploads/2020/11/1636-sovremennaya-uzkaya-prihozhaya-100-foto-primerov-im-1.jpg',
      // },
      // {
      //   id: 3,
      //   name: 'ВНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 3000,
      //   imgPath: 'product_images/product_image.png',
      // },
      // {
      //   id: 4,
      //   name: 'ГНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 4000,
      //   imgPath: 'https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg',
      // },
      // {
      //   id: 5,
      //   name: 'УНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 5000,
      //   imgPath: 'product_images/product_image.png',
      // },
      // {
      //   id: 6,
      //   name: 'ЕНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 6600,
      //   imgPath: 'product_images/product_image.png',
      // },
      // {
      //   id: 7,
      //   name: 'ЖНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 7000,
      //   imgPath: 'https://webformyself.com/wp-content/uploads/2020/118/1.png',
      // },
      // {
      //   id: 8,
      //   name: 'ЗНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 9000,
      //   imgPath: 'https://webref.ru/assets/images/html5-css3/img-03.png',
      // },
      // {
      //   id: 9,
      //   name: 'ИНаименование товара',
      //   description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      //   price: 10000,
      //   imgPath: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
      // },
    ],
    filter: 'default',
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
    changeFilter(state, payload) {
      state.filter = payload;
    },
  },
});
