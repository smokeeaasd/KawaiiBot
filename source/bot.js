require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const fs = require("node:fs");
const path = require("node:path");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildInvites,
		GatewayIntentBits.GuildMembers,
	],
	partials: [
		Partials.GuildMember
	]
});

const HandlersPath = path.join(__dirname, "handlers");

const Handlers = fs.readdirSync(HandlersPath).filter(file => file.endsWith(".js"));

for (const HandlerFile of Handlers) {
	const Handler = require(`./handlers/${HandlerFile}`);

	(async () => {
		Handler.run(client);
	})();
}

client.login(process.env.TOKEN);