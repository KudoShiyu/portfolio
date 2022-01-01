<template>
  <div id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  padding: 30px;
a {
    font-weight: bold;
    color: $c_gray;
    &.router-link-exact-active {
      color: $c_green;
    }
  }
}
</style>
