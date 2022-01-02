<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Circuit/>
    <Portfolio/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Circuit from '@/uniques/works/Circuit.vue'
import Portfolio from '@/uniques/works/Portfolio.vue'

@Options({
  components: {
    Circuit,
    Portfolio,
    HelloWorld
  }
})
export default class Works extends Vue {}
</script>
