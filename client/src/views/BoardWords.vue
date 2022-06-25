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
      tempWords : ['', '', '', '', '', ''],
      players: ['Mike', 'Paul', 'Leo', 'Michael']
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
    <section>
      <div class="title-border">
        <h2 class="title-words">Words</h2><br/><h3 class="subtitle">EVR Interactive</h3>
      </div>
    </section>
    <section v-for="item in 4" :key="item" class="board">
      <button @click="clearCells()" class ="btn btn-red btn-help">?</button>
      <button @click="clearCells()" class ="btn btn-red btn-reload"></button>
        <h1>{{this.players[item - 1]}}</h1>
        <button @click="visible=true" v-show="!visible" class="btn-start">Start Game</button>
        <button @click="clearCells(), visible=!visible" v-show="visible" class="btn-cancel">End Game</button>  
        <section v-for="item in tempWords" :key="item" v-show="visible" class="cell">    
            <CellWords :pWord="item" />
        </section>
        <button @click="nextWord()" v-show="visible" class="btn-next">Next</button>
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
h2.title-words{
  font-family: "Press Start 2P";
  font-size: 40px;
  
}
h3.subtitle{
  font-family: "Press Start 2P";
  font-size: 20px;
}
main {
  display: flex;
  justify-content: center;
}

section.board {
  margin-top: 230px;
  margin-left: 5px;
  margin-right: 35px;
  background-color: rgb(77, 74, 74);
  border-radius: 20px;  
  padding: 20px;
  height: 440px;
  width: 300px;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.cell {
  margin-top: 10px;
  margin-left: 13px;  
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
}
section.information {
  display: grid;
  width: fit-content;
}
.btn-cancel{
  width: 100%;
  min-height: 40px;
  /*margin-top: 10px;*/
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  display: block;
  transition: all 0.3s;
  margin-top: 20px;
  max-height: 20px;
  position: relative;
  background-color: maroon;
}
.btn-start{
  width: 100%;
  min-height: 40px;
  /*margin-top: 10px;*/
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  display: block;
  transition: all 0.3s;
  margin-top: 20px;
  max-height: 20px;
  position: relative;
  background-color: wheat;
}
.btn-next{
  width: 100%;
  min-height: 40px;
  /*margin-top: 10px;*/
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  display: block;
  transition: all 0.3s;
  margin-top: 20px;
  max-height: 20px;
  position: relative;
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
p{
  margin-bottom: 40px;
}
div.title-border{
  position: fixed;
  
  margin-left: 550px;

  width: 400px;

  background-color:rgb(235, 174, 32);

  border-right:5px solid rgb(0, 169, 73);
  
  border-left:5px solid rgb(152, 152, 152);

  border-bottom:5px solid rgb(42, 41, 41);

  border-top:5px solid rgb(239, 239, 239);

  border-radius:50px;

  -webkit-border-radius:10px;

  -moz-border-radius:10px;
}
</style>
