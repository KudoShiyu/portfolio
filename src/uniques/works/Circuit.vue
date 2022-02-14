<template>
  <Work
    :src="require('@/assets/images/circuit/電子回路bold.png')"
    time="2021/06"
    alt="タイポグラフィー"
    captionbg="white"
    :tools="{
          画像編集: ['Affinity Designer']
        }"
  >
    <template #title>
      <span>タイポグラフィー</span>
    </template>
    <template #description>
      <section>
        電子回路をイメージしたタイポグラフィー 太字/細字
      </section>
    </template>
    <template #pics>
      <div class="imgLines">
        <div class="imgLine1">
          <div class="img"><img src="@/assets/images/circuit/電子回路tate.png" alt="電子回路" /></div>
        </div>
        <div class="imgLine2">
          <div class="img"><img src="@/assets/images/circuit/電子回路.png" alt="電子回路" /></div>
          <div class="img"><img src="@/assets/images/circuit/電子回路bold.png" alt="電子回路" /></div>
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
  color: black;
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
.imgLine1{
  flex-basis: 0;
  flex-grow: 1.077
}
.imgLine2{
  flex-basis: 0;
  flex-grow: 2
}
</style>
