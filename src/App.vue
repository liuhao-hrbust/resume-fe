<template>
  <HomePage></HomePage>
</template>
<script>
import HomePage from './components/homePage/index';

export default {
    name: 'App',
    components: {
        HomePage
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
