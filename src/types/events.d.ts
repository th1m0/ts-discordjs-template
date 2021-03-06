import EventEmitter = require("events");


export class StateManager extends EventEmitter {
    constructor()

    public on(event: WsEvents, listener: (data: any, shardID: number) => void): this;
    public once(event: WsEvents, listener: (data: any, shardID: number) => void): this;
    public emit(event: WsEvents): any;
}


type WsEvents = "PREREADY" //add new custom events here.


type discordEvents =
| 'READY'
| 'RESUMED'
| 'GUILD_CREATE'
| 'GUILD_DELETE'
| 'GUILD_UPDATE'
| 'INVITE_CREATE'
| 'INVITE_DELETE'
| 'GUILD_MEMBER_ADD'
| 'GUILD_MEMBER_REMOVE'
| 'GUILD_MEMBER_UPDATE'
| 'GUILD_MEMBERS_CHUNK'
| 'GUILD_ROLE_CREATE'
| 'GUILD_ROLE_DELETE'
| 'GUILD_ROLE_UPDATE'
| 'GUILD_BAN_ADD'
| 'GUILD_BAN_REMOVE'
| 'GUILD_EMOJIS_UPDATE'
| 'GUILD_INTEGRATIONS_UPDATE'
| 'CHANNEL_CREATE'
| 'CHANNEL_DELETE'
| 'CHANNEL_UPDATE'
| 'CHANNEL_PINS_UPDATE'
| 'MESSAGE_CREATE'
| 'MESSAGE_DELETE'
| 'MESSAGE_UPDATE'
| 'MESSAGE_DELETE_BULK'
| 'MESSAGE_REACTION_ADD'
| 'MESSAGE_REACTION_REMOVE'
| 'MESSAGE_REACTION_REMOVE_ALL'
| 'MESSAGE_REACTION_REMOVE_EMOJI'
| 'USER_UPDATE'
| 'PRESENCE_UPDATE'
| 'TYPING_START'
| 'VOICE_STATE_UPDATE'
| 'VOICE_SERVER_UPDATE'
| 'WEBHOOKS_UPDATE';
