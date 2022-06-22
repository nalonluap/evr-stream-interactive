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
      count: 0,
      visible: false,
      pWords : ['WETEL', 'LAMBO', 'WORLD', 'TIRON', 'WORKS', 'WORDS'], //test words
      tempWords : ['', '', '', '', '', ''] 
    };
  },

  created() {
    //only test filling
    this.count = 0;
  },

  methods: {
    nextWord(){
      this.count++;
      for(let i = 0; i < this.count; i++){
        this.tempWords[i] = this.pWords[i]
      }
    },

    clearCells(){
      this.tempWords = ['', '', '', '', '', ''];
      this.count = 0;
    }
  }
}
//defineProps({ board: Array, wiggle: Array, evaluation: Array });
</script>

<template>
  <main>
    <section class="board">
      <button @click="clearCells()" class ="btn btn-red btn-help">?</button>
      <button @click="clearCells()" class ="btn btn-reload btn-red"></button>
        <h1>Words</h1>
        <button @click="visible=true" v-show="!visible" class="button-channel">Start Game</button>
        <button @click="clearCells(), visible=!visible" v-show="visible" class="button-channel btn-cancel">End Game</button>  
        <section v-for="item in tempWords" :key="item" v-show="visible" class="cell">    
            <CellWords :pWord="item" />
        </section>
        <button @click="nextWord()" v-show="visible" class="button-channel btn-next">Next</button>
        <section class="information">    
            <InfoWords :msg="Hello" />
        </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
h1{
    margin-left: 45px;
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
.btn-next{
  margin-top: 20px;
  background-color: green;
}
.btn {
  float: right;
  display: inline-block;
  height: 44px;
  min-width: 44px;
  text-decoration: none;
  font-size: 11px;
  line-height: 44px;
  padding: 0 5px 0 6px;
  margin: 0px 0 0px 0;
  position: relative;
  transition: all .5s;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.07);
}

.btn:hover {
  text-decoration: none;
}

.btn-reload:before {
  content: '';
  width: 16px;
  height: 16px;
  display: block;
  border: 3px solid #555;
  border-radius: 50%;
  border-top-color: transparent;
  transform: rotate(45deg);
  position: absolute;
  top: 11px;
  right: 11px; 
}

.btn-reload:after {
  content: ""; 
  position: absolute; 
  width: 0; 
  height: 0; 
  border: 6px solid transparent; 
  border-left-color: #555; 
  top: 8px; 
  right: 10px; 
}

.btn-red{
  background-color: orange; 
}

.btn-red:before {
  border-color:#fff; 
  border-top-color: transparent;  
}

.btn-red:after {
  border:6px solid transparent; 
  border-left-color:#fff; 
}
.btn-help{
  float:left;
  color:#fff;
  font-size:30px;
}
</style>
