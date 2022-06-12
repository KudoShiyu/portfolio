<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
          <Link href="http://itojuku.or.jp/course/children/">子ども建築塾HP</Link>
          <Link href="https://petabo-shop.com">ペタボー公式ショップ</Link>
        </section>
        <img class="img" src='@/assets/images/petabo/3.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/0.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/1.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/4.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/5.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/6.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/8.jpg' alt="">
      </div>
      <div v-else>
        <WorkGallery :left="40">
          <template #left>
            <img class="img" src='@/assets/images/petabo/6.jpg' alt="">
            <div class="caption">
              <h1 class="wrokTitle">{{ title }}</h1>
              <span class="date">{{ date }}</span>
              <section>
                <pre>{{ desc }}</pre>
                <Link href="http://itojuku.or.jp/course/children/">子ども建築塾HP</Link>
                <Link href="https://petabo-shop.com">ペタボー公式ショップ</Link>
              </section>
            </div>
            <img class="img" src='@/assets/images/petabo/8.jpg' alt="">
            <img class="img" src='@/assets/images/petabo/5.jpg' alt="">
          </template>
          <template #right>
            <img class="img" src='@/assets/images/petabo/3.jpg' alt="">
            <img class="img" src='@/assets/images/petabo/1.jpg' alt="">
            <img class="img" src='@/assets/images/petabo/4.jpg' alt="">
            <img class="img" src='@/assets/images/petabo/0.jpg' alt="">
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
const sm = ref(document.body.clientWidth < 400)

const title = 'ペタボーの大空'
const desc = `面ファスナーの知育玩具「ペタボー」を用いた大規模作品
子ども建築塾のTAとして製作、展示に参加した`
const date = '2021/09'

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #0077FF;
$color-text: #333333;

.page {
  color: $color-title;

  .date {
    font-size: 1.2rem;
    color: white;
    background-color: $color-title;
    padding: 0 1rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  section {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: $color-text;
  }
}

.tools{
  padding-right: 1rem;
  color: $color-text;
  width: 100%;
}

.caption{
  margin: 5rem 0;
}
</style>
