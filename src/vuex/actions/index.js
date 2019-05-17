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
    editUserName({ commit }, name) {
        commit(types.EDIT_USER_NAME, name);
    },
    setuser_name({ commit }, name) {
        commit(types.SET_RESUME_USER_NAME, name);
    },
    setuser_desc({ commit }, name) {
        commit(types.SET_RESUME_USER_DESC, name);
    },
    setResumeInfo({ commit }, info) {
        commit(types.SET_RESUME_USERINFOO, info);
    },
    setskill({ commit }, info) {
        commit(types.SET_RESUME_SKILL, info);
    },
    setexperience({ commit }, info) {
        commit(types.SET_RESUME_EXPERIENCE, info);
    },
    seteducationInfo({ commit }, info) {
        commit(types.SET_RESUME_EDUCATION_INFO, info);
    },
    settarget({ commit }, info) {
        commit(types.SET_RESUME_TARGET, info);
    },
    setself_val({ commit }, info) {
        commit(types.SET_RESUME_SELF_VAL, info);
    },
    setextra({ commit }, info) {
        commit(types.SET_RESUME_EXTRA, info);
    },
    setResumeItem({ commit }, item, info) {
        commit(types.SET_RESUME_ITEM, item, info);
    },
    setDetailItem({ commit }, item, info) {
        commit(types.SET_DETAIL_ITEM, item, info);
    },
    setResumeName({ commit }, info) {
        commit(types.SET_RESUME_NAME, info);
    },
    setResumeId({ commit }, info) {
        commit(types.SET_RESUME_ID, info);
    }
};

export default actions;
