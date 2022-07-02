const tmi = require("tmi.js");
const game_text = require("../game/game-text");
const client = new tmi.Client({
    // options: {
    //     debug: true
    // },
    // identity: {
    //     username: "",
    //     password: ""
    // },
    channels: ['ker6ert'] // A twitch chanel name where will be pars message , only lowercase chars 
});

client.connect().catch((err) => { console.error(err) });

client.on('message', (channel, tag, message, self) => {

    if (self) return;

    if (message.toLocaleLowerCase().trim().slice(0, 4) == "!reg") {
        game_text.OnMessageRegistered(tag['display-name'], channel);
    }

    if (message.toLocaleLowerCase().trim().slice(0, 6) == "!words") {
        game_text.OnMessageInTwitchChat(tag['display-name'], message, channel);
    }

    if (message.toLocaleLowerCase().trim().slice(0, 8) == "!newgame" &&
        tag['display-name'].toLocaleLowerCase().trim() === channel.toLocaleLowerCase().trim().slice(1, channel.length)) {
        game_text.OnMessageNewGame(channel);
    }

})




module.exports = client;