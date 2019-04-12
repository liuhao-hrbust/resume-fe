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
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: black;
    display: none;
}
</style>
