<script>

import CellWords from './CellWords.vue';
import InfoWords from './InfoWords.vue';

export default {
  components: {
    CellWords,
    InfoWords
  },

  data() {
    return {
      visible: false
    };
  }
}
//defineProps({ board: Array, wiggle: Array, evaluation: Array });
</script>

<template>
  <main>
    <section class="board">
        <h1>Words</h1>
        <button @click="visible=true" v-show="!visible" class="button-channel">Start Game</button>
        <button @click="visible=false" v-show="visible" class="button-channel btn-cancel">End Game</button>  
        <section v-show="visible" class="cell">    
            <CellWords :words="words" />
        </section>
        <section class="information">    
            <InfoWords :msg="Hello" />
        </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
h1{
    color: antiquewhite;
}
main {
  display: flex;
  justify-content: center;
}

section.board {
  background-color: rgb(77, 74, 74);
  border-radius: 20px;  
  padding: 20px;
  height: 680px;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.cell {
  margin-top: 20px;
  margin-left: 20px;  
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.information {
  display: grid;
  width: fit-content;
}
.btn-cancel{
  background-color: maroon;
}
</style>
