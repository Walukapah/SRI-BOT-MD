const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://images.weserv.nl/?url=i.imgur.com/W2CaVZW.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Iam Alive Now 🔴"
};
