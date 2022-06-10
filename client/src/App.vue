<script>
import PoleWords from './components/PoleWords.vue'
import BoardWords from './components/BoardWords.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    PoleWords,
    BoardWords
  },

  created() {
      this.getAllWords();
  },

  data () {
      return {
        words: [],
        endpoint: 'localhost',
      }
  },
  
  methods: {
      getAllWords() {
        axios.get(this.endpoint)
          .then(response => {
            this.words = response.data;
            console.log(this.words);
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
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
  <BoardWords :words=words />  
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
