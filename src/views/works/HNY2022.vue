<template>
  <div class="page">
    <WorkPage>
      <div v-if="sm">
        <h1 class="wrokTitle">{{ title }}</h1>
        <span class="date">{{ date }}</span>
        <section>
          <pre>{{ desc }}</pre>
        </section>
        <img src="@/assets/images/hny2022/render.jpg" alt="電子回路" />
        <img src="@/assets/images/hny2022/shaded.png" alt="電子回路" />
        <img src="@/assets/images/hny2022/back.png" alt="電子回路" />
        <img src="@/assets/images/hny2022/code.png" alt="電子回路" />
        <img src="@/assets/images/hny2022/texture.jpg" alt="電子回路" />
        <img src="@/assets/images/hny2022/letter.png" alt="電子回路" />
        <img src="@/assets/images/hny2022/front.jpg" alt="電子回路" />
        <img src="@/assets/images/hny2022/wireframe.png" alt="電子回路" />
        <Tools :tools="tools" align="right" class="tools"/>
      </div>
      <div v-else>
        <WorkGallery :left="36.5">
          <template #left>
            <h1 class="wrokTitle">{{ title }}</h1>
            <span class="date">{{ date }}</span>
            <section>
              <pre>{{ desc }}</pre>
            </section>
            <img src="@/assets/images/hny2022/front.jpg" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/wireframe.png" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/back.png" alt="2022年賀状" />
            <Tools :tools="tools" align="right" class="tools"/>
          </template>
          <template #right>
            <img src="@/assets/images/hny2022/letter.png" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/render.jpg" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/code.png" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/shaded.png" alt="2022年賀状" />
            <img src="@/assets/images/hny2022/texture.jpg" alt="2022年賀状" />
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
import Tools from '@/components/Tools.vue'
const sm = ref(document.body.clientWidth < 400)

const tools = {
  言語: ['html'],
  コードエディタ: ['Visual Studio Code'],
  '3Dモデリング': ['Rhinoceros', 'blender'],
  画像編集: ['ibisPaint X', 'paint.net', 'Affinity Designer'],
  デプロイ: ['GitHub']
}
const title = '2022年賀状'
const desc = `2022年(寅年)の年賀状
AR(Augmented Reality)の実験的作
AR.jsを用いブラウザ上でカメラを起動し年賀状の上に3Dモデルを投影する。
3Dモデル製作はblender/Rhinocerosで行った。`
const date = '2021/09'

onMounted(() => {
  window.addEventListener('resize', () => { sm.value = document.body.clientWidth < 400 })
})
</script>

<style scoped lang="scss">
$color-title: #FFCC00;
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
</style>
