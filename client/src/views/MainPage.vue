<script>
import PoleWords from './PoleWords.vue'
import BoardWords from './BoardWords.vue'

export default {
  name: 'MainPage',
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
  <section class="game">    
    <BoardWords></BoardWords>
  </section>  
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
.brd{
  float: right;
}
.h1{
  align-items: center;
  font-size: 20px;

}
</style>
