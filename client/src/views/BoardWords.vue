<script setup>

import CellWords from './CellWords.vue';
import InfoWords from './InfoWords.vue';

//defineProps({ board: Array, wiggle: Array, evaluation: Array });
</script>

<template>
  <main>
    <section class="board">
        <h1>Words</h1>  
        <section class="cell">    
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
  height: 650px;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.cell {
  margin-left: 20px;  
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.information {
  display: grid;
  width: fit-content;
}
</style>
