const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "-";

bot.on('ready', function(){
    console.log("Bot Ready");
})
 
bot.on("ready", () => {
  console.log("Connecté sur" + " " + bot.guilds.size + " servers!");
  bot.user.setGame(`>_ Anaria V1.0.0 by Kaw!ep™`, "https://www.twitch.tv/AriaV1")
});

bot.login('NTY1MDg5MzA4NzUxNDI5NjMy.XKxWvw.AXiAG0IxI774oBvqbDWE7sKECig')

bot.on('message', message => {
  
  if (message.content === '-pp') {
   
    message.reply('`Voici ta Photo de Profil,`' + " " + message.author.avatarURL);
  }
});

bot.on('message', message => {
 
  if (message.content === '-help') {
    
    message.reply(':hammer::warning: Command en cours de développement');
  }
});

bot.on('message', message => {
 
  if (message.content === '-stats') {
    
    message.reply('Je suis connecté sur' + " " + bot.guilds.size + " " + 'Serveurs !');
  }
});

bot.on('guildMemberAdd', member => {
  let logChannel = member.guild.channels.find('name', '┌➧『✅』nouveaux');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Anaria | Logs") 
    .setDescription(member.user.username + " :tada: vien de rejoindre le serveur ! (" + member.user.id + ")")
    .setColor('RANDOM')
    .setFooter("ΛSØЯ ➜ Kaw!ep™#6666", member.user.displayAvatarURL)
    .setTimestamp()
    logChannel.send(logEmbed);
  })
  bot.on('guildMemberRemove', member => {
  let logChannel = member.guild.channels.find('name', '└➧『❌』anciens');
  
    let logEmbed = new Discord.RichEmbed()
    .setAuthor("Anaria | Logs") 
      .setDescription(member.user.username + " :x: vien de quitter le serveur (" + member.user.id + ")")
    .setFooter("ΛSØЯ ➜ Kaw!ep™#6666", member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    logChannel.send(logEmbed);
  })

  bot.on('message', message => {
 
    if (message.content === '-stats') {
      
      message.reply('Je suis connecté sur' + " " + bot.guilds.size + " " + 'Serveurs !');
    }
  });

bot.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('-kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('raison optionnelle qui s\'affichera dans les journaux d\'audit').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`**${user.tag}** A bien été Kick !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Je ne peux pas kick ce joueur');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Ce joueur n\'est pas sur ce discord !');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Tu n\'as pas mentionné le joueur à Kick !');
    }
  }
});

bot.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('-ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'n\'a pas respecté le reglement !',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`**${user.tag}** A bien été Ban !`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('Je ne peux pas Ban ce joueur');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Ce joueur n\'est pas sur ce discord !');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('Tu n\'as pas mentionné le joueur à Ban !');
    }
  }
});