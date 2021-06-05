import * as fs from "fs";
import DiscordClient from "./client/client.js";
import { registerCommands, registerEvents } from "./utils/registry.js";
import * as ws from "./utils/stateManager";

global.config = JSON.parse(fs.readFileSync("config.json", { encoding: "utf8" }));
const client: DiscordClient = (global.client = new DiscordClient({}, global.config));
let token: string = fs.readFileSync(".token", { encoding: "utf8" }) as string
global.ws = ws.default;

(async () => {
	await registerCommands(client, "../commands");
	await registerEvents(client, "../events");
	await client.login(token)
})();