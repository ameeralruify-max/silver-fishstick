const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent 
  ] 
});

client.once('ready', () => {
  console.log(`البوت جاهز واشتغل يا روحي: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong! شغال وزي العسل 🚀');
  }
});

client.login(process.env.DISCORD_TOKEN);
