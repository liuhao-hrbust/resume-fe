<template>
  <div>
    <div class="title-wrapper">
      <h3 class="title" contenteditable="true" :style="moduleTitleStyle">{{ title }}</h3>
      <div class="triangle" :style="moduleTriangleStyle"></div>
    </div>
    <div class="line"></div>
    <slot>
      <dash-child class="desc-wrapper">
        <textarea class="desc" v-model="contents"></textarea>
      </dash-child>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
import dashChild from '../dashChild/dashChild.vue';
// eslint-disable-next-line
import { mapState, mapActions } from 'vuex';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        moduleTriangleStyle: {
            type: Object
        },
        moduleTitleStyle: {
            type: Object
        },
        lkey: {
            type: String
        }
    },
    components: {
        dashChild
    },
    methods: {
        ...mapActions({
            setValue: 'setResumeItem'
        }),
        val(icon) {
            if (icon) {
                return require('./' + icon);
            }
        },
        aaa(value) {
            // console.log(value);
            this.setValue(this.lkey, value);
        }
    },

    data() {
        return {
            contents: '',
            count: 0
        };
    },
    computed: mapState({
        content: function(state, newValue) {
            return state.resumeEdit[this.lkey];
        }
    }),
    mounted() {
        this.contents = this.content;
    },
    watch: {
        contents(newValue) {
            // console.log(newValue);
            if (this.count > 0) {
                this.setValue({ item: this.lkey, info: newValue });
            }
            this.count++;
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.title-wrapper {
  display: inline-block;
  position: relative;
}

.title {
  outline: none;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #ffffff;
  display: inline-block;
  padding: 5px 15px 4px;
  background: #009f95;
  border-bottom: 1px solid transparent;
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  right: -40px;
  margin-left: -2px;
  border: 20px solid;
  border-top-color: transparent;
  border-right-color: transparent;
}

.line {
  height: 20px;
  margin-top: -20px;
  background: #e5e5e5;
}

.desc-wrapper {
  margin-top: 20px;

  .desc {
    outline: none;
    line-height: 25px;
    height: 100px;
    width: 100%;
    resize: none;
    border: none;

    &:foucus {
      outline: none;
    }
  }
}
</style>
