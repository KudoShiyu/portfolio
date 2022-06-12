<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <Tools :tools="tools" align="right" class="tools" />
        <img class="img" src='@/assets/images/unit/5.jpg' alt="">
        <img class="img" src='@/assets/images/unit/4.jpg' alt="">
        <img class="img" src='@/assets/images/unit/2.jpg' alt="">
      </div>
      <div v-else>
        <WorkGallery :left="40.93">
          <template #left>
            <div class="caption">
              <h1 class="wrokTitle">{{ title }}</h1>
              <span class="date">{{ date }}</span>
              <section>
                <pre>{{ desc }}</pre>
              </section>
            </div>
            <Tools :tools="tools" align="right" class="tools" />
            <img class="img" src='@/assets/images/unit/5.jpg' alt="">
          </template>
          <template #right>
            <img class="img" src='@/assets/images/unit/4.jpg' alt="">
            <img class="img" src='@/assets/images/unit/2.jpg' alt="">
          </template>
        </WorkGallery>
      </div>
    </WorkPage>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WorkPage from '@/components/WorkPage.vue'
import WorkGallery from '@/components/WorkGallery.vue'
import Tools from '@/components/Tools.vue'
const sm = ref(document.body.clientWidth < 400)

const title = 'やどりぎ'
const desc = `ボール紙による箱を角でジョイントすることで広がってゆくユニット。
黄金比の菱形を組み合わせた非周期的な空間充填を実現しようとしたが、強度が及ばず非周期とはならなかった。`
const date = '2020/08'
const tools = {
  素材: ['ボール紙', 'ラミン棒']
}
onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #001D93;
$color-text: #000568;

.page {
  color: $color-title;

  .date {
    font-size: 1.2rem;
    color: white;
    background-color: $color-title;
    padding: 0 1rem;
  }

  section {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: $color-text;
  }
}
</style>
