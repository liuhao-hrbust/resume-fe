<template>
  <div>
    <h1>修改密码</h1>
    <form>

      <div class="form-group">
        <label for="password">原密码</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Password"
          v-model="user_password"
        >
      </div>
      <div class="form-group">
        <label for="npassword">新密码</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="npassword"
          placeholder="Password"
          v-model="nuser_password"
        >
      </div>

      <button @click="handleChange" class="btn btn-success btn-block">修改</button>
    </form>
  </div>
</template>

<script>
import Service from './Service';
export default {
    data() {
        return {
            user_name: window.localStorage.user_name,
            user_password: '',
            nuser_password: ''
        };
    },
    methods: {
        handleChange(e) {
            e.preventDefault();
            const params = {
                user_name: this.user_name,
                user_password: this.user_password,
                nuser_password: this.nuser_password
            };
            Service.changePassword(params).then(
                data => {
                    if (data.status === '00008') {
                        alert(data.msg);
                    } else {
                        alert(data.error);
                    }
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
};
</script>
