<template>
  <header>
    <router-link to="/"><h1 class="name">Kudo Shiyu</h1></router-link>
    <ul class="tabs">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Works</router-link></li>
      <li><router-link to="/about">Profile</router-link></li>
      <li><router-link to="/about">Contact</router-link></li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 3vw;

  .name {
    padding: 1vw 2vw;
    display: inline;
    font-size: 1.2rem;
    font-weight: 900;
  }

  .tabs {
    padding: 1vw 2vw;
    display: inline;
    li {
      display: inline;
      & + li::before {
        content: " | ";
      }
    }

  a {
      font-weight: bold;
      color: $c_gray;
      &.router-link-exact-active {
        color: $c_green;
      }
    }
  }
  padding: 30px;
}
</style>
