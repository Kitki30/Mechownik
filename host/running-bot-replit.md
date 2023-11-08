# Running bot (Replit)

Running bot (for Replit):

Before you start bot, you need to install packages using this command (This step is required only after installing new version or first start):

```
npm install
```



There are three commands you can run to start the bot:\
\
Command 1, Run with nodemon(Recomended):

```bash
npx nodemon main.js
```

Command 2, Run with npm package manager:

```bash
npm run run
```

Command 3, Run directly with node.js:

```bash
node main.js
```

To setup "Run" button:\
Create ".replit" file

Open it

Delete everything in it

Paste this:

<pre><code>modules = ["nodejs-18:v3-20230608-f4cd419"]
hidden = [".config", "package-lock.json"]
<strong>run = "npx nodemon main.js"
</strong>
[nix]
channel = "stable-23_05"

[unitTest]
language = "nodejs"

[deployment]
run = ["sh", "-c", "npm run test"]
deploymentTarget = "cloudrun"
ignorePorts = false
</code></pre>

Change run = "npx nodemon main.js" to your command(keep "run =")

Now you should see something like this:

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

It's Mechownik Start Menu!

From here you can:\
Start Client(Bot)

Refresh SlashCommands

Refresh SlashCommands and start Client(Bot)

Exit

To select option type number in console and press enter.

If you dont select option in five seconds Client will start!

Now bot is running, go to next page to invite it to your server:

{% content-ref url="inviting-bot-to-your-server.md" %}
[inviting-bot-to-your-server.md](inviting-bot-to-your-server.md)
{% endcontent-ref %}
