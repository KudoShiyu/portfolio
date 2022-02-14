<template>
  <Work
    :src="require('@/assets/images/jissoku/main.png')"
    time="2021/09"
    alt="榎本家 配置図"
    captionbg="black"
    color="white"
    :tools="{
          図面: ['rhinoceros 6','grasshopper','affinity designer']
        }"
  >
    <template #title>
      <span>榎本家 配置図</span>
    </template>
    <template #description>
      <section>
        実測させていただいた榎本家の図面<br><br>
        ボロノイ分割を用いた敷石の形状と、
        地面の密度差スパッタリングをgrasshopperによって自動生成した
      </section>
    </template>
    <template #pics>
      <img src="@/assets/images/jissoku/all.png" alt="図面">
      <img src="@/assets/images/jissoku/zoom.png" alt="図面">
    </template>
  </Work>

</template>

<script lang="ts">
import Work from '@/components/Work.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Work
  }
})
</script>

<style scoped lang="scss">
img {
  background-color: #fff;
  margin-bottom: 0.5rem;
  width: 100%;
}
</style>
