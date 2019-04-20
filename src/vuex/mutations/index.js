import types from '../mutation-types';
const mutations = {
    [types.TOGGLE_ISLOGIN](state) {
        state.loginState.isLogin = !state.loginState.isLogin;
    },
    [types.TOGGLE_SHOW_LOGIN](state) {
        state.modalState.showLogin = !state.modalState.showLogin;
    },
    [types.TOGGLE_SHOW_REGISTER](state) {
        state.modalState.showRegister = !state.loginState.showRegister;
    },
    [types.TOGGLE_SHOW_MODAL](state) {
        console.log('qqq');
        state.modalState.showModal = !state.modalState.showModal;
    }
};

export default mutations;
