import Vue from 'vue';
import Vuex from 'vuex';
import statements from '../routes/statements/vuex/module';
import value from './modules/value/value';

// global ones
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: 10,
  },
  getters,
  mutations,
  actions,
  modules: {
    statements,
    value,
  },
});
