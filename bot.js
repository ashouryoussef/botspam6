const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("500557063991328770")
setInterval(function() {
channel.send(`3bker fo2rerererererererererererere`);
}, 30)
})

client.login(process.env.BOT_TOKEN);