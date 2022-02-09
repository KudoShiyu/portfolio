<template>
<Category category="architecture">
</Category>
<Category category="program">
    <HNY2022/>
    <Portfolio/>
</Category>
<Category category="other">
    <Circuit/>
</Category>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Category from '@/components/Category.vue'
import Circuit from '@/uniques/works/Circuit.vue'
import Portfolio from '@/uniques/works/Portfolio.vue'
import HNY2022 from '@/uniques/works/HNY2022.vue'

@Options({
  components: {
    Category,
    Circuit,
    Portfolio,
    HNY2022
  }
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
