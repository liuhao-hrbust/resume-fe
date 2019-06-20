<template>
  <div>
    <div class="wbd-member-memberheadbg">
      <div class="wbd-member-memberhead clearfix">
        <div class="memberhead-info">
          <div class="memberhead-avatar">
            <img src="/static/image/avatar-default.jpg" id="changehead" width="80" height="80">
          </div>
          <p class="memberhead-name">{{user_name}}</p>
          <div class="memberhead-vipinfo">
            <router-link to="/account" class="jl-tx-img 500dtongji">账号设置</router-link>
          </div>

          <div class="memberhead-date">注册时间：{{user_info.created_time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    name: 'memberHead',
    data() {
        return {
            user_info: {
                created_time: '2019-5-19'
            }
        };
    },
    computed: {
        // ...mapState({
        //     user_name: state => state.userInfo.user_name
        // }),
        user_name: function() {
            return window.localStorage.user_name;
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.wbd-member-memberheadbg {
  background-color: #fff;

  @media screen and (max-width: 1650px) {
    .wbd-member-memberhead, .wbd-member-resumenavcenter {
      width: 1240px;
    }

    .wbd-member-resumecontent-center {
      width: 1240px;
    }

    .wbd-member-resumecontent-center > li.wbd-member-contentresume {
      width: 1156px;
      left: 42px;
    }
  }

  .wbd-member-memberhead {
    max-width: 1550px;
    padding: 50px 0;
    margin: 0 auto;

    .memberhead-info {
      float: left;
      width: 450px;
      height: 80px;
      line-height: 1.1;

      .memberhead-avatar {
        float: left;
        width: 80px;
        height: 80px;
        margin-right: 15px;
        border-radius: 50%;
        overflow: hidden;
      }

      .memberhead-name {
        font-size: 24px;
        color: #5f5e5e;
        font-weight: normal;
      }

      .memberhead-date {
        font-size: 12px;
        color: #a1a1a1;
      }
    }
  }
}
</style>
