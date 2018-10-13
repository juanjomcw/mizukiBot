const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
   
   client.user.setGame(prefix+'help | #MizukiStream');

});

 client.on("guildMemberAdd", (member) => 
 {
     messageToSend = "Bienvenido " + member.user + " a la #Mizuki-Stream! <:POGGERS:500023205864407044> ";
     client.channels.get('500015065492094976').sendMessage(messageToSend);
 });
 client.on("guildMemberRemove", (member) => 
 {
     messageToSend = member.user.username + " ha salido del servidor, adios popo! <:FeelsBadMan:500018692692901889>";
     client.channels.get('500015065492094976').sendMessage(messageToSend);
 });

let prefix = process.env.PREFIX;

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

   if (message.content.startsWith(prefix + "twitter")){
   message.channel.send('https://twitter.com/FelyMizuki');
 }else
  if (message.content.startsWith(prefix + 'del')) {
  if (!message.member.roles.find("name", "AdminChannel")) return message.reply('No tienes permiso de usar este comando.');{
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Especifica la cantidad de mensajes que deseas borrar');
    if (!amount && !user) return message.reply('Especifica un usuario y cantidad de mensajes');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).arary().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
       //Puede eliminar el message.channel.send que se encuentra abajo si lo desea, es opcional.
        message.channel.send("¡Adios popo :poop: !");
    });
}}else
 if (message.content.startsWith(prefix + "insta")){
   message.channel.send('https://www.instagram.com/felymizuki/');
 }else
 if (message.content.startsWith(prefix + "twitch")){
   message.channel.send('https://www.twitch.tv/mizukifely');
 
 }else
 if (message.content.startsWith(prefix + "bichi")){
   message.channel.send('chingue a su madre todo el que nacio bichi <:Kappa:500018693141430292>');
 
 }else
 if (message.content.startsWith(prefix + "fb")){
   message.channel.send('https://www.facebook.com/FelyMizuki');
}else
 if(message.content.startsWith(prefix + 'avatar')){
   let img = message.mentions.users.first()
   if (!img) {

       const embed = new Discord.RichEmbed()
       .setImage(`${message.author.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
       message.channel.send({ embed });

   } else if (img.avatarURL === null) {

       message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

   } else {
       
       const embed = new Discord.RichEmbed()
       .setImage(`${img.avatarURL}`)
       .setColor(10371071)
       .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
       message.channel.send({ embed });
       }
 }else
    if(message.content.startsWith(prefix + 'caracola')){

       var rpts = ["Sí", "No", "Tal vez", "No sé", "Definitivamente NO", " ¡Claro! "," Probablemente "," No "," Por supuesto! "," Por supuesto que no ", "Definitivamente NO"];
       if (!arguments) return message.reply(`Escriba una pregunta.`);
       message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
   
  }else
    if (message.content.startsWith(prefix + "banned")){
      message.channel.send("", {file:"https://cdn.discordapp.com/attachments/421867754480599050/468529032494055454/O3DHIA5.gif"});
       
}else
    if (message.content.startsWith(prefix + "dab")){
      message.channel.send("", {file:"https://cdn.discordapp.com/attachments/421867754480599050/500537497185681408/bloggif_5bc17f65d6739.gif"});
       
}else 
    if(message.content.startsWith(prefix + 'love')){
        let users = message.mentions.users.map(m => m.username).join(' y ');
     if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
     const random = Math.floor(Math.random() * 100);
     let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
      const embed = new Discord.RichEmbed()
          .setAuthor('El porcentaje de amor de '+users+' es:')
          .setDescription(heard+' **'+random+' %**'+' '+heard)
          .setColor(16716947)

        message.channel.send({embed});
    }else
        if(message.content.startsWith(prefix + "help")){
     
   message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
   message.author.send('**Comandos de MizukiBOT**\n'+
                       '-> '+prefix+'avatar <@user> | Muestra el avatar de un usuario.\n'+
                       '-> '+prefix+'caracola <pregunta> | El bot respondera a tus preguntas (8ball).\n'+
                       '-> '+prefix+'love <@user> y <@user> | Muestra el amor que tienes entre dos personas .\n'+
                       '-> '+prefix+'insta | Instagram MizukiFely.\n'+
                       '-> '+prefix+'twitter | Twitter MizukiFely.\n'+
                       '-> '+prefix+'fb | Grupo de fb.\n'+
                       '-> '+prefix+'twitch | Twitch MizukiFely.\n'+
                       '-> '+prefix+'del <cantidad> | borra los mensajes (SOLO MODERADORES).\n'+
                       '-------------------------------------------------------------------------------------\n'+
                       '**MizukiBOT - Bot Oficial del servidor**\n');
        }
});
client.login(process.env.TOKEN);
