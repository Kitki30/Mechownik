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
const { Riffy } = require("riffy");
const { Events } = require('discord.js');
const delay = require(`delay`);
const { ActivityType } = require("discord.js");
const activities = [
  "Mechownik",
  "Spotify",
  "/ping",
  "/help | Mechownik",
  "/avatar",
  "/help | Mechownik"
];

module.exports = {
	name: Events.ClientReady,
	once: false,
	async execute(client) {


    
  setInterval(() => {
    // generate random number between 0 and length of array.
    
    const randomIndex = Math.floor(Math.random() * activities.length);
    const newActivity = activities[randomIndex];

    
    if (newActivity == "Spotify") {
      client.user.setActivity(newActivity, {
        type: ActivityType.Listening,
      })
    } else {
      client.user.setActivity(newActivity, {
        type: ActivityType.Playing,
      });
    }
  }, 10_000);
    
	},
};