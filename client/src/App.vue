<script>
import PoleWords from './components/PoleWords.vue'
import BoardWords from './components/BoardWords.vue'


export default {
  name: 'App',
  components: {
    PoleWords,
    BoardWords
  }
}
</script>

<template>
  <transition name="fade-modal">
    <PoleWords
      v-if="showModal"
      :word="word"
      :score="score"
      :row="row"
      @reset="handleModalReset"
      @close="showModal = false"
    />
  </transition>
  <BoardWords :board="board" :errors="errors" :wiggle="wiggle" :evaluation="evaluation" />  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
