<template>
  <div class="gallery">
    <div class="right" :style="`width:${left}%`">
      <slot name="right"></slot>
    </div>
    <div class="left" :style="`width:${100 - left}%`">
      <slot name="left"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
interface Props {
  left: number
}

withDefaults(
  defineProps<Props>(),
  {
    left: 50
  }
)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: nowrap;
}

.right {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 50%;
}

.left {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 50%;
}
</style>
