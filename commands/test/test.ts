import { Message } from "discord.js"
import BaseCommand from "../../utils/structures/BaseCommand.js"
import DiscordClient from "../../client/client.js"

export default class StatsCommand extends BaseCommand {
	constructor() {
		super("test", "test", { aliases: ["testAlias"]})
	}

	init() {

	}

	async run(client: DiscordClient, message: Message, args: Array<string>) {
        message.reply("Test command works!")
	}
}
