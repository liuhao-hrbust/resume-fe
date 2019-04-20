import types from '../mutation-types';

const actions = {
    toggleIsLogin({ commit }) {
        commit(types.TOGGLE_ISLOGIN);
    },
    toggleShowLogin({ commit }) {
        commit(types.TOGGLE_SHOW_LOGIN);
    },
    toggleShowRegister({ commit }) {
        commit(types.TOGGLE_SHOW_REGISTER);
    },
    toggleShowModal({ commit }) {
        commit(types.TOGGLE_SHOW_MODAL);
    }
};

export default actions;
