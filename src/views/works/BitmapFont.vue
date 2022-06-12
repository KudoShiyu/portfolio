<template>
  <div class="page">
    <WorkPage>
      <h1 class="wrokTitle">{{ title }}</h1>
      <span class="date">{{ date }}</span>
      <section>
        <pre>{{ desc }}</pre>
        <Link href="https://github.com/txkodo/BitmapFontConverter">ソースコード(github)</Link>
        <Tools :tools="tools" align="right" class="tools"/>
      </section>
      <video class="video" src="@/assets/images/bitmapFont/promotion.mp4" controls></video>
    </WorkPage>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WorkPage from '@/components/WorkPage.vue'
import Link from '@/atoms/Link.vue'
import Tools from '@/components/Tools.vue'
const sm = ref(document.body.clientWidth < 400)

const title = 'BitmapFont Converter'
const desc = `マインクラフトのassetのビットマップフォントデータを
ttf(基本的なフォントファイル)/woff(webフォント用のフォントファイル)に変換するツール`
const date = '2021/11'
const tools = {
  言語: ['python'],
  画像編集: ['Affinity Designer'],
  コードエディタ: ['Visual Studio Code'],
  バージョン管理: ['GitHub']
}

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #0072FF;
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

.video{
  width: 100%;
}
</style>
