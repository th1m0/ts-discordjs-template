import * as path from "path"
import { promises as fs } from "fs"
import DiscordClient from "../client/client"
import { Constants } from "discord.js"

export async function registerCommands(client: DiscordClient, dir: string = '') {
	const filePath = path.join(__dirname, dir);
	const files = await fs.readdir(filePath);
	for (const file of files) {
	  const stat = await fs.lstat(path.join(filePath, file));
	  if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
	  if (file.endsWith('.js') || file.endsWith('.ts')) {
		const { default: Command } = await import(path.join(dir, file));
		const command = new Command();
		if (command.options.disabled) continue
		  console.log(`[Commands] registering ${path.join(dir, file)}`)
		  if (command.init instanceof Function) {
			command.init(client)
		  }
		client.commands.set(command.getName(), command);
		command.options.aliases?.forEach((alias: string) => {
			client.commands.set(alias, command);
		});
	  }
	}
  }
  
  export async function registerEvents(client: DiscordClient, dir: string = '') {
	const filePath = path.join(__dirname, dir);
	const files = await fs.readdir(filePath);
	for (const file of files) {
	  const stat = await fs.lstat(path.join(filePath, file));
	  if (stat.isDirectory()) registerEvents(client, path.join(dir, file));
	  if (file.endsWith('.js') || file.endsWith('.ts')) {
		const { default: Event } = await import(path.join(dir, file));
		const event = new Event();
		if (Object.keys(Constants.Events).includes(event.getName())) {
			console.log(`[Events] registering discord event => ${path.join(dir, file)}`);
			client.events.set(event.getName(), event);
			client.on(event.getName(), event.run.bind(event, client));
		} else {
			console.log(`[Events] registering custom event => ${path.join(dir, file)}`);
			client.customEvents.set(event.getName(), event);
			global.ws.on(event.getName(), event.run.bind(event, client));
		}

		if (event.init instanceof Function) {
			event.init(client);
		}
	  }
	}
  }
