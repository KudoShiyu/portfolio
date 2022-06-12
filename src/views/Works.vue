<template>
<div class="main">
<Header/>
<div class="space"></div>

<Category category="architecture">
<WorkThumbnail
  :src="require('@/assets/images/b1House/8.jpg')"
  title="軽井沢の山荘"
  bgcolor="black"
  color="white"
  routerlink="/works/b1House"
/>
<WorkThumbnail
  :src="require('@/assets/images/jissoku/main.png')"
  title="榎本家 配置図"
  bgcolor="black"
  color="white"
  routerlink="/works/jissoku"
/>
<WorkThumbnail
  :src="require('@/assets/images/peoplePlot/noon.png')"
  title="GPSによる人流調査"
  bgcolor="black"
  color="white"
  routerlink="/works/people_plot"
/>
</Category>

<Category category="program">
<WorkThumbnail
  :src="require('@/assets/images/hny2022/render.jpg')"
  title="2022年賀状"
  bgcolor="black"
  color="white"
  routerlink="/works/hny2022"
/>
<WorkThumbnail
  :src="require('@/assets/images/SignUIgen/all.png')"
  title="Sign UI Generator"
  bgcolor="black"
  color="white"
  routerlink="/works/sign_ui_gen"
/>
<WorkThumbnail
  :src="require('@/assets/images/bitmapFont/tn.png')"
  title="BitmapFont"
  bgcolor="black"
  color="white"
  routerlink="/works/bitmap_font"
/>
<WorkThumbnail
  :src="require('@/assets/images/portfolio/clip.png')"
  title="Portfolio"
  bgcolor="black"
  color="white"
  routerlink="/works/portfolio"
/>
<WorkThumbnail
  :src="require('@/assets/images/wordle/dialogue.png')"
  title="Wordle Solver"
  bgcolor="black"
  color="white"
  routerlink="/works/wordle"
/>
<WorkThumbnail
  :src="require('@/assets/images/paraglyph/tn.png')"
  title="ぱらぐりふ"
  bgcolor="black"
  color="white"
  routerlink="/works/paraglyph"
/>
</Category>

<Category category="other">
<WorkThumbnail
  :src="require('@/assets/images/petabo/9.jpg')"
  title="ペタボーの大空"
  bgcolor="black"
  color="white"
  routerlink="/works/petabo"
/>
<WorkThumbnail
  :src="require('@/assets/images/chair/6.jpg')"
  title="やどりぎ"
  bgcolor="black"
  color="white"
  routerlink="/works/chair"
/>
<WorkThumbnail
  :src="require('@/assets/images/circuit/電子回路bold.png')"
  title="タイポグラフィー"
  bgcolor="black"
  color="white"
  routerlink="/works/circuit"
/>
<WorkThumbnail
  :src="require('@/assets/images/unit/5.jpg')"
  title="Unit"
  bgcolor="black"
  color="white"
  routerlink="/works/unit"
/>
<WorkThumbnail
  :src="require('@/assets/images/hny2021/1.jpg')"
  title="2021年賀状"
  bgcolor="black"
  color="white"
  routerlink="/works/hny2021"
/>
</Category>
</div>
</template>

<script lang="ts" setup>
import Category from '@/components/Category.vue'

import WorkThumbnail from '@/components/WorkThumbnail.vue'

import Header from '@/uniques/Header.vue'
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
.space{
  padding-top: 2rem;
  @media (max-width:600px) {
    padding-top: 4rem;
  }
}
</style>
