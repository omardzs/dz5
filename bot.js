const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599518304696139776")
setInterval(function() {
channel.send(`S`);
}, 30)
})

client.login(process.env.BOT_TOKEN);