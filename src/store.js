import Vue from "vue";
import Vuex from "vuex";

import api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rolls: [],
  },
  mutations: {
    setRolls(state, rolls) {
      state.rolls = rolls;
    },
  },
  actions: {
    getNewRolls({ commit }) {
      api.getRolls().then((response) => {
        commit("setRolls", response.data);
      });
    },
  },
});
