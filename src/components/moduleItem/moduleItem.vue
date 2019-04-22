<template>
  <div>
    <img class="icon-mod" :src="val(moduleIcon)" :style="moduleIconStyle">
    <h3 class="title" contenteditable="true" :style="moduleTitleStyle">{{ title }}</h3>
    <slot>
      <dash-child class="desc-wrapper">
        <textarea class="desc" contenteditable="true" v-model="contents"></textarea>
      </dash-child>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
import dashParent from '../dashParent/dashParent.vue';
import dashChild from '../dashChild/dashChild.vue';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        moduleIconStyle: {
            type: Object
        },
        moduleTitleStyle: {
            type: Object
        },
        moduleIcon: {
            type: String,
            default: ''
        },
        content: {
            type: String
        }
    },
    components: {
        dashParent,
        dashChild
    },
    methods: {
        val(icon) {
            if (icon) {
                return require('./' + icon);
            }
        }
    },
    data() {
        return {
            contents: ``
        };
    },
    mounted() {
        this.contents = this.content;
        // console.log(this.content[0]);
    },
    watch: {
        contents: function () {
            this.$hub.$emit('changeUserInfo', this.title, this.contents);
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.icon-mod {
  width: 30px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
}

.title {
  margin-left: 40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  outline: none;
  border-bottom: 1px solid transparent;
}

.desc-wrapper {
  margin-top: 20px;

  .desc {
    outline: none;
    line-height: 25px;

    &:foucus {
      outline: none;
    }
  }
}
</style>
