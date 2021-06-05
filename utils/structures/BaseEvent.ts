import DiscordClient from '../../client/client';
import { discordEvents, WsEvents } from '../../types/events';


export default abstract class BaseEvent {
  constructor(private name: WsEvents | discordEvents) { }

  getName(): string { return this.name; }
  abstract run(client: DiscordClient, ...args: any): void;
}
