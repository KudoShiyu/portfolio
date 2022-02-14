<template>
  <div class="thumbnail" @click="open()">
      <img class="image" :src="src" :alt="alt" />
    <div class="title">
      <RoundText :bgcolor="bgcolor" :color="color"><slot></slot></RoundText><br>
      <span :style="{color: captionbg}">{{time}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundText from '@/atoms/RoundText.vue'
export default defineComponent({
  components: {
    RoundText
  },
  props: {
    color: String,
    bgcolor: String,
    time: String,
    src: String,
    alt: String
  },
  emits: ['open'],
  setup (_, context) {
    const open = () => {
      context.emit('open')
    }
    return { open }
  }
})
</script>

<style scoped lang="scss">
.thumbnail {
  margin-left: 2vw;
  margin-bottom: 2vw;
  flex-grow: 3;
  flex-basis: content;
  position: relative;
  overflow:hidden;
  .image {
    width: 30vw;
    height: 30vw;
    @media only screen and (max-width: 500px) {
      width: 95vw;
      height: 95vw;
    }
    @media only screen and (min-width: 1500px) {
      width: 30vw;
      height: 30vw;
    }
    object-fit: cover;
    transition:0.3s all;
    &:hover{
      transform:scale(1.05,1.05);
      transition:0.3s all;
    }
  }
  .title {
    font-weight: 300;
    text-align: center;
    display: block;
    width: 100%;
    position: absolute;
    bottom: 10%;
  }
}
</style>
