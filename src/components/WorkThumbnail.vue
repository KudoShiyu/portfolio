<template>
  <div class="thumbnail">
    <router-link :to="routerlink">
      <img class="image" :src="src" :alt="title" />
      <div class="title">
        <RoundText :bgcolor="bgcolor" :color="color">{{title}}</RoundText><br>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import RoundText from '@/atoms/RoundText.vue'
defineProps({
  color: String,
  bgcolor: String,
  src: String,
  title: String,
  routerlink: String
})
</script>

<style scoped lang="scss">
.thumbnail {
  @media (max-width:1800px){
    width: 25%;
  }
  @media (max-width:1500px){
    width: 33.3333%;
  }
  @media (max-width:900px){
    width: 50%;
  }
  @media (max-width:600px){
    width: 100%;
  }
  // min-width: 350px;
  aspect-ratio: 1;
  flex-basis: content;
  position: relative;
  overflow:hidden;
  .image {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
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
