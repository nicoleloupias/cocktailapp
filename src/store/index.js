import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  favourites: []
};

export default new Vuex.Store({
  state: { ...initialState },
  mutations: {
    clean(state) {
      Object.assign(state, initialState);
    },
    addNewFavourite(state, item) {
      state.favourites = [...state.favourites, item];
    }
  },
  actions: {},
  modules: {}
});
