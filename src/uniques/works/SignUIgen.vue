<template>
  <Work
    :src="require('@/assets/images/SignUIgen/all.png')"
    time="2021/08"
    alt="Sign UI Generator"
    captionbg="black"
    :tools="{
          言語: ['html','scss','typescript']
        }"
  >
    <template #title>
      <span>Sign UI Generator</span>
    </template>
    <template #description>
      <section>
        GUIから.mcfunction形式のプログラムを生成するWebアプリケーション。<br>
        生成されたプログラムファイルはZip化してダウンロードされる。<br>
        <Link href="https://txkodo.github.io/SignUIgen/">webページ</Link><br>
        <Link href="https://github.com/txkodo/SignUIgen">ソースコード(github)</Link>
      </section>
    </template>
    <template #pics>
        <iframe class="frame" src="https://txkodo.github.io/SignUIgen/"></iframe>
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
  background-color: #fff;
  height: 100vh;
}
</style>
