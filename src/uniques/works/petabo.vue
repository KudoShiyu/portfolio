<template>
  <Work
    :src="require('@/assets/images/petabo/9.jpg')"
    time="2019/07"
    alt="ペタボーの大空"
    captionbg="black"
    color="white"
    :tools="{
          言語: ['html','scss','typescript']
        }"
  >
    <template #title>
      <span>ペタボーの大空</span>
    </template>
    <template #description>
      <section>
        面ファスナーの知育玩具「ペタボー」を用いた大規模作品<br>
        子ども建築塾のTAとして製作、展示に参加した<br><br>
        <Link href="http://itojuku.or.jp/course/children/">子ども建築塾HP</Link><br>
        <Link href="https://petabo-shop.com">ペタボー公式ショップ</Link>
      </section>
    </template>
    <template #pics>
      <img class="img" src='@/assets/images/petabo/9.jpg' alt="">
      <Flex>
        <template v-slot:0>
        <img class="img" src='@/assets/images/petabo/3.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/0.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/1.jpg' alt="">
        </template>
        <template v-slot:1>
        <img class="img" src='@/assets/images/petabo/4.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/5.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/6.jpg' alt="">
        <img class="img" src='@/assets/images/petabo/8.jpg' alt="">
        </template>
      </Flex>
    </template>
  </Work>

</template>

<script lang="ts">
import Work from '@/components/Work.vue'
import Link from '@/atoms/Link.vue'
import Flex from '@/atoms/Flex.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Work,
    Flex,
    Link
  }
})
</script>

<style scoped lang="scss">
.img {
  padding: 0.5rem;
  width: 100%;
}
</style>
