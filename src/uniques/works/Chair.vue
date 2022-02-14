<template>
  <Work
    :src="require('@/assets/images/chair/6.jpg')"
    time="2019/09"
    alt="やどりぎ"
    captionbg="black"
    :tools="{
          木材: ['タモ']
        }"
  >
    <template #title>
      <span>やどりぎ</span>
    </template>
    <template #description>
      <section>
        柱や壁に寄りかかり、自立しない椅子。<br>
        木材の選定、製材から椅子への加工まで一貫して行った。
      </section>
    </template>
    <template #pics>
      <img class="img" src='@/assets/images/chair/7.jpg' alt="">
      <Flex>
        <template v-slot:0>
          <img class="img" src='@/assets/images/chair/3.jpg' alt="">
        </template>
        <template v-slot:1>
          <img class="img" src='@/assets/images/chair/5.jpg' alt="">
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
  padding: 0.5rem;
  width: 100%;
}
</style>
