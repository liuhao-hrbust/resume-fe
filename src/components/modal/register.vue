<template>
  <div class="register modal-child">
    <form>
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input
          v-model="user_name"
          type="text"
          class="form-control"
          id="nickname"
          name="nickname"
          placeholder="Nickname"
        >
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input
          v-model="user_password"
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
        >
      </div>
      <button @click="handleSubmit" class="btn btn-success btn-block">注册</button>
    </form>

    <div class="message">
      <p>
        已有账号?
        <a @click="toLogin">点击登录</a>.
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
            user_password: ''
        };
    },
    methods: {
        handleSubmit() {
            const params = {
                user_name: this.user_name,
                user_password: this.user_password
            };
            Service.register(params).then(
                data => {
                    this.user_name = data.user_name;
                    this.user_password = data.user_password;
                    if (data.code === 0) {
                        this.toggleRegister(false);
                        this.toggleModal(false);
                        this.setUserName(data.user_name);
                    }
                }
            );
        },
        toLogin() {
            this.toggleRegister(false);
            this.toggleLogin(true);
        },
        ...mapActions({
            toggleRegister: 'toggleShowRegister',
            toggleLogin: 'toggleShowLogin',
            toggleModal: 'toggleShowModal',
            setUserName: 'editUserName'
        })
    }
};
</script>
