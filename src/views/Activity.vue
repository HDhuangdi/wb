<template>
  <div class="activity">
    <Nav v-model="activeIndex"></Nav>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import { userStore } from "@/store";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 1,
    userStore: userStore(),
  }),
  created() {
    if (!this.userStore.isLogin) {
      this.$message({
        showClose: true,
        message: "Please login first",
        type: "warning",
      });
      this.$router.replace("/login");
    }
  },
}
</script>

<style lang="less" scoped>
.activity {
  background: rgba(13, 37, 71, 1);
}
</style>