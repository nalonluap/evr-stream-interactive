<script>

export default {
  components: {},

  props: {
    word: String, //words getting from server
  },

  data() {
    return {
      visible: true,
      letters: [],
      count: 0
    };
  },

  created() {
    //only test filling
    this.count = 3;
    this.OutToScreen(this.count, "WORDS");

  },

  methods: {
    GetWords(wordl) { 
      if(wordl.length == 5){
        for (let i = 0; i < 5; i++) {
          if(this.letters.length < 25){
            this.letters.push({letter: wordl[i]});
          }
        } 
      } else {
        console.log("word length error");
      }
    },

    EmptyCellsInit(current) {
      for (let i = current * 5; i < 25; i++) {
        this.letters.push({letter: ""});
      } 
    },

    OutToScreen(words_number, word) {
      if(words_number <= 5){
        let j = 0;
        for (let i = 0; i < words_number; i++) {
          this.GetWords(word);
          j = i;
        }
        this.EmptyCellsInit(j+1);
      } else {
        console.log('words quantity error');
      }
    }
  },
};
</script>

<template>
  <div v-for="item in letters" :key="item.letter">
    {{ item.letter }}
  </div>
</template>

<style lang="scss" scoped>
div {
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
