import types from '../mutation-types';
const mutations = {
    [types.TOGGLE_ISLOGIN](state, flag) {
        state.loginState.isLogin = flag;
    },
    [types.TOGGLE_SHOW_LOGIN](state, flag) {
        state.modalState.showLogin = flag;
    },
    [types.TOGGLE_SHOW_REGISTER](state, flag) {
        state.modalState.showRegister = flag;
    },
    [types.TOGGLE_SHOW_MODAL](state, flag) {
        state.modalState.showModal = flag;
    },
    [types.SET_USER_NAME](state, name) {
        state.userInfo.user_name = name;
    },
    [types.EDIT_USER_NAME](state, name) {
        state.resumeEdit.user_name = name;
    },
    [types.EDIT_USER_DESC](state, desc) {
        state.resumeEdit.user_desc = desc;
    }
};

export default mutations;
