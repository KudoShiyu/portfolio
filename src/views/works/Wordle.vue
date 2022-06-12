<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Link href="https://www.nytimes.com/games/wordle/index.html">Wordleサイト</Link>
          <Link href="https://github.com/txkodo/wordle">ソースコード(github)</Link>
          <Tools :tools="tools" align="right" class="tools"/>
        </section>
        <img src="@/assets/images/wordle/ans.png" class="image" alt="ポートフォリオ" />
        <img src="@/assets/images/wordle/dialogue.png" class="image" alt="ポートフォリオ" />
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

const title = 'Wordle Solver'
const desc = `英単語を当てるゲーム"Wordle"のソルバー
CLIダイアログを使い"Wordle"を解くことができる
すべての単語に対し6手以内で回答できる
平均3.46手`
const date = '2022/02'
const tools = {
  言語: ['python']
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
