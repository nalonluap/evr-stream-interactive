const tmi = require("tmi.js");
const client = new tmi.Client({
    // options: {
    //     debug: true
    // },
    // identity: {
    //     username: "",
    //     password: ""
    // },
    channels: ['just_ns'] // A twitch chanel name where will be pars message , only lowercase chars 
});

client.connect();

client.on('message', (channel, tag, message, self) => {

    if (self) return;

    console.log(`${tag['display-name']}: ${message}`)
})




module.exports = client;