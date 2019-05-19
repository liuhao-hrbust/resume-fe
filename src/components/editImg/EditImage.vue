<template>
  <div class="edit-image-wrapper">
    <div
      class="edit-image"
      :class="{'circle':isCircle}"
      :style="{ width: width + 'px', height: height + 'px'}"
    >
      <div class="img-wrapper" :class="{'circle':isCircle}">
        <img :src="imgSrc" alt="image" :class="{ circle: isCircle }" id="face">
      </div>
      <form method="post" enctype="multipart/form-data" id="imageForm">
        <input
          type="file"
          accept="image/gif, image/jpeg, image/jpg, image/png"
          name="imageFile"
          @change="changeImage"
        >
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
import jquery from '@/common/util/jquery';
import '@/common/util/jquery.form.min';
import { mapState } from 'vuex';

export default {
    name: 'editImg',
    props: {
        width: {
            type: String,
            default: '36'
        },
        height: {
            type: String,
            default: '36'
        },
        // src: {
        //     type: String,
        //     default: require('@/assets/logo.png')
        // },
        isCircle: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            imgSrc: this.src,
            isActive: false
        };
    },
    computed: mapState({
        src: state => state.resumeEdit.head_path
    }),
    // mounted() {
    //     console.log(this.src);
    // },
    methods: {
        changeImage: function(evt) {
            let _this = this;
            let reader = new FileReader();
            let file = evt.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function(evt) {
                _this.imgSrc = evt.target.result;
                _this.faceUpload(file);
            };
        },
        showDash() {
            this.isActive = true;
        },
        hideDash() {
            this.isActive = false;
        },
        faceUpload(file) {
            const form = jquery('#imageForm');
            // var faceForm = new FormData();
            // faceForm.append('face', file);
            // faceForm.append('id', 100);
            const options = {
                xhrFields: {
                    withCredentials: true
                },
                type: 'post',
                url: 'http://127.0.0.1:3000/users/uploadHead.do',
                // data: faceForm,
                // async: true, // 是否异步
                // processData: false,
                // contentType: false,
                success: function() {
                    console.log('ok');
                }
            };
            form.ajaxSubmit(options);
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.edit-image-wrapper {
  text-align: center;

  .edit-image {
    position: relative;
    display: inline-block;
    background-color: #e5e5e5;
    box-sizing: border-box;
    padding: 3px;

    .img-wrapper {
      width: 100%;
      height: 100%;
      background-color: #ffffff;

      img {
        width: 100%;
        height: 100%;
      }
    }

    input {
      display: inline-block;
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
}

.circle {
  border-radius: 100%;
}
</style>
