<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <Modal></Modal>
  </div>
</template>
<script>
import Aside from './components/aside/aside';
import Head from './components/homePage/head';
import './bootstrap.css';
import Modal from './components/modal/index';

export default {
    name: 'App',
    components: {
        Modal,
        Head,
        Aside
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  .clearfix {
    zoom: 1;
  }

  .clearfix {
    display: block;
  }

  .clearfix {
    height: 1%;
  }

  .aside {
    z-index: 9999;
  }

  .main {
    float: left;
    background-color: #ffffff;
    position: relative;
    left: 220px;
    width: 880px;
    height: 1377px;
    margin-top: 30px;
    margin-left: 10px;
    box-shadow: 3px 3px 15px gray;
  }
}
</style>
