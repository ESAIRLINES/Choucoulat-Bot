const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function (){
    bot.user.setGame("ChoucoulatBot, z!help");
    console.log("Le bot a bien été conecté au serveur Choucoulat")
})

bot.login("NDQ4MTQ4Mzc3MDUwNDE1MTA1.DeR86Q.5GpKj8uzPiH4Cj8lLNQP-YibmMQ");
