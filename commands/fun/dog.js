/**
* MIT License
*
* Copyright (c) 2023 Kitki30
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var config = require('../../config.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const querystring = require('querystring');
const r2          = require('r2');
require('dotenv').config();
const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = process.env.dogapikey; // get a free key from - https://thedogapi.com/signup
module.exports = {
  data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Wysyła losowe zdjęcie psa.'),

  async execute(interaction) {
    if (config.fundog==false){
      interaction.reply("Komenda wyłączona przez właściciela bota! ");
      return;
    }
    await interaction.reply("Oczekiwanie na obraz z API.")
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    var images = await loadImage();
    var image = images[0];
  
    
    
    const embed = new EmbedBuilder()
  
      .setTitle(`Pies :dog2:`)
      .setColor([0, 255, 0])
      .setImage(image.url)
        .setFooter({ text: config.botname})
    interaction.editReply({ content:"", embeds: [embed] });
  },
};
async function loadImage()
{

  // you need an API key to get access to all the iamges, or see the requests you've made in the stats for your account
  var headers = {
      'X-API-KEY': DOG_API_KEY,
  }
  var query_params = {
    // we only want images with at least one breed data object - name, temperament etc
    'mime_types':'jpg,png', // we only want static images as Discord doesn't like gifs
    'size':'small',   // get the small images as the size is prefect for Discord's 390x256 limit
    'limit' : 1       // only need one
  }
  // convert this obejc to query string 
  let queryString = querystring.stringify(query_params);
  
  try {
 
    let _url = DOG_API_URL + `v1/images/search?${queryString}`;
    // make the request passing the url, and headers object which contains the API_KEY
    var response = await r2.get(_url , {headers} ).json
  } catch (e) {
      console.log(e)
  }
  return response;
}