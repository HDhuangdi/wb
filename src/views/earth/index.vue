<template>
  <div id="webgl-container"></div>
</template>

<script>
import Render from "./index";
export default {
  data: () => ({
    obj: null,
  }),
  components: {},
  mounted() {
    this.obj = new Render();
  },
  beforeDestroy() {
    this.obj.clearScene();
  },
};
</script>

<style lang="less">
#webgl-container {
  background-image: linear-gradient(to bottom, rgb(162,171,230), rgb(151,198,230));
}
</style>
