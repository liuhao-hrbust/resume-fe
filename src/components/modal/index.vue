<template>
  <div class="modall" v-if="showModal">
    <div class="modal-container">
      <Register v-if="showRegister"/>
      <Login v-if="showLogin"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Register from './register';
import Login from './login';
export default {
    name: 'modal',
    components: {
        Register,
        Login
    },
    computed: mapState({
        showLogin: state => state.modalState.showLogin,
        showRegister: state => state.modalState.showRegister,
        showModal: state => state.modalState.showModal
    })
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.modall {
  position: relative;
  height: 100%;
  opacity: 0.7;
  z-index: 2;

  .modal-container {
    background: black;
    height: 100VH;
  }
}
</style>
