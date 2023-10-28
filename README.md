![downloads](https://img.shields.io/github/downloads/Kitki30/Mechownik/total?style=for-the-badge)
![version](https://img.shields.io/github/package-json/v/Kitki30/Mechownik/main?style=for-the-badge&label=Version
)
![GitHub](https://img.shields.io/github/license/Kitki30/Mechownik?style=for-the-badge)

# Mechownik
## Open Source Discord Bot

### Functions:

- Todo command for adding/reading todo.md on discord
- Slash commands
- Cat and Dog command
- Not using much ram

### Add our public bot to your server

![AddBot](https://img.shields.io/badge/Add_bot_to-discord_server-blue?style=for-the-badge&link=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D1101105727340286022%26scope%3Dbot%26permissions%3D8)

### Quick start guide:

What you will need:
- Latest node.js
- mongodb database
- discord bot token(from discord developer site)
- Computer or any hosting

How to start:
1. Download latest release. 
2. Unpack downloaded file.
3. Change .env file with your settings ([see Mechownik bot env variables template](https://github.com/Kitki30/Mechownik/blob/main/README.md#mechownik-bot-env-variable-template))
4. Run ``node main.js`` command to start bot.
**Now bot should work!!!**

### Mechownik bot env variabls
Templates:

**.env file:**
```
botOn=true
catapikey=key-for-cat-api-here
CLIENTID=client-id-here
CLIENTSE=bots-client-secret-here
dogapikey=key-for-dog-api-here
MONGODBURL=mongodb-url-here
PORT=80
TOKEN=bot-token-here
topgg=topgg-auth-here
```

**Json file(Replit Secrets):**
```
{
  "CLIENTID": "client-id-here",
  "CLIENTSE": "bots-client-secret-here",
  "PORT": "80",
  "TOKEN": "bot-token-here",
  "botOn": "true",
  "catapikey": "key-for-cat-api-here", 
  "dogapikey": "key-for-dog-api-here",
  "MONGODBURL": "mongodb-url-here",
  "topgg": "topgg-auth-here"
}
```

Values:
- CLIENTSE - Put client secret here
- CLIENTID - Put client id here
- PORT - Port, not used for anything leave it 80
- TOKEN - Put bot token here
- botOn - Turn on/off executing commands
- catapikey - Cat Image Api Key, get it [here](https://thecatapi.com/)
- dogapikey - Dog Image Api Key, get it [here](https://thedogapi.com/)
- MONGODBURL - Put mongodb database url here
- topgg - Put top.gg auth here(if your bot is on top.gg)
