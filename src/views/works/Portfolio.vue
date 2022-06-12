<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Link href="https://github.com/KudoShiyu/portfolio">ソースコード(github)</Link>
          <Tools :tools="tools" align="right" class="tools"/>
        </section>
        <img src="@/assets/images/portfolio/clip.png" class="image" alt="ポートフォリオ" />
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

const title = 'Portfolio'
const desc = `フレームワーク"Vue"を用いて開発したポートフォリオ用ホームページ。<br>
class-style component / Composition API を用い、TypeScriptとscssを併用して開発を行った。<br>
バージョン管理、公開はGitHub(Pages)で行っている。`
const date = '2022/02'
const tools = {
  言語: ['Vue3', 'TypeScript', 'scss'],
  コードエディタ: ['Visual Studio Code'],
  デプロイ: ['GitHub']
}

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

.frame {
  width: 100%;
  height: 110vh;
}

.tools{
  display: block;
  margin-right: 1rem;
  right: 0;
}

.image{
  padding: 0 10rem;
}
</style>
