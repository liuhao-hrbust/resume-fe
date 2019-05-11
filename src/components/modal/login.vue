<template>
  <div class="login modal-child">
    <h1>用户登录</h1>
    <form>
      <div class="form-group">
        <label for="user-name">用户名</label>
        <input class="form-control" placeholder="Name" v-model="user_name" id="user-name">
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Password"
          v-model="user_password"
        >
      </div>

      <button @click="handleLogin" class="btn btn-success btn-block">登录</button>
    </form>
    <div class="message">
      <p>
        没有账号?
        <a @click="createAccount">点击创建</a>.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Service from './service';
export default {
    data() {
        return {
            user_name: '',
            user_password: '',
            username: ''
        };
    },
    methods: {
        handleLogin(e) {
            e.preventDefault();
            const params = {
                user_name: this.user_name,
                user_password: this.user_password
            };
            Service.login(params).then(
                data => {
                    this.user_name = data.user_name;
                    this.user_password = data.user_password;
                    if (data.code === 0) {
                        this.toggleLogin(false);
                        this.toggleModal(false);
                        this.setUserName(params.user_name);
                        const storage = window.localStorage;
                        storage.user_name = params.user_name;
                        this.toggleIsLogin(true);
                    }
                },
                err => {
                    console.log(err);
                }
            );
        },
        createAccount() {
            this.toggleRegister(true);
            this.toggleLogin(false);
        },
        ...mapActions({
            toggleRegister: 'toggleShowRegister',
            toggleLogin: 'toggleShowLogin',
            toggleModal: 'toggleShowModal',
            setUserName: 'editUserName',
            toggleIsLogin: 'toggleIsLogin'
        })
    }
};
</script>
