<template>
  <Work
    :src="require('@/assets/images/b1House/8.jpg')"
    time="2019/06"
    alt="軽井沢の別荘模型"
    captionbg="black"
    color="white"
    :tools="{
      材料:['クラフト紙'],
      建築設計: ['益子アトリエ']
      }"
  >
    <template #title>
      <span>軽井沢の別荘模型</span>
    </template>
    <template #description>
      <section>
        軽井沢にある南が丘の山荘模型<br>
        1/100<br>
        太陽に合わせ光の向きを変えて撮影<br>
      </section>
    </template>
    <template #pics>
      <Flex>
        <template v-slot:0>
          <img class="img" src='@/assets/images/b1House/0.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/1.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/2.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/3.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/4.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/5.jpg' alt="">
        </template>
        <template v-slot:1>
          <img class="img" src='@/assets/images/b1House/6.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/7.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/8.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/9.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/10.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/11.jpg' alt="">
          <img class="img" src='@/assets/images/b1House/12.jpg' alt="">
        </template>
      </Flex>
    </template>
  </Work>

</template>

<script lang="ts">
import Work from '@/components/Work.vue'
import Flex from '@/atoms/Flex.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Work,
    Flex
  }
})
</script>

<style scoped lang="scss">
.img {
  padding: 0.5rem;
  width: 100%;
}
</style>
