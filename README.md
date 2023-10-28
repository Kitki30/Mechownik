[![Version][version-shield]](version-url)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
# Mechownik
## Open Source Discord Bot

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