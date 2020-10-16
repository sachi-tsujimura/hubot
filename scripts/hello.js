"use strict";

module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ["Happy Day", "Lucky Day", "Super Happy Day"];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`Hello, <@${user_id}>!! your day is ${lot} today!!!!`);
  });
};
