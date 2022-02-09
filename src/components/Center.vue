<template>
<div class="center">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class Center extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.center {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
</style>
