<template>
<div class="main">
<Category category="architecture">
  <B1House/>
  <Jissoku/>
</Category>
<Category category="program">
    <HNY2022/>
    <SignUIgen/>
    <Portfolio/>
</Category>
<Category category="other">
  <Petabo/>
  <Chair/>
  <Circuit/>
  <Unit/>
</Category>
</div>
</template>
<script lang="ts">

import { Options, Vue } from 'vue-class-component'
import Category from '@/components/Category.vue'
import Circuit from '@/uniques/works/Circuit.vue'
import Portfolio from '@/uniques/works/Portfolio.vue'
import HNY2022 from '@/uniques/works/HNY2022.vue'
import SignUIgen from '@/uniques/works/SignUIgen.vue'
import B1House from '@/uniques/works/b1House.vue'
import Petabo from '@/uniques/works/petabo.vue'
import Chair from '@/uniques/works/Chair.vue'
import Unit from '@/uniques/works/Unit.vue'
import Jissoku from '@/uniques/works/Jissoku.vue'

@Options({
  components: {
    Category,
    Circuit,
    Portfolio,
    HNY2022,
    SignUIgen,
    B1House,
    Petabo,
    Chair,
    Unit,
    Jissoku
  }
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
