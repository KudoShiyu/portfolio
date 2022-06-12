<template>
  <header>
    <router-link to="/"><h1 class="name">Kudo Shiyu</h1></router-link>
    <router-link to="/"><span class="close">×</span></router-link>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.close{
  font-weight: 100;
  top: -0.85rem;
  position: relative;
  font-size: 3rem;
}

header {
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  height: 1.8rem;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgba($color: #ffffff, $alpha: 0.7);
  .name {
    position: absolute;
    top: -0.3rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.3rem;
    font-weight: 500;
  }
}
</style>
