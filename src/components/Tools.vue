<template>
<div class="tools" :style="`text-align:${align};`">
  <div class="tool" v-for="(toollist,tooltype) in tools" :key="tooltype">
    <span>{{tooltype}}</span>
    <ul>
      <li v-for="tool in toollist" :key="tool">{{tool}}</li>
    </ul>
  </div>
</div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
interface Props{
  tools: {[key:string]:string[]},
  align: string
}

withDefaults(
  defineProps<Props>(),
  {
    tools: () => ({}),
    align: 'left'
  }
)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tools {
  margin: 0 1rem;
  font-size: 0.9rem;
  display: inline-block;
  text-align: left;
}
ul {
  li {
    font-weight: 300;
    display: inline;
    &+li::before{
      content: ' / ';
    }
  }
}
.tool {
  padding-top: 2px;
}
span{
  font-weight: 700;
}
</style>
