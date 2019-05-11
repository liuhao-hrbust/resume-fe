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
    [types.EDIT_USER_NAME](state, name) {
        state.userInfo.user_name = name;
    },
    [types.SET_USER_NAME](state, name) {
        state.resumeEdit.user_name = name;
    },
    [types.EDIT_USER_DESC](state, desc) {
        state.resumeEdit.user_desc = desc;
    },
    [types.SET_RESUME_EDUCATION_INFO](state, info) {
        state.resumeEdit.educationInfo = info;
    },
    [types.SET_RESUME_SELF_VAL](state, info) {
        state.resumeEdit.self_val = info;
    },
    [types.SET_RESUME_EXTRA](state, info) {
        state.resumeEdit.extra = info;
    },
    [types.SET_RESUME_TARGET](state, info) {
        state.resumeEdit.target = info;
    },
    [types.SET_RESUME_SKILL](state, info) {
        state.resumeEdit.skill = info;
    },
    [types.SET_RESUME_USERINFOO](state, info) {
        state.resumeEdit = info;
    },
    [types.SET_RESUME_EXPERIENCE](state, info) {
        state.resumeEdit.experience = info;
    },
    [types.SET_RESUME_ITEM](state, {item, info}) {
        // console.log(item);
        console.log(info);
        state.resumeEdit[item] = info;
    }
};

export default mutations;
