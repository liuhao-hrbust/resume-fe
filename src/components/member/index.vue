<template>
  <div>
    <MemberHead/>
    <MemberResume/>
  </div>
</template>

<script>
import MemberHead from './member_head/index';
import MemberResume from './member_resume/index';
export default {
    name: 'member',
    components: {
        MemberHead,
        MemberResume
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
