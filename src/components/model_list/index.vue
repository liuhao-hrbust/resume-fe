<template>
  <div class="create_panel_container">
    <div class="panel_container_center">
      <div class="panel_template_content">
        <div class="template_content_title">
          <span>选择简历模板</span>
        </div>
        <div id="template_content_list" class="template_content_list">
          <div class="template_type">
            <div class="template_type_title">
              <span>时尚</span>
              <span>简历样式的2.0版本，广受求职者欢迎</span>
            </div>
            <div class="type_template_list" style="left: 0px;">
              <div class="template_card" v-for="item in list" :key="item.model_name">
                <img
                  :src="item.thumbnail_src"
                  alt=""
                >
                <div class="check_masking">
                  <button>开始编辑</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from './service';
export default {
    name: 'model_list',
    data() {
        return {
            list: []
        };
    },
    mounted() {
            Service.getModelList().then(res => {
                this.list = res.data.list;
            });
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.create_panel_container {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;
  width: 100%;
  min-width: 1210px;
  height: 100%;
  background: #f9f9f9;
  text-align: left;

  .panel_container_center {
    position: absolute;
    left: 50%;
    width: 1800px;
    margin-left: -900px;
    z-index: 3;
    background-color: #fff;

    .panel_template_content {
    //   width: 1650px;
      padding-top: 40px;
      margin: auto;

      .template_content_title {
        position: relative;
        height: 45px;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 15px;
          width: 100%;
          height: 1px;
          background-color: rgba(217, 217, 217, 0.4);
        }

        span {
          display: inline-block;
          position: absolute;
          left: 50%;
          line-height: 1.2;
          margin-left: -75px;
          z-index: 1;
          padding: 0 8px;
          letter-spacing: 1px;
          color: #232323;
          font-size: 24px;
          background-color: #fff;

          &::after {
            content: '';
            position: absolute;
            top: 40px;
            left: 50%;
            width: 40px;
            margin-left: -20px;
            height: 3px;
            background-color: #24d3b6;
          }
        }
      }

      .template_content_list {
        width: 100%;
        padding: 30px 0 70px;
        overflow: hidden;

        .template_type {
          margin-bottom: 25px;

          .template_type_title {
            span:first-child {
              font-size: 24px;
              color: #2d2d2d;
            }

            span:last-child {
              padding-left: 10px;
              font-size: 14px;
              color: #919191;

              &::before {
                content: '/';
                display: inline;
                padding-right: 10px;
              }
            }
          }
        }

        .type_template_list {
          padding-top: 20px;
          overflow: hidden;
          display: flex;

          .template_card {
            justify-content: space-around;
            width: 250px;
            height: 350px;
            margin: 0 30px 40px 0;
            border: 6px solid #eee;
            overflow: hidden;
            cursor: pointer;
            position: relative;

            &>img {
              width: 100%;
              height: 100%;
            }

            .check_masking {
              opacity: 1;

              button {
                display: block;
                box-sizing: border-box;
                position: absolute;
                top: 97%;
                left: 83%;
                width: 68px;
                height: 32px;
                margin: -27px 0 0 -27px;
                background-color: #00c091;
                border-radius: 5px;
                font-size: 12px;

                // &::after {
                //   content: '';
                //   -webkit-box-sizing: border-box;
                //   -moz-box-sizing: border-box;
                //   box-sizing: border-box;
                //   position: absolute;
                //   top: 16px;
                //   left: 14px;
                //   width: 25px;
                //   height: 15px;
                //   border: 5px solid #fff;
                //   border-right: none;
                //   border-top: none;
                //   -webkit-transform: rotate(-45deg);
                //   -moz-transform: rotate(-45deg);
                //   -ms-transform: rotate(-45deg);
                //   transform: rotate(-45deg);
                // }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 1410px) and (max-width: 1810px) {
  .create_panel_container .panel_container_center {
    width: 1400px;
    margin-left: -700px;
  }

  .panel_container_center .panel_template_content {
    width: 1240px;
  }

  .template_content_list .template_card {
    margin-right: 80px;
  }

  .template_content_list .template_card:nth-child(6n) {
    margin-right: 80px;
  }

  .template_content_list .template_card:nth-child(4n) {
    margin-right: 0;
  }

  .start_footer_center {
    width: 1240px;
  }
}
</style>
