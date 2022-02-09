<template>
  <Work
    :src="require('@/assets/images/hny2022/render.jpg')"
    alt="電子回路"
    captionbg="black"
    :tools="{
          言語: ['Vue3','TypeScript','scss'],
          コードエディタ: ['Visual Studio Code'],
          デプロイ: ['GitHub'],
        }"
  >
    <template #title>
      <span>本ポートフォリオ</span>
    </template>
    <template #description>
      <section>
        フレームワーク"Vue"を用いて開発したポートフォリオ用ホームページ。<br>
        class-style component / Composition API を用い、TypeScriptとscssを併用して開発を行った。<br>
        バージョン管理、公開はGitHub(Pages)で行っている。<br>
        <a class="link" href="https://github.com/KudoShiyu/portfolio" target="blank">ソースコード(Github)</a>
      </section>
    </template>
    <template #pics>
      <div class="imgLines">
        <div class="imgLine">
          <div class="img"><img src="@/assets/images/hny2022/letter.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/render.jpg" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/letter.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/render.jpg" alt="電子回路" /></div>
        </div>
        <div class="imgLine">
          <div class="img"><img src="@/assets/images/hny2022/letter.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/render.jpg" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/letter.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/hny2022/render.jpg" alt="電子回路" /></div>
        </div>
      </div>
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
.link {
  text-decoration: underline;
}
</style>
