<template>
  <div class="work">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="thumbnail" @click="show = true">
      <img class="image" :src="src" :alt="alt"/>
      <div class="title">
        <slot name="description"> </slot>
      </div>
    </div>
    <div class="articleWrap" v-if="show">
      <div class="articleAround" @click="show = false"></div>
      <article class="article">
        <slot>
        </slot>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    src: String,
    alt: String
  }
})
export default class Work extends Vue {
  src!: string;
  alt!: string;
  show = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.thumbnail {
  width: 30vw;
  height: 30vw;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    width: 100%;
    position: absolute;
    bottom: 10%;
    left: 0;
  }
}
.articleWrap{
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.articleAround{
  background-color: rgba($color: #000000, $alpha: 0.3);
  width: 100%;
  height: 100%;
}
.article{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 90%;
  height: 90%;
  background-color: #fff;
  overflow: auto;
}

</style>
