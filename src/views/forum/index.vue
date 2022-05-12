<template>
  <div class="forum">
    <Nav v-model="activeIndex"></Nav>
    <ForumNav></ForumNav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import ForumNav from './Nav'

export default {
  components: {
    Nav,
    ForumNav
  },
  data: () => ({
    activeIndex: 3
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