<template>
  <Work :src="require('@/assets/images/circuit/電子回路bold.png')" alt="電子回路">
  </Work>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Work from '@/components/Work.vue'
@Options({
  components: {
    Work
  }
})
export default class Portfolio extends Vue {}
</script>

<style scoped lang="scss">
span{
  color: white;
}
.image{
  width: auto;
  margin: 10px;
}
img{
  width: 100%;
}
section{
  padding-bottom: 10px;
}
</style>
