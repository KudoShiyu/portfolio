<template>
  <Work
    :src="require('@/assets/images/unit/5.jpg')"
    time="2020/08"
    alt="Uint"
    captionbg="black"
    :tools="{
          素材: ['ボール紙','ラミン棒']
        }"
  >
    <template #title>
      <span>Uint</span>
    </template>
    <template #description>
      <section>
        ボール紙による箱を角でジョイントすることで広がってゆくユニット。<br>
        黄金比の菱形を組み合わせた非周期的な空間充填を実現しようとしたが、強度が及ばず非周期とはならなかった。
      </section>
    </template>
    <template #pics>
      <Flex :ratio="36">
        <template v-slot:0>
          <img class="img" src='@/assets/images/unit/4.jpg' alt="">
          <img class="img" src='@/assets/images/unit/2.jpg' alt="">
        </template>
        <template v-slot:1>
          <img class="img" src='@/assets/images/unit/5.jpg' alt="">
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
