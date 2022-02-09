<template>
  <font-awesome-icon icon="xmark" :style="{color:color}" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    color: String
  }
})
</script>

<style scoped lang="scss">
</style>
