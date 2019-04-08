const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("https://discord.gg/DPQgeFT");
  setTimeout(() => {
    bot.user.setActivity(`bantu | ${bot.guilds.array().length} server`, {type: "WATCHING"});
  }, 1000)
  bot.user.setStatus('available')

    bot.user.setPresence({

        game: {

            name: 'QQ SPEEDM',

            type: "STREAMING",

            url: "https://www.twitch.tv/"

        }

    });

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
  }
});

bot.login(process.env.token);
