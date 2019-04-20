<template>
  <div class="login">
    <h1>用户登录</h1>
    <form id="login_form">
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
import Service from './service';
import actions from '@/vuex/actions/index';
export default {
    data() {
        return {
            user_name: '',
            user_password: ''
        };
    },
    methods: {
        handleLogin() {
            const params = {
                user_name: this.user_name,
                user_password: this.user_password
            };
            Service.userLogin(params).then(
                data => {
                    this.user_name = data.user_name;
                    this.user_password = data.user_password;
                },
                err => {
                    console.log(err);
                }
            );
        },
        createAccount() {}
    },
    vuex: {
        actions
    }
};
</script>
