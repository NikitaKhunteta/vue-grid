import * as types from './types';

const state = {
  totalUserCount: 0,
  data: [],
  loading: false,
  error: false,
  pagination: {
    current: 0,
  },
};

const getters = {
  // this.$store.state.users
  //this.$store.getters.getterName
  // getters will be the 2nd arg
  [types.USER_DATA]: (state) => {
    return state.data;
  },
  [types.USER_COUNT]: (state, getters, rootState) => {
    return rootState.users + ' Users';
  },
};

const mutations = {
  [types.Mutations.CHANGE_PAGE_NUMBER]: (state, payload) => {
    state.pagination.current = payload;
  },
  [types.Mutations.CHANGE_USER_DATA]: (state, payload) => {
    state.data = payload.data;
    state.totalUserCount = payload.data.length;
    state.error = true;
  },
};

const actions = {
  [types.Actions.FETCH_DATA]: ({ commit }) => {
    setTimeout(() => {
      commit(types.Mutations.CHANGE_USER_DATA, {
        data: [
          { name: 'Nikita', amount: 1000 },
          { name: 'Gopal', amount: 10000 },
          { name: 'Prashant', amount: 1000000 },
          { name: 'Dimple', amount: 100000 },
        ],
      });
    }, 1000);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
