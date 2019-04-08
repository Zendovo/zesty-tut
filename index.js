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

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Can't find user!");

    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");

    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()

    .setDescription("~Ban~")

    .setColor("#bc0000")

    .addField("Banned User", `${bUser} with ID ${bUser.id}`)

    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)

    .addField("Banned In", message.channel)

    .addField("Time", message.createdAt)

    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");

    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);

    incidentchannel.send(banEmbed);

    return;

  }
    
  }
});


bot.login(process.env.token);
