const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODIwMzI4NjEwNzE5MzM0NDUw.YEzkjQ.WPfoPQbZnWrBRKRfZIZ0b7zxPBU');//will change later

client.on('ready', ()=>console.log('auth complete'));
client.on('message', msg=>{
  if(msg.content === 'ping' && msg.channel.id === '820330322486231050'){
    msg.channel.send('pong');
  }
  });