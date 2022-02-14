<template>
  <div class="work">

    <Thumbnail :alt="alt" :bgcolor="captionbg" :color="color" :src="src" :time="time" @open="show = true">
      <slot name="title"></slot>
    </Thumbnail>

    <div class="abs portrait" v-if="show && isPortrait">
      <div class="frame" @click="show = false"></div>

      <!-- <transition appear name="up"> -->
        <div class="picsFlex">
          <slot name="pics"></slot>
        </div>
      <!-- </transition> -->

      <!-- <transition appear name="down"> -->
        <Caption class="caption" :time="time" :tools="tools" @close="show = false">
          <template #title ><slot name="title"></slot></template>
          <template #description ><slot name="description"></slot></template>
        </Caption>
      <!-- </transition> -->
    </div>

    <div class="abs landscape" v-if="show && ! isPortrait">
      <div class="frame" @click="show = false"></div>

      <transition appear name="up">
        <div class="picsFlex">
          <slot name="pics"></slot>
        </div>
      </transition>

      <transition appear name="down">
        <Caption class="caption" :time="time" :tools="tools" @close="show = false">
          <template #title ><slot name="title"></slot></template>
          <template #description ><slot name="description"></slot></template>
        </Caption>
      </transition>
    </div>

  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Caption from '@/components/Caption.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default defineComponent({
  components: {
    Caption,
    Thumbnail
  },
  props: {
    tools: {
      type: Object as () => { [key: string]: string[] },
      required: true
    },
    src: String,
    alt: String,
    time: String,
    captionbg: String,
    color: String
  },
  setup () {
    const show = ref(false)
    const isPortrait = ref(screen.height > screen.width)
    return { show, isPortrait }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.abs{
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
}

.frame {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.2);
}

.caption {
  position: absolute;

  .landscape & {
        width: 21%;
        height: 100vh;
        right: 0;
        top: 0;
        margin: 0.5rem;
  }

  .portrait & {
      right: 0;
      bottom: 0;
      top: auto;
      width: 100%;
      height: 30vh;
  }
}

.picsFlex {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow:auto;

  .landscape & {
    top: 0;
    left: 0;
    margin: 1vw;
    width: 77%;
    height: calc(100vh - 2vw );
    border-radius: 5px;
  }

  .portrait & {
    top: 0;
    left: 0;
    margin: 1vw;
    width: 100%;
    height: 70vh;
    border-radius: 5px;
  }

&::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
}

.sections {
  flex-grow: 10;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.down-leave-active {
  transition: transform 350ms cubic-bezier(0, 0, 0.25, 1) 0ms;
}

.down-enter-active {
  transform: translate(0, -100vh);
  transition: transform 350ms cubic-bezier(0, 0, 0.25, 1) 0ms;
}

.down-enter, .down-leave-to {
  transform: translate(0, -100vh);
}
.down-enter-to {
  transform: translate(0, 0);
}

.up-leave-active {
  transition: transform 350ms cubic-bezier(0, 0, 0.25, 1) 0ms;
}

.up-enter-active {
  transform: translate(0, 100vh);
  transition: transform 350ms cubic-bezier(0, 0, 0.25, 1) 0ms;
}

.up-enter, .up-leave-to {
  transform: translate(0, 100vh);
}

.up-enter-to {
  transform: translate(0, 0);
}
</style>
