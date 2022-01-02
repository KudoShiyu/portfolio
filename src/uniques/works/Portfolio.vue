<template>
  <Work :src="require('@/assets/images/circuit/電子回路bold.png')" alt="電子回路">
    <template #description>
      <span>
        このポートフォリオサイト
      </span>
    </template>
    <div class="image">
      <img src="@/assets/images/circuit/電子回路bold.png" alt="電子回路">
    </div>
    <section><pre>フレームワーク"Vue"を用いて開発したポートフォリオ用ホームページ。
class-style componentを採用し、TypeScriptとscssを併用して開発を行った。
バージョン管理、公開はGitHub(Pages)で行っている。
<a href="https://github.com/KudoShiyu/portfolio" target="blank">ソースコード(Github)</a></pre><br>言語: Vue3 + TypeScript + scss<br>ツール: Visual Studio Code, GitHub</section>
  </Work>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Work from '@/components/Work.vue'
@Options({
  components: {
    Work
  }
})
export default class Portfolio extends Vue {}
</script>

<style scoped lang="scss">
span{
  color: white;
}
.image{
  width: auto;
  margin: 10px;
}
img{
  width: 100%;
}
section{
  padding-bottom: 10px;
}
</style>
