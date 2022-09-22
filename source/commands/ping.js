const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("verificar a latência do bot"),
     
    async execute(interaction) {
        const PingEmbed = new EmbedBuilder({
            color: Colors.Blue,
            title: "Pong!",
            description: `Ping: ${interaction.client.ws.ping}ms`
        });

        await interaction.reply({embeds: [PingEmbed]});
    }
}