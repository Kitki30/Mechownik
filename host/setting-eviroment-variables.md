# Setting Eviroment Variables

Hello,

Now we will set enviroment variables.

Remember that folder from configuration? Create file named .env in it, then open it with Visual Studio Code.

Paste this:

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

Settings:

* CLIENTSE - Put client secret here
* CLIENTID - Put client id here
* PORT - Port, not used for anything leave it 80
* TOKEN - Put bot token here
* botOn - Turn on/off executing commands
* catapikey - Cat Image Api Key, get it [here](https://thecatapi.com/)(can be disabled in config.js)
* dogapikey - Dog Image Api Key, get it [here](https://thedogapi.com/)(can be disabled in config.js)
* MONGODBURL - Put mongodb database url here
* topgg - Put top.gg auth here(if your bot is on top.gg)

When you are ready, go to next page:

{% content-ref url="running-bot.md" %}
[running-bot.md](running-bot.md)
{% endcontent-ref %}
