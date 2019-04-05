<template>
  <div class="head">
    <div class="logo">
      <router-link to="/"></router-link>
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
export default {
    name: 'head'
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.head {
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

  .nav {
    float: right;
    position: relative;
    margin-right: 120px;
  }

  ul {
    list-style: none;
    background-color #fff;

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
