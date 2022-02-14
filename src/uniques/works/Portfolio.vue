<template>
  <Work
    :src="require('@/assets/images/portfolio/main.svg')"
    time="2022/02"
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
        <Link href="https://github.com/KudoShiyu/portfolio">ソースコード(Github)</Link>
      </section>
    </template>
    <template #pics>
      <!-- <iframe class="frame" src="https://kudoshiyu.github.io/portfolio/"></iframe> -->
    </template>
  </Work>

</template>

<script lang="ts">
import Link from '@/atoms/Link.vue'
import Work from '@/components/Work.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Link,
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
.frame{
  height: 100vh;
}
.link {
  text-decoration: underline;
}
</style>
