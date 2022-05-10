<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    window.__IS_PINIA_INSTALLED__ = true;
  },
};
</script>

<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #000;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
