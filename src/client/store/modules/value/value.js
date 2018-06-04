import * as types from './types';

const state = {
    name: '',
    age: '',
    movie:''

};

// const getters = {
//     [types.USER_DATA]: state => {
//         return state.data;
//     },
//     [types.USER_COUNT]: state => {
//         return state.totalUserCount + ' Users';
//     }
// };

// const mutations = {
//     [types.Mutations.CHANGE_PAGE_NUMBER]: (state, payload) => {
//         state.pagination.current = payload;
//     },
//     [types.Mutations.CHANGE_USER_DATA]: (state, payload) => {
//         state.pagination.data = payload.data;
//     }
// };

const actions = {
    [types.Actions.POST_DATA]: () => {
     // 
     console.log("@@@@@@@@@@@@@@");
     return Promise.resolve({
        status:"success"
      });
    }
};

export default {
    state,
    // mutations,
    actions,
    // getters
}