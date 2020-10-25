// import axios from 'axios';
import staticParts from '../../assets/robot-parts/parts';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robots-foo',
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      // axios.get('api/parts')
      //   .then((result) => commit('updateParts', result.data))
      //   .catch(console.error);

      commit('updateParts', staticParts);
    },
    addRobotToCart({ commit, state }, robot) {
      // const cart = [...state.cart, robot];
      // return axios.post('/api/cart', cart)
      //   .then(() => commit('addRobotToCart', robot));
      console.log('current state', state);
      commit('addRobotToCart', robot);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
    foo(state) {
      return `robots-getter/${state.foo}`;
    },
  },
};
