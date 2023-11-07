# Setting Eviroment Variables (Replit)

Hello,

Now we will set enviroment variables.

This page is for replit.

Go to Secrets:

<div align="left">

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

</div>

Secrets Tab Should Open looking like this:\


<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Press "Edit as Json" button

<div align="left">

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

</div>

Something like this should show up:

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

Paste this (There will be { and } at end of this text box delete it and paste code below):

```json
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

{% content-ref url="running-bot-replit.md" %}
[running-bot-replit.md](running-bot-replit.md)
{% endcontent-ref %}
