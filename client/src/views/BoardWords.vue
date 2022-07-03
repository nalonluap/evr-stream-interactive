<script>

import CellWords from './CellWords.vue';

const { io } = require("socket.io-client");

const socket = io('http://localhost:3001');

export default {
  components: {
    CellWords,
  },

  data() {
    return {
      count: 0,
      visible: false,
      word: 'WORSD',
      username: 'John',
    };
  },

  created() {
    //only test filling
    this.count = 0;
    
    try{
      socket.on("connect", () => {
        // game socket connection
        console.log('game socket connection')
      });
    }
    catch (error) {
        console.log(`Error game server connection ${error.message}`);
    }

  },

  updated() {

    // whenever data changes and the component re-renders, this is called.
    this.scrollToEnd();
    
  },

  methods: {
    nextWord(){
      this.count++;
      //this.GetWord();
    },

    clearCells(){
      this.count = 0;
    },

    scrollToEnd: function () {
      // scroll to the start of the last message
      var container = this.$el.querySelector("#foo");
      container.scrollTop = container.scrollHeight;
    },

    parseJson(message) {
      let userData = JSON.parse(message);

      this.word = userData['message'];
      this.username = userData['username'];
    }

  }
}
//defineProps({ board: Array, wiggle: Array, evaluation: Array });
</script>

<template>
  <main>
    <section class="board">
      <div class="title-border">
        <h3 class="subtitle">EVR Interactive</h3>
      </div>
      <button @click="clearCells()" class ="btn btn-red btn-help">?</button>
      <button @click="clearCells()" class ="btn btn-red btn-reload"></button>
      <button @click="visible=true" v-show="!visible" class="btn-start">Start Game</button>
      <button @click="clearCells(), visible=!visible" v-show="visible" class="btn-cancel">End Game</button>
      <div class="pole" id="foo">
        <section v-for="item in count" :key="item" v-show="visible" class="cell">
          <div class="player">
            <h3 class="subtitle username">{{this.username}}</h3>
          </div>
          <CellWords :pWord="word"/>   
        </section>
      </div>            
    </section>
  </main>
</template>

<style lang="scss" scoped>
h1{
    margin-left: 45px;
    color: antiquewhite;
}
h3.subtitle{
  font-family: "Press Start 2P";
  font-size: 20px;
  margin-block: auto;
  margin-top: 10px;
}
h3.username{
  margin-top: 18px;
}
main {
  display: flex;
  justify-content: center;
}

section.board {
  margin-left: 5px;
  margin-right: 35px;
  background-color: rgb(77, 74, 74);
  border-radius: 20px;  
  padding: 20px;
  height: 670px;
  width: 800px;
  gap: 10px;
}
section.cell {
  margin-top: 26px;
  margin-left: 25px;  
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
}

div.pole{
  margin-top: 20px;
  max-height: 480px;
  overflow: auto;
  border-radius: 20px;
}

div.player {
  background-color: rgb(235, 174, 32);
  //margin-right: 500px;
  height: 55px;
  width: 200px;
  position: relative;
  /* для сдвига элемента влево на 20px */
  left: -20px; /* или right: 20px; */
  border-radius: 10px;
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
  transition: all 0.3s;
  margin-top: 20px;
  max-height: 20px;
  position: relative;
  background-color: green;
  display: block;
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
  
  margin-left: 200px;

  width: 400px;

  height: 40px;

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
