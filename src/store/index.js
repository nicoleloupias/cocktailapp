import Vue from "vue";
import Vuex from "vuex";
import Notifications from "vue-notification";
Vue.use(Notifications);
Vue.use(Vuex);

const initialState = {
  favourites: []
};

let notifier = new Vue();

export default new Vuex.Store({
  state: { ...initialState },
  mutations: {
    clean(state) {
      Object.assign(state, initialState);
    },
    addNewFavourite(state, item) {
      if (state.favourites.find(f => f.id === item.id)) {
        this.dispatch("notify", {
          type: "error",
          text: "You alredy have this element in your favourites."
        });
      } else {
        state.favourites = [...state.favourites, item];
        this.dispatch("notify", {
          type: "success",
          text: `You added ${item.title} to your favourites.`
        });
      }
    },
    deleteFavourite(state, item) {
      state.favourites = [...state.favourites.filter(f => f.id !== item.id)];
      this.dispatch("notify", {
        type: "success",
        text: `${item.title} was deleted succesfully.`
      });
    }
  },
  actions: {
    notify(context, payload) {
      console.log("holaaaa");
      notifier.$notify(payload);
    }
  },
  getters: {
    favouriteCocktails({ favourites }) {
      return favourites.filter(f => f.type === "cocktail");
    },
    favouriteIngredients({ favourites }) {
      return favourites.filter(f => f.type === "ingredient");
    }
  }
});
