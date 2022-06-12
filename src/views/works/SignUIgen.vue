<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Link href="https://txkodo.github.io/SignUIgen/">webページ</Link>
          <Link href="https://github.com/txkodo/SignUIgen">ソースコード(github)</Link>
          <Tools :tools="tools" align="right" class="tools"/>
        </section>
        <iframe class="frame" src="https://txkodo.github.io/SignUIgen/"></iframe>
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
const desc = `GUIから.mcfunction形式のプログラムを生成するWebアプリケーション。
        生成されたプログラムファイルはZip化してダウンロードされる。`
const date = '2021/08'
const tools = { 言語: ['html', 'scss', 'typescript'] }

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #80C130;
$color-text: #634D39;

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
