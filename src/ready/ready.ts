import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super("READY");
  }
  async run(client: DiscordClient) {
    console.log(`${client.user?.tag || "Bot"} has logged in.`);
    console.log(await client.generateInvite({permissions: ["ADMINISTRATOR"]}))

    client.user?.setUsername(global.config.bot.name)
    client.user?.setActivity(global.config.bot.activity)
  }
}