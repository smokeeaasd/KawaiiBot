const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    async run(client) {
        const eventsPath = path.join(__dirname, '../events');
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);

            const event = require(filePath);

            if (event.once) {
                if (event.isAsync) {
                    client.once(event.name, async (...args) => event.execute(...args));
                } else {
                    client.once(event.name, (...args) => event.execute(...args));
                }
            } else {
                if (event.isAsync) {
                    client.on(event.name, async (...args) => event.execute(...args));
                } else {
                    client.on(event.name, (...args) => event.execute(...args));
                }
            }
        }
    }
}