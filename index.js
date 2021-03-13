const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);

client.on('ready', ()=>console.log('auth complete'));
client.on('message', msg=>{
  if(msg.content === 'ping' && msg.channel.id === '820330322486231050'){
    msg.channel.send('pong');
  }
  });