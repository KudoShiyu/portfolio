<template>
  <div class="work">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <div class="thumbnail" @click="show = true">
        <img class="image" :src="src" :alt="alt" />
        <div class="title">
          <div class="title_content" :style="{ 'background-color': captionbg }">
            <slot name="title"></slot>
          </div>
        </div>
      </div>
      <div class="frame"  v-show="show" @click="show = false"></div>
      <transition appear v-show="show" name="up">
        <div class="picsFlex">
          <slot name="pics"></slot>
        </div>
      </transition>
      <transition appear v-show="show" name="down">
        <article class="article">
          <div class="titlerow">
            <div class="title_content" :style="{ 'background-color': captionbg }">
              <slot name="title"></slot>
            </div>
            <Close :color="'#000'" class="close" @click="show = false"/>
          </div>
          <div class="sections">
            <slot name="description"></slot>
          </div>
          <Tools :tools="tools" />
        </article>
      </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Close from '@/atoms/Close.vue'
import Tools from '@/components/Tools.vue'
export default defineComponent({
  components: {
    Tools,
    Close
  },
  props: {
    tools: {
      type: Object as () => { [key: string]: string[] },
      required: true
    },
    src: String,
    alt: String,
    captionbg: String
  },
  setup () {
    const show = ref(false)
    return { show }
  }
})
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
    text-align: center;
    width: 100%;
    font-weight: 100;
    position: absolute;
    bottom: 10%;
  }
}
.titlerow {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .close {
    font-size:1.3rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }
}
.title_content {
    flex: 1 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: inline-block;
  padding: 0 1rem;
  border-radius: 1rem;
}

.frame {
  z-index: 2;
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.2);
  width: 100%;
  height: 100%;
}

.article {
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 1vw;
  padding: 1vw;
  width: 20vw;
  background-color: #fff;
  border-radius: 5px;
}

.picsFlex {
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  margin: 1vw;
  width: 77%;
  height: calc(100vh - 2vw );
  border-radius: 5px;
  overflow:auto;
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
