const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Digunakan server...", {type: "STREAMING"})
  setTimeout(() => {
    bot.user.setActivity(`prefix - | ${bot.guilds.array().length} server`, {type: "WATCHING"});
  }, 20000)

});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
    
    if (cmd === `${prefix}Halo`){
    message.channel.send("halo juga kak :)");
  }
});


bot.login(process.env.token);
