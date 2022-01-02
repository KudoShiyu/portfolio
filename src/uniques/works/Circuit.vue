<template>
  <Work :src="require('@/assets/images/circuit/電子回路bold.png')" alt="電子回路">
    <template #description>
      <span>
        電子回路をイメージしたタイポグラフィー
      </span>
    </template>
    <div class="image">
      <img src="@/assets/images/circuit/電子回路bold.png" alt="電子回路">
    </div>
    <div class="image">
      <img src="@/assets/images/circuit/電子回路.png" alt="電子回路">
    </div>
    <section>電子回路をイメージしたタイポグラフィー<br>使用ツール: Affinity Designer</section>
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
export default class Circuit extends Vue {}
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
