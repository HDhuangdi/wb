<template>
  <div class="contact">
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
    activeIndex: 3
  })
};
</script>

<style lang="less" scoped>
.contact {
  & /deep/ .nav {
    background-color: rgb(145, 145, 145);
  }
}
</style>