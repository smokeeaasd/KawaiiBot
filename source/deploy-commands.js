require("dotenv").config();

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const commandPath = path.join(commandsPath, file)
	const command = require(commandPath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
	try {
		console.log('Atualizando comandos de barra (/).');

		await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
			{ body: commands },
		);

		console.log('Comandos de barra (/) atualizados.');
	} catch (error) {
		console.error(error);
	}
})();