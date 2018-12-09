const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "2";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "513378667444043777"; // ايدي السررفر
var channel = "513378667444043779";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** يحيا ريب ريب الى الابد يحيا ريب ريب الى الابد يحيا ريب ريب الى الابد يحيا ريب ريب الى الابد يحيا ريب ريب الى الابد  **')
    },25);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "d") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login('NDUzMDU3MTYxNDE3ODUwODgx.Du8TWA.abyLyR0Q4rBkgcmfst2aO6Wb8zw');