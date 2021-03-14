const Discord = require("discord.js");
const client = new Discord.Client();
let { readdirSync } = require("fs");
client.config = require("./config.js");
client.commands = new Discord.Collection();
for (const file of readdirSync("./commands/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./commands/${file}`);
    client.commands.set(fileName, fileContents);
  }
}
for (const file of readdirSync("./events/")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./events/${file}`);
    client.on(fileName, fileContents.bind(null, client));

    delete require.cache[require.resolve(`./events/${file}`)];
  }
}

const keepAlive = require('./server');

keepAlive();

client.login(process.env.BOT_TOKEN).then(() => {
    console.log(`Im ready: ${client.user.tag}`);
  })
  .catch(err => {
    console.error("Error while starting session: " + err);
  });
