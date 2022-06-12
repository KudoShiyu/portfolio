<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Tools :tools="tools" align="right" class="tools" :maxwidth="true"/>
        </section>
        <img src="@/assets/images/peoplePlot/noon.png" alt="プロット">
        <img src="@/assets/images/peoplePlot/sunset.png" alt="プロット">
        <img src="@/assets/images/peoplePlot/night.png" alt="プロット">
      </div>
    </WorkPage>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WorkPage from '@/components/WorkPage.vue'
import Link from '@/atoms/Link.vue'
import Tools from '@/components/Tools.vue'
const sm = ref(document.body.clientWidth < 400)

const title = 'Sign UI Generator'
const desc = `スマートフォンのGPSを用いた人流プロット
街を歩きながら人と遭遇した地点の座標を記録しプロットする
Androidの専用アプリケーションを開発した`
const date = '2021/10'
const tools = {
  開発言語: ['kotlin'],
  開発環境: ['Android Studio'],
  プロット言語: ['python']
}

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #FF00C7;
$color-text: #333333;

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

.frame{
  width:100%;
  height: 110vh;
}
</style>
