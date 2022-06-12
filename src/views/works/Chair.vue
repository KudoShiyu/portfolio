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
        <img class="img" src='@/assets/images/chair/7.jpg' alt="">
        <img class="img" src='@/assets/images/chair/3.jpg' alt="">
        <img class="img" src='@/assets/images/chair/5.jpg' alt="">
      </div>
      <div v-else>
        <WorkGallery :left="40.5">
          <template #left>
            <div class="caption">
              <h1 class="wrokTitle">{{ title }}</h1>
              <span class="date">{{ date }}</span>
              <section>
                <pre>{{ desc }}</pre>
              </section>
            </div>
            <Tools :tools="tools" align="right" class="tools" />
            <img class="img" src='@/assets/images/chair/5.jpg' alt="">
          </template>
          <template #right>
            <img class="img" src='@/assets/images/chair/3.jpg' alt="">
            <img class="img" src='@/assets/images/chair/7.jpg' alt="">
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
const desc = `柱や壁に寄りかかり、自立しない椅子。
木材の選定、製材から椅子への加工まで一貫して行った。`
const date = '2019/09'
const tools = { 材木: ['タモ'] }
onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #442F16;
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
