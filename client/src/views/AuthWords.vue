<template>
  <main>
    <section class="home">
      <h1>EVR INTERACTIVE WORDS</h1>
      <div class="channel">
        <input
          v-model="channelName"
          class="input-channel"
          placeholder="channel name"
        />
        <button class="button-channel" @click="checkChannel()">
          Connection
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import router from "@/router/index.js";

export default {
  name: "AuthWords",
  components: {},

  data() {
    return {
      endpoint: `${process.env.VUE_APP_HOST}/api/game/text/start`,
      gameId: null,
      channelName: "",
    };
  },

  created() {
    this.checkConnection();
  },

  methods: {
    checkChannel() {
      axios
        .post(this.endpoint, {
          channelName: this.channelName,
        })
        .then((response) => {
          this.gameId = response.data.gameId;
          console.log(this.gameId);
          router.push({ name: "Main" });
          //alert('success');
        })
        .catch((error) => {
          console.log(error);
          //router.push({name: 'Main'}); проверка роутера
          //alert('faild');
        });
    }, //check channel and get gameId

    checkConnection() {
      console.log(`${process.env.VUE_APP_HOST}/api/ping`);
      axios
        .get(`${process.env.VUE_APP_HOST}/api/ping`)
        .then((response) => {
          //this.words = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log("connection field");
          console.log(error);
          alert("connection field");
        }); //client-server ping-pong
    },
  },
};
</script>

<style>
.h {
  background-color: rgb(104, 131, 63);
}
h1{
  font-family: "Press Start 2P"
}

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.channel {
  align-content: center;
  
  margin-top: 35vh;
  margin-left: 50px;
  max-width: 300px;

  background-color: rgb(77, 74, 74);
  padding: 30px;
  border-radius: 1rem;
}
.input-channel {
  font-family: "Roboto", sans-serif;
  text-color: rgb(0, 0, 0);
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: none;
  display: block;
  transition: all 0.3s;
}
.button-channel {
  width: 100%;
  height: 54.4px;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
  border: none;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  display: block;
  transition: all 0.3s;
}
.button-channel:active {
  background-color: rgb(178, 177, 177);
}
@font-face {
  font-family: "nippon blocks";
  src: local("nippon blocks") url("../../public/fonts/nipponbl.ttf") format("truetype");
}
</style>