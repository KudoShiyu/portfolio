<template>
  <Work
    :src="require('@/assets/images/hny2022/render.jpg')"
    alt="電子回路"
    captionbg="black"
    :tools="{
          言語: ['html'],
          コードエディタ: ['Visual Studio Code'],
          '3Dモデリング': ['Rhinoceros', 'blender'],
          画像編集: ['ibisPaint X', 'paint.net', 'Affinity Designer'],
          デプロイ: ['GitHub'],
        }"
  >
    <template #title>
      <span> 2022年賀状 </span>
    </template>
    <template #description>
      <section>
        2022年(寅年)の年賀状<br>
        AR(Augmented Reality)の実験的作<br>
        AR.jsを用いブラウザ上でカメラを起動し年賀状の上に3Dモデルを投影する。<br>
        3Dモデル製作はblender/Rhinocerosで行った。
      </section>
    </template>
    <template #pics>
      <div class="imgLines">
        <div class="imgLine1">
          <div class="img"><img src="@/assets/images/hny2022/render.jpg" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/shaded.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/back.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/code.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/texture.jpg" alt="電子回路" /></div>
        </div>
        <div class="imgLine2">
          <div class="img"><img src="@/assets/images/hny2022/letter.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/front.jpg" alt="電子回路" /></div>
        </div>
      </div>
      <div class="img"><img src="@/assets/images/hny2022/wireframe.png" alt="電子回路" /></div>
    </template>
  </Work>
</template>

<script lang="ts">
import Work from '@/components/Work.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Work
  }
})
</script>

<style scoped lang="scss">
span {
  color: white;
}
img {
  padding: 0.5vw;
  width: 100%;
}
.imgLines{
  display: flex;
}
.imgLine1{
  width: 1000px;
}
.imgLine2{
  width: 1500px;
}
</style>
