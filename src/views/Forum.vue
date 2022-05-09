<template>
  <div class="forum">
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
    activeIndex: 2
  })
};
</script>

<style lang="less" scoped>
.forum {
  & /deep/ .nav {
    background-color: rgb(145, 145, 145);
  }
}
</style>