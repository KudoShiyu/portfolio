<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <img src="@/assets/images/circuit/電子回路bold.png" alt="電子回路" />
        <img src="@/assets/images/circuit/電子回路.png" alt="電子回路" />
        <img src="@/assets/images/circuit/電子回路tate.png" alt="電子回路" />
        <Tools :tools="tools" align="right" class="tools" />
      </div>
      <div v-else>
        <WorkGallery :left="40">
          <template #left>
            <div class="caption">
              <h1 class="wrokTitle">{{ title }}</h1>
              <span class="date">{{ date }}</span>
              <section>
                <pre>{{ desc }}</pre>
              </section>
            </div>
            <Tools :tools="tools" align="right" class="tools" />
            <img src="@/assets/images/circuit/電子回路.png" alt="電子回路" />
            <img src="@/assets/images/circuit/電子回路bold.png" alt="電子回路" />
          </template>
          <template #right>
            <img src="@/assets/images/circuit/電子回路tate.png" alt="電子回路" />
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

const title = 'タイポグラフィ'
const desc = '電子回路をイメージしたタイポグラフィー 太字/細字'
const date = '2021/06'
const tools = {
  画像編集: ['Affinity Designer']
}

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #666666;
$color-text: #3F3523;

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
