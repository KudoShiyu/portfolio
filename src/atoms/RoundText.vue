<template>
<div class="round" :style="{'color': color, 'background-color' : bgcolor}">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    color: String,
    bgcolor: String
  }
})
</script>

<style scoped lang="scss">
.round{
  display: inline;
  padding: 0.1em 0.8em;
  border-end-end-radius: 0.5em;
  font-size: 1em;
}
</style>
