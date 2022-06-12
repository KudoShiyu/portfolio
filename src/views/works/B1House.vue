<template>
  <div class="page">
    <WorkPage>
      <div>
        <h1 class="wrokTitle">
          軽井沢の山荘
        </h1>
        <span class="date">2019/06</span>
        <section>
          軽井沢にある南が丘の山荘模型<br>
          1/100<br>
          太陽に合わせ光の向きを変えて撮影<br>
        </section>
        <div class="flex">
          <img class="img" src='@/assets/images/b1House/0.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/1.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/2.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/3.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/4.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/5.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/6.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/7.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/8.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/9.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/10.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/11.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/12.jpg' alt="">
          <Tools :tools="tools" align="right" class="tools" />
        </div>
      </div>
    </WorkPage>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WorkPage from '@/components/WorkPage.vue'
import Tools from '@/components/Tools.vue'
const sm = ref(document.body.clientWidth < 400)
const tools = {
  材料: ['クラフト紙'],
  建築設計: ['益子アトリエ']
}
onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: crimson;
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
  justify-content: start;
}

.tools{
  margin-top: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  bottom: 0;
  right: 0;
  height: inherit;
}
</style>
