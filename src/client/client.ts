import { Client, ClientOptions, Collection } from 'discord.js';
import { readFileSync, readdirSync } from 'fs';
import BaseCommand from '../utils/structures/BaseCommand.js';
import BaseEvent from '../utils/structures/BaseEvent.js';

export default class DiscordClient extends Client {

  private _commands = new Collection<string, BaseCommand>();
  private _events = new Collection<string, BaseEvent>();
  private _customEvents = new Collection<string, BaseEvent>();
  private _prefix: string;
  private _config: Config;

  constructor(options: ClientOptions = {}, config: Config | null = null) {
    super(options);
    this._config = JSON.parse(readFileSync("config.json", { encoding: "utf8" }));
    this._prefix = this._config.bot.prefix;
  }

  get commands(): Collection<string, BaseCommand> { return this._commands; }
  get events(): Collection<string, BaseEvent> { return this._events; }
  get customEvents(): Collection<string, BaseEvent> { return this._customEvents; }

  get prefix(): string { return this._prefix; }
  set prefix(prefix: string) { this._prefix = prefix; }

  get config(): Config { return this._config; }
  set config(config: Config ) { this._config = config; }

}
