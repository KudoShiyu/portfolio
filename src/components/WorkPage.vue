<template>
  <div class="work">
    <WorkHeader/>
    <div class="page"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import WorkHeader from '@/uniques/WorkHeader.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page{
  padding-top: 2rem;
  @media (max-width:600px) {
    padding-top: 4rem;
  }
}
</style>
