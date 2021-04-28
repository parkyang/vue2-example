<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
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

<script>
export default {
  computed: {
    layout() {
      const layout = (this.$route.meta && this.$route.meta.layout) || 'Default'
      return `${layout}Layout`
    },
  },
}
</script>
