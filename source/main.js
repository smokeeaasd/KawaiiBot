require("dotenv").config();

const path = require("node:path");

const { ShardingManager } = require('discord.js');

const manager = new ShardingManager(path.join(__dirname, "bot.js"), { token: process.env.TOKEN });

manager.on('shardCreate', shard => {
	console.log(`Shard iniciado >> ${shard.id}`)
});

manager.spawn();