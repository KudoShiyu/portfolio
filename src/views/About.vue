<template>
  <div class="page">
    <Header />
    <div class="space"></div>
    <article class="article">
      <h1 class="wrokTitle">工藤思由</h1>
      <section>
        <h1>興味</h1>
        中高では美術部に所属、紙を用いた立体作品で全国大会に出場<br>

        大学は美術学部に所属し建築を専攻<br>
        デジタルでのモノづくりに興味を持ち、独学でpythonを学習。<br>
        C# / kotlin 等にも手をのばす。<br>
        html / javascript / vue を使ったフロントエンドの実装も経験あり。<br>

        好きなもの： 言語 / フォント / ゲーム / ドット絵
      </section>
      <section>
        <h1>略歴</h1>
        2013-2018 川崎市立 宿川原小学校 卒<br>
        2013-2018 神奈川県立 相模原中等教育学校 卒<br>
        2019-現在 国立 東京藝術大学 建築科
      </section>
      <section>
        <h1>資格等</h1>
        色彩検定2級<br>
        基本情報技術者<br>
        TOEIC 790点
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/uniques/Header.vue'
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}

.space {
  padding-top: 2rem;

  @media (max-width:600px) {
    padding-top: 4rem;
  }
}

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
    text-align: start;
    margin: 1rem auto;
    font-size: 1.2rem;
    color: $color-text;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}

.article {
  width: fit-content;
  right: auto;
  left: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
