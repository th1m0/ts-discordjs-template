import { Message } from 'discord.js';
import DiscordClient from '../../client/client';

export default abstract class BaseCommand {
  constructor(private name: string, private category: string, private options: CommandOptions) {}

  getName(): string { return this.name; }
  getCategory(): string { return this.category; }
  getOptions(): CommandOptions { return this.options; }

  abstract run(client: DiscordClient, message: Message, args: Array<string> | null): Promise<any> | void;
}
