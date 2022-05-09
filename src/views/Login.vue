<template>
  <div class="login">
    <Nav v-model="activeIndex"></Nav>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  },
  data: () => ({
    activeIndex: 4
  })
};
</script>

<style lang="less" scoped>
.login {
  & /deep/ .nav {
    background-color: rgb(145, 145, 145);
  }
}
</style>