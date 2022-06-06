import { Client, Intents } from "discord.js";
import config from "./config";

const client = new Client({
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_VOICE_STATES],
});

// 핸들러 불러오기
["events", "slashCommands", "mongo"].forEach((handler) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require(`./handlers/${handler}`)(client);
    } catch (e) {
        console.warn(e);
    }
});

export default client;

client.login(config.token);
