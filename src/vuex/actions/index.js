import types from '../mutation-types';

const actions = {
    toggleIsLogin({ commit }, flag) {
        commit(types.TOGGLE_ISLOGIN, flag);
    },
    toggleShowLogin({ commit }, flag) {
        commit(types.TOGGLE_SHOW_LOGIN, flag);
    },
    toggleShowRegister({ commit }, flag) {
        commit(types.TOGGLE_SHOW_REGISTER, flag);
    },
    toggleShowModal({ commit }, flag) {
        commit(types.TOGGLE_SHOW_MODAL, flag);
    },
    setUserName({ commit }, name) {
        commit(types.SET_USER_NAME, name);
    }
};

export default actions;