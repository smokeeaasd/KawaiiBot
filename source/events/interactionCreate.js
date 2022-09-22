module.exports = {
	name: 'interactionCreate',
	once: false,
	isAsync: true,

	/**
	 * @param {import("discord.js").Interaction} interaction 
	 */
	async execute(interaction) {
		if (!interaction.isChatInputCommand())
			return

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Ocorreu um erro na execução do comando.', ephemeral: true });
		}
	}
}