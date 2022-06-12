<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Link href="https://mojimiru.github.io/paraglyph/">ぱらぐりふ</Link>
          <Link href="https://github.com/mojimiru/paraglyph">ソースコード(github)</Link>
          <Tools :tools="tools" align="right" class="tools" />
        </section>
        <iframe class="frame" src="https://mojimiru.github.io/paraglyph/"></iframe>
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

const title = 'ぱらぐりふ'
const desc = `日本語フォントの試し書きができるサイト
「ぱらぐりふ」
サブセット化したフォントをサーバーと通信することで読み込み時間を短縮している`
const date = '2022/05'
const tools = {
  フロントエンド: ['vue 3', 'typeceript', 'scss'],
  バックエンド: ['python']
}

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #FFA832;
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

.frame {
  width: 100%;
  height: 90vh;
}

.tools {
  display: block;
  margin-right: 1rem;
  right: 0;
}

.image {
  padding: 0 10rem;
}
</style>
