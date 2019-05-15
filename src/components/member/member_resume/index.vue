<template>
  <div>
    <div class="wbd-member-memberresume clearfix">
      <div class="wbd-member-resumenav">
        <ul class="wbd-member-resumenavcenter">
          <li data-hash="resume" class="active">
            <a href="/member/myresume/#resume">
              在线简历（
              <i id="web_size">40</i>）
            </a>
          </li>
        </ul>
      </div>
      <div class="wbd-member-resumecontent">
        <ul class="wbd-member-resumecontent-center clearfix">
          <li class="wbd-member-contentresume" style="display: list-item;">
            <a
              href="javascript:void(0);"
              class="wbd-member-createresume open_create_resume_panel 500dtongji"
              data-_track="PC-CV6.9.4-个人中心-首页-在线简历模块-右侧-新建简历"
            >新建简历</a>
            <a href="javascript:void(0);" class="resumeview-prev disable" style="display: inline;"></a>
            <a href="javascript:void(0);" class="resumeview-next" style="display: inline;"></a>
            <div class="wbd-member-viewoverflow">
              <div class="resumeview-panel-null" style="display: none;">
                <p>您还没创建任何简历哦~</p>
                <a
                  href="javascript:void(0);"
                  class="wbd-member-createresume open_create_resume_panel 500dtongji"
                  data-_track="PC-CV6.9.4-个人中心-首页-在线简历模块-居中-新建简历"
                >新建简历</a>
              </div>
              <div class="wbd-member-resumeview">
                <!-- 简历list -->

                <div class="resumeview-panel" v-for="item in resume_list" :key="item.resume_name">
                  <div class="resumeview-showimg"></div>
                  <div class="resumeview-showcontent">
                    <p class="resumeview-resumename">{{item.resume_name}}</p>
                    <span class="resumeview-reloadtime" data-time="20180612183545">{{item.c_time}}</span>
                    <div class="resumeview-btngroup">
                      <a
                        href="/cvresume/edit/?itemid=659&amp;resumeId=5567236"
                        class="resumeview-edit"
                      >编辑简历</a>
                      <a
                        href="javascript:void(0);"
                        data-href="http://download.500d.me/cvresume/pdf_download/500d_5567236_659_2126255_20190412113610.pdf?downmsg=577cf4eb0a3380e3ac4f5fde714d3574"
                        class="resumeview-download down_btn"
                      >下载简历</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import resumeService from './service';
export default {
    methods: {
        getResumeList() {
            resumeService.getResumeList().then(data => {
                // this.resume_list = data;
                console.log(data);
            });
        }
    },
    mounted() {
        this.getResumeList();
    },
    name: 'memberResume',
    components: {},
    data() {
        return {
            resume_list: [
                {
                    resume_name: '我的简历01',
                    c_time: '2019-9-9'
                },
                {
                    resume_name: '我的简历02',
                    c_time: '2019-9-9'
                },
                {
                    resume_name: '我的简历03',
                    c_time: '2019-9-9'
                },
                {
                    resume_name: '我的简历04',
                    c_time: '2019-9-9'
                }
            ]
        };
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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

.wbd-member-resumecontent-center {
  position: relative;
  max-width: 1550px;
  min-height: 420px;
  margin: 0 auto;

  .wbd-member-contentresume {
    z-index: 1;

    .wbd-member-createresume {
      float: right;
      margin: 24px 0;
      line-height: 24px;
      font-size: 16px;
      color: #5f6166;
    }
  }

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
}

.wbd-member-resumeview {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .resumeview-panel {
    width: 510px;
    height: 280px;
    padding: 32px 20px 32px 32px;
    line-height: 1.1;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
    font-size: 14px;
    margin: 10px;

    .resumeview-showimg {
      float: left;
      width: 160px;
      height: 212px;
      margin-right: 30px;
      background: url('../../../../static/image/jl_member6.9.4_sp.png') no-repeat -2px -215px;

      .resumeview-showcontent {
        float: right;
        position: relative;
        width: 325px;
        height: 212px;
      }
    }

    .resumeview-resumename {
      height: 20px;
      margin-bottom: 12px;
      font-size: 16px;
      color: #545a61;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .resumeview-reloadtime {
      display: inline-block;
      margin-right: 25px;
      font-size: 12px;
      color: #96a0ac;
    }

    .resumeview-btngroup {
      margin-top: 30px;

      a {
        display: inline-block;
        width: 100px;
        height: 34px;
        line-height: 32px;
        margin-right: 10px;
        border: 1px solid #00c091;
        border-radius: 4px;
        background-color: #fff;
        text-align: center;
        color: #00c091;

        $:: before {
          url('$/image/jl_member6.9.4_sp.png') no-repeat -143px -142px;
        }
      }
    }
  }
}
</style>
