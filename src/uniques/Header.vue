<template>
  <header>
    <router-link to="/"><h1 class="name">Kudo Shiyu</h1></router-link>
    <ul class="tabs">
      <li class="tab"><router-link to="/">Works</router-link></li>
      <li class="tab"><router-link to="/about">Profile</router-link></li>
      <li class="tab"><router-link to="/about">Contact</router-link></li>
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
  padding-top: 10px;
  border-bottom-color: black ;
  border-bottom-width: 1px ;
  .name {
    padding: 1vw 2vw;
    font-size: 1.2rem;
    font-weight: 900;
  }
  .tabs {
    padding: 1vw 2vw;
    position: relative;
    height: 100%;
    bottom: 0;
    li {
      display: inline;
      & + li::before {
        content: " | ";
      }
    }
    a {
      font-weight: 500;
      color: $c_gray;
      &.router-link-exact-active {
        color: $c_green;
      }
    }
  }
}
</style>
