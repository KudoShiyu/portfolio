<template>
<div class="tools">
  <div class="tool" v-for="(toollist,tooltype) in tools" :key="tooltype">
    <span>{{tooltype}}</span>
    <ul>
      <li v-for="tool in toollist" :key="tool">{{tool}}</li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tools: { type: Object as () => {[key:string]:string[]}, required: true }
  }
  // setup (props, context) {
  // }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tools {
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
