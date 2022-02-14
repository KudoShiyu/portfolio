<template>
<div class="flex">
  <div class="a" :style="{width:ratio+'%'}">
    <slot name="0"></slot>
  </div>
  <div class="b" :style="{width:(100 - ratio)+'%'}">
    <slot name="1"></slot>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    ratio: {
      type: Number,
      default: 50
    }
  }
})
</script>

<style scoped lang="scss">
.flex{
  display: flex;
  flex-flow: row;
  align-items: flex-start;
}
</style>
