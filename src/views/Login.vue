<template>
  <div>
    登录页面
    <button @click="login">登录</button>
    <button @click="logout">退出</button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.commit('SET_USER', {
        name: 'test',
      })
      this.$router.push('/')
    },
    logout() {
      this.$store.commit('user', null)
    },
  },
}
</script>
