import Vuex from 'vuex';
import state from '../state/index';
import mutations from '../mutations/index';
import actions from '../actions/index';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;
