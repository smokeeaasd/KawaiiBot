module.exports = {
	name: 'ready',
	once: true,
	isAsync: false,
	
	/**
	 * @param {import("discord.js").Client} client 
	 */
	execute(client)
	{
		console.log(`Pronto! Logado como ${client.user.tag}`);
	}
}