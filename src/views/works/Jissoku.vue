<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <img src="@/assets/images/jissoku/all.png" alt="図面">
        <img src="@/assets/images/jissoku/zoom.png" alt="図面">
      </div>
      <div v-else>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <div class="flex">
          <img src="@/assets/images/jissoku/all.png" alt="図面">
          <img src="@/assets/images/jissoku/zoom.png" alt="図面">
        </div>
      </div>
    </WorkPage>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WorkPage from '@/components/WorkPage.vue'
const sm = ref(document.body.clientWidth < 400)

const title = '榎本家 配置図'
const desc = `実測させてした榎本家の図面
ボロノイ分割を用いた敷石の形状と、
地面の密度差スパッタリングをgrasshopperによって自動生成した`
const date = '2021/09'

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #486827;
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

.img {
  @media (max-width:1800px) {
    width: 25%;
  }

  @media (max-width:1500px) {
    width: 33.3333%;
  }

  @media (max-width:900px) {
    width: 50%;
  }

  @media (max-width:600px) {
    width: 100%;
  }

  right: 0;
  margin-left: 0;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
