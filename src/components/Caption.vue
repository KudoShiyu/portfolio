<template>
  <article class="caption">
    <div class="header">
    <div class="titlerow">
      <RoundText class="title" bgcolor="black" color="white"><slot name="title"></slot></RoundText>
      <Close color="'#000'" class="close" @click="close()"/>
    </div>
    <span class="time">{{time}}</span>
    </div>
    <div class="sections">
      <slot name="description"></slot>
    </div>
    <Tools :tools="tools" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Close from '@/atoms/Close.vue'
import RoundText from '@/atoms/RoundText.vue'
import Tools from '@/components/Tools.vue'
export default defineComponent({
  components: {
    RoundText,
    Tools,
    Close
  },
  props: {
    tools: {
      type: Object as () => { [key: string]: string[] },
      required: true
    },
    time: String
  },
  emits: ['close'],
  setup (_, context) {
    const close = () => {
      context.emit('close')
    }
    return { close }
  }
})
</script>

<style scoped lang="scss">
.caption {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 1vw;
  border-radius: 5px;
}
.time{
  color: black;
}
.titlerow{
  display: flex;
}
.title{
  flex-grow: 100;
}
.close{
  font-size: 2rem;
  margin-left: 0.5rem;
}
</style>
