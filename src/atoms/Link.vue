<template>
<a :href="href" target="_blank" rel="noopener noreferrer">
<slot></slot>
</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    href: String
  }
})
</script>

<style scoped lang="scss">
a{
  text-decoration: underline;
}
</style>
