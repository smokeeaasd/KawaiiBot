module.exports = {
	name: 'messageCreate',
	once: false,
	isAsync: true,

	/**
	 * @param {import("discord.js").Message} msg
	 */
	async execute(msg) {
		if (msg.author.bot) return;
	}
}