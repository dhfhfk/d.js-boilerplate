import { Client, ApplicationCommandDataResolvable } from "discord.js";
import fs from "fs";

module.exports = async (client: Client) => {
    // 빗금 명령어
    const slashCommands = fs.readdirSync("./commands").filter((file: string) => file.endsWith(".ts"));
    const arrayOfSlashCommands: ApplicationCommandDataResolvable[] = [];

    slashCommands.map((value: string) => {
        import(`../commands/${value.replace(".ts", "")}`).then(async (command) => {
            if (["MESSAGE", "USER"].includes(command.type)) delete command.description;
            arrayOfSlashCommands.push(command);
        });
    });

    client.on("ready", async () => {
        await client.guilds.cache.get("367303729566711808")?.commands.set(arrayOfSlashCommands);
        // 전역 셋
        // await client.application.commands.set(arrayOfSlashCommands);
    });
};
