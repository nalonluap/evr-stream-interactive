<script>
import words from '../utils/words'

export default {
  components: {},

  props: {
    pWord: [] //words getting from server
  },

  data() {
    return {
      visible: true,
      allWords: words,
      hiddenWord: [],
      //word: [],
    };
  },

  created() {
    //only test filling
    this.hiddenWord = 'WORDS';
    //console.log(this.GetRandomWord());
  },

  methods: {
    GetRandomWord(){
      return this.allWords[Math.floor(Math.random() * this.allWords.length)];
    },

    yellowLetter(letter){
      //console.log(letter);
      for(let i = 0; i < 5; i++){
        if(letter == this.hiddenWord[i]){
          if(this.pWord.indexOf(letter) != i){
            console.log('yellow');
            return true;
          }
           console.log('not-yellow');
          return false
        }
      }
      return false;
    },

    greenLetter(letter){
      //console.log(letter);
      for(let i = 0; i < 5; i++){
        if(letter == this.hiddenWord[i]){
          if(this.pWord.indexOf(letter) == i){
            console.log('green');
            return true;
          }
          console.log('not-green');
          return false
        }
      }
      return false;  
    },
  },
};
</script>

<template>
  <div v-for="item in 5" :key="item.letter" class="cells">
    <div v-if="yellowLetter(this.pWord[item - 1]) == true" class="words-yellow"> 
      <b>{{ this.pWord[item - 1] }}</b>
    </div>
    <div v-else-if="greenLetter(this.pWord[item - 1]) == true" class="words-green">
      <b>{{ this.pWord[item - 1] }}</b>
    </div>
    <div v-else class="words">
      <b>{{ this.pWord[item - 1] }}</b>
    </div>
  </div>
</template>

<style lang="scss" scoped>

div.words-green {
  background-color: green;
  user-select: none;
  width: 55px;
  height: 55px;
  border: 2px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.words-yellow {
  background-color: rgb(205, 181, 28);
  user-select: none;
  width: 55px;
  height: 55px;
  border: 2px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.words {
  user-select: none;
  width: 55px;
  height: 55px;
  border: 2px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  place-items: center;
}
div {
  border-radius: 5px;
}


</style>
