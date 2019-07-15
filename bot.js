const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600362088073789460")
setInterval(function() {
channel.send(`Khaled Test Bot`);
}, 30)
})

client.login(process.env.BOT_TOKEN);