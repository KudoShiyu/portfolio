<template>
<section class="all">
  <h1 class="title">{{category}}</h1>
  <ul class="items">
    <slot></slot>
  </ul>
</section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    category: String
  }
})
export default class Portfolio extends Vue {
  category!: string;
}
</script>

<style scoped lang="scss">
.all{
  margin-right: 2vw;
}

.items{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.title{
  font-size: 3em;
  font-weight: 300;
}
</style>
