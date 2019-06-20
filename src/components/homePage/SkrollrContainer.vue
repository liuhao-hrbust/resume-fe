<template>
  <div class="index-skrollr-container">
    <div class="jl-index-bj index-skrollr-content">
      <div class="g-w1240 index-bjcontent-cneter">
        <div class="jl-index-text">
          <h1>备受好评的求职利器，HR专家联名推荐</h1>
        </div>
        <div class="jl-index-startmake">
          <router-link to="/models" class="free-resume-btn 500dtongji">
            <i></i>免费制作简历
          </router-link>
        </div>
      </div>
      <ul class="index-banner-slide">
        <li class>
          <img src="../../../static/image/index_banner1.png">
        </li>
        <!-- <li class>
          <img src="../../../static/image/index_banner2.png">
        </li>
        <li class="show">
          <img src="../../../static/image/index_banner3.png">
        </li>
        <li class>
          <img src="../../../static/image/index_banner4.png">
        </li>-->
      </ul>
      <div class="jl-index-bannerfoot">
        <ul class="g-w1240">
          <li class="bannerfoot-text">
            <i></i>
            <span>高效</span>
            <p>一键生成 , 自动排版 , 轻松编辑</p>
          </li>
          <li class="bannerfoot-text">
            <i></i>
            <span>专业</span>
            <p>3000+模板范例 , 五百强HR入驻</p>
          </li>
          <li class="bannerfoot-text">
            <i></i>
            <span>智能</span>
            <p>智能诊断，免费获取简历报告</p>
          </li>
          <li class="bannerfoot-text">
            <i></i>
            <span>云端</span>
            <p>实时保持，多端同步，随时查看</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SkrollrContainer',
    components: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.index-skrollr-container {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 640px;

  .jl-index-bj {
    position: relative;
    width: 100%;
    height: 640px;
    background-color: #a5a8b0;
    background-image: linear-gradient(45deg, #a5a8b0 0%, #b5b8bf 100%), linear-gradient(#e0e0e0, #e0e0e0);

    .index-bjcontent-cneter {
      position: relative;
      height: 100%;
      z-index: 10;

      .jl-index-startmake {
        position: absolute;
        top: 320px;
        left: 0;
        width: 200px;
        height: 50px;
        border-radius: 50px;
        background-color: #fff;

        .free-resume-btn {
          float: right;
          width: 200px;
          height: 50px;
          line-height: 48px;
          font-size: 16px;
          cursor: pointer;
          background-color: #00C090;
          text-align: center;
          color: #fff;
          border-radius: 0 50px 50px 0;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          -ms-transition: all 0.3s;
          transition: all 0.3s;
        }
      }

      .jl-index-text {
        position: absolute;
        top: 148px;
        left: 0;
        width: 800px;
        height: 100px;
        padding-top: 70px;
        background: url('../../../static/image/index_banner_text.png') no-repeat;

        h1 {
          color: #fff;
          font-size: 20px;
          font-weight: normal;
        }
      }
    }

    .index-banner-slide {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;

      li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        -webkit-transition: opacity 0.75s;
        -moz-transition: opacity 0.75s;
        -ms-transition: opacity 0.75s;
        transition: opacity 0.75s;

        img {
          position: absolute;
          left: 50%;
          bottom: 0;
        }
      }
    }

    .jl-index-bannerfoot {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
      width: 100%;
      height: 94px;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 0;

      .bannerfoot-text {
        display: inline-block;
        width: 220px;
        height: 100%;
        padding-top: 20px;
        font-size: 14px;
        text-align: center;

        &+ .bannerfoot-text {
          margin-left: 120px;
        }

        span {
          display: inline-block;
          vertical-align: middle;
          font-size: 18px;
          color: #fff;
        }

        p {
          margin-top: 12px;
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }

  .g-w1240 {
    width: 1240px;
    margin: 0 auto;
  }
}
</style>
