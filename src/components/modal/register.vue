<template>
  <div class="register">
    <div class="form-group">
      <label for="email">邮箱</label>
      <input
        type="email"
        v-model="user.user_email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Email"
        autofocus
      >
    </div>
    <div class="form-group">
      <label for="nickname">昵称</label>
      <input
        v-model="user.user_name"
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
        v-model="user.user_password"
        type="password"
        class="form-control"
        id="password"
        name="password"
        placeholder="Password"
      >
    </div>
    <button @click="handleSubmit" class="btn btn-success btn-block">注册</button>
    <div class="message">
      <p>
        已有账号?
        <a href="/login">点击登录</a>.
      </p>
    </div>
  </div>
</template>

<script>
import Service from './service';
export default {
    name: 'register',
    data() {
        return {
            user: {
                user_email: '',
                user_name: '',
                user_password: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            Service.register(this.user).then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style>
.register {
    position: fixed;
    translate: -50% -50%;
    left: 50%;
    top: 50%;
    z-index: 2;
}
</style>
