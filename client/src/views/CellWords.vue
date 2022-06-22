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
  <div v-for="item in 5" :key="item.letter">
    <div v-if="yellowLetter(this.pWord[item - 1]) == true" class="words-yellow"> 
      {{ this.pWord[item - 1] }}
    </div>
    <div v-else-if="greenLetter(this.pWord[item - 1]) == true" class="words-green">
      {{ this.pWord[item - 1] }}
    </div>
    <div v-else class="words">
      {{ this.pWord[item - 1] }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-next {
  position: relative;
  align-items: center;
  width: 100%;
  height: 54.4px;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s;
}
div.words-green {
  background-color: green;
  user-select: none;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.words-yellow {
  background-color: rgb(205, 205, 8);
  user-select: none;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.words {
  user-select: none;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.animate {
  animation: scale 0.1s;
  animation-iteration-count: 1;
}
div.wiggle {
  animation: wiggle 0.3s;
  animation-iteration-count: 3;
}
div.flip {
  animation: flip 0.5s;
  animation-iteration-count: 1;
}

@keyframes wiggle {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes flip {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
