<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <img src="@/assets/images/hny2021/hny2021.png" alt="2021年賀状" />
        <img src="@/assets/images/hny2021/0.jpg" alt="2021年賀状" />
        <img src="@/assets/images/hny2021/1.jpg" alt="2021年賀状" />
        <Tools :tools="tools" align="right" class="tools"/>
      </div>
      <div v-else>
        <WorkGallery :left="31">
          <template #left>
            <h1 class="wrokTitle">{{ title }}</h1>
            <span class="date">{{ date }}</span>
            <section>
              <pre>{{ desc }}</pre>
            </section>
              <Tools :tools="tools" align="right" class="tools"/>
            <img src="@/assets/images/hny2021/hny2021.png" alt="2021年賀状" />
          </template>
          <template #right>
            <img src="@/assets/images/hny2021/0.jpg" alt="2021年賀状" />
            <img src="@/assets/images/hny2021/1.jpg" alt="2021年賀状" />
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

const tools = {
  画像編集: ['Affinity Designer']
}
const title = '2021年賀状'
const desc = `2021年(丑年)の年賀状
展開図にしたがって折ることでちいさい牛乳パックができあがる`
const date = '2020/01'

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #FFCC00;
$color-text: #333333;

.page {
  color: $color-title;

  .date {
    font-size: 1.2rem;
    color: white;
    background-color: $color-title;
    padding: 0 1rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  section {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: $color-text;
  }
}

.tools{
  padding-right: 1rem;
  color: $color-text;
  width: 100%;
}
</style>
