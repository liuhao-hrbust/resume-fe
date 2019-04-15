<template>
  <div class="modal">
    <Register></Register>
  </div>
</template>

<script>
import Register from './register';
export default {
    name: 'modal',
    components: {
        Register
    }
};
</script>

<style>
.modal {
    position: relative;
    height: 800px;
    opacity: 0.5;
    background-color: black;
    /* display: none; */
}
</style>
