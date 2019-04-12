<template>
  <div class="jl-header">
    <div class="logo">
      <router-link to="/"></router-link>
    </div>
    <div class="jl-touxiang" id="userHead">
      <a
        class="jl-tx-img 500dtongji"
        data-_track="PC-CV6.5.0-首页-首页-顶部导航-导航栏-个人中心"
        id="user_center"
        href="/member/myresume/"
      >
        <i style="display: none;"></i>
        <img
          src="http://static.500d.me/resources/500d/images/default.jpg"
          width="48"
          height="48"
          alt
        >
        <span>个人中心</span>
      </a>
      <div class="jl-user-info">
        <ul class="user-ul-l">
          <li class="jl">
            <a class="500dtongji" data-_track href="/member/myresume/">在线简历</a>
          </li>
          <li class="qz">
            <a class="500dtongji" data-_track href="/member/myresume/#send">求职管理</a>
          </li>
        </ul>
        <ul class="user-ul-l">
          <li class="gd">
            <a class="500dtongji" data-_track href="/member/workOrder/">
              工单系统
              <s></s>
            </a>
          </li>
          <li class="dd">
            <a class="500dtongji" data-_track href="/member/order/">订单管理</a>
          </li>
          <li class="yhq">
            <a class="500dtongji" data-_track href="/member/coupon/">优惠券</a>
          </li>
        </ul>
        <ul class="user-ul-l">
          <li class="config">
            <a class="500dtongji" href="/member/set/">账号设置</a>
          </li>
          <li class="tc">
            <a class="500dtongji" data-_track href="#" id="user_logout">安全退出</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="jl-login">
      <a style id="login" class="jl-login-a 500dtongji" data-_track="PC-首页-首页-顶部导航-导航栏-登陆注册">登录 / 注册</a>
    </div>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">在线制作</router-link>
        </li>
        <li>
          <router-link to="/">模板列表</router-link>
        </li>
        <li>
          <router-link to="/">求职行家</router-link>
        </li>
        <li>
          <router-link to="/">PPT在线制作</router-link>
        </li>
        <li>
          <a href>···</a>
          <div class="jl-ej-nav">
            <ul>
              <li>
                <a
                  class="500dtongji"
                  data-_track="PC-首页-首页-顶部导航-导航栏-帮助中心"
                  href="http://help.500d.me/"
                >帮助中心</a>
              </li>
              <li>
                <a
                  class="500dtongji"
                  data-_track="PC-CV6.5.0-首页-首页-顶部导航-导航栏-求职那些事"
                  href="/article/"
                >求职那些事</a>
              </li>
              <li>
                <a
                  class="500dtongji"
                  data-_track="PC-CV6.5.0-首页-首页-顶部导航-导航栏-关于我们"
                  href="/common/joinus/"
                >关于我们</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import testService from './service';

export default {
    name: 'jl-header',
    data() {
        return {
            user: { userName: '张三', password: '1234' }
        };
    },
    mounted() {
        // console.log('aaa');
        // testService.postTest(this.user).then(data => {
        //     console.log(data);
        // }, err => {
        //     console.log(err);
        // });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.jl-header {
  padding: 0 40px;
  font-size: 14px;
  background: transparent;

  .logo {
    cursor: pointer;
    width: 142px;
    height: 30px;
    background: url('../../../static/image/index_sp.png') no-repeat 0 0;
    float: left;
    margin: 18px 0 0 0;
  }

  .jl-touxiang {
    float: right;
    position: relative;
    width: auto;
    height: 70px;
    margin: 0;
    padding-top: 21px;
    overflow: hidden;

    .jl-tx-img {
      position: relative;
      display: block;

      i {
        display: none;
        position: absolute;
        top: 0;
        left: 22px;
        width: 8px;
        height: 8px;
        background: #f62a00;
        border-radius: 20px;
      }

      img {
        float: left;
        display: block;
        width: 28px;
        height: 28px;
        margin: 0 auto;
        border-radius: 21px;
      }

      span {
        background-position: 60px 8px;
        color: #fff;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .jl-user-info {
      position: absolute;
      top: 70px;
      right: -20px;
      opacity: 0;
      width: 160px;
      background-color: #fff;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.09);
      transition: opacity 0.2s;
      border-radius: 0 0 4px 4px;
      overflow: hidden;
    }

    .user-ul-l {
      border-bottom: 1px solid #eee;
      padding: 4px 0;
    }
  }

  .nav {
    float: right;
    position: relative;
    margin-right: 120px;
  }

  .jl-login {
    float: right;
    padding-top: 20px;
    width: auto;

    .jl-login-a {
      border-color: #fff;
      color: #fff;
    }

    a {
      float: right;
      display: inline-block;
      height: 27px;
      line-height: 25px;
      padding: 0 10px;
      border: 1px solid rgb(183, 183, 183);
      border-radius: 25px;
      font-size: 14px;
      color: #808080;
      margin-left: 15px;
      transition: all 0.3s;
      -moz-transition: all 0.3s;
      -webkit-transition: all 0.3s;
      cursor: pointer;
    }

    a:hover {
      border-color: #00C091;
      background: #00C091;
      color: #fff;
    }
  }

  ul {
    list-style: none;
    background-color: #fff;

    li {
      float: left;
      position: relative;
      height: 40px;
      border-top: 4px solid transparent;
      border-left: none;
      border-right: none;
      letter-spacing: 0.4px;

      a {
        color: #fff;
        opacity: 0.8;
        text-decoration: none;
        position: relative;
        display: block;
        margin: 18px 30px;
        font-size: 14px;
      }

      .jl-ej-nav {
        width: 130px;
        left: -42px;
        position: absolute;
        top: 64px;
        z-index: 2;
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
        transition: opacity 0.25s ease 0.1s;
        overflow: hidden;
        opacity: 1;
        font-size: 12px;

        li {
          float: none;
        }

        &:hover {
          transition: opacity 0.25s ease 0.1s;
        }

        a {
          display: block !important;
          height: 36px;
          line-height: 36px;
          margin: 0;
          padding: 0;
          border-bottom: solid 1px #eee !important;
          font-size: 14px;
          color: #5F5F5F !important;
          text-align: center;
        }
      }
    }
  }
}

.nav li a:hover {
  opacity: 1;
}
</style>
