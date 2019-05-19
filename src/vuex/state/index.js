const state = {
    loginState: {
        isLogin: false
    },
    modalState: {
        showLogin: false,
        showRegister: false,
        showModal: false
    },
    userInfo: {
        user_name: ''
    },
    resumeEdit: {
        resumeName: '',
        user_name: '',
        user_desc: '',
        educationInfo: ``,
        self_val: ``,
        extra: ``,
        experience: ``,
        target: ``,
        age: '2',
        addr: '',
        seniority: '',
        tel: '',
        email: '',
        resumeId: 0,
        head_path: ''
    }
};

export default state;
