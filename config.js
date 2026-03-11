const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5QQ2IzRG5ZdkYvdUdQTWZ5QXdENVNzeC94WWpSbytabEFySW8waElXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFEyWDNRc3l6NGxXN3NmcVovV0dkTTBxZ1BsVTFxd3h3SFVGMDZ0UWlrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQmtuQ3A4VFpyMG1WcURTUzhWVWtmbXllUGE1Y1JxMThiWDRBdFJVbWt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1U3JHWDArRmJGSWdLRWhIQ3Z2RkFMVGcxZHc5QTdRTW9MQkg4Rmw0ZDNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGU085c0ZuWS8yUFFkRURaNTRKczV0WEZieUlOb0FFejd3bHQ4S09nbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZldEdsa3hCVXJTdXRiWWtmUFRZaklZaGV2M25xRFhyWmI0Mm5QU2VQZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01rQ3NhNEJUNExzNXBkZU1WTTdZNnc2RHJudVZieUx0REZFNUF6a29VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJZS290Y1A5R3NxUHRxTzByUDMzQVVvRkx3bUhMbnZJU0paV3lsa1hTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtaYXVqMDdlcHpMcWZRTWczNXZGV01odUFxbVhKYVN0SDA4bU5BL2tCcVoxbFNkVEhBU3plSjdIdVNrb05HVDdHdDdZajl1dGc0R3RjY0ZnRElYUERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6InhCL0VaN2RFSGVpN0p3NExNaHpRazNTcTdlZjgvNFNWTlpOaEQyTE1pbzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTkyMTE5MTQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNUNCNTk0MjZDNUNBRjY5NDZBQjg2NUU0NzE2Mjg3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMyNDg2NzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU5MjExOTE0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzBFMjMxNjQzRkJDMDJGMjkyODY2ODYwMDk5OUVBQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMjQ4Njc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzM1OTIxMTkxNDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxQjdCQTYxRjg1REIzRUE3RjdFNjAxOTJBMTYzNkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzI0ODY3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTkyMTE5MTQxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMDU1RDgyOUMwQjU5OTk2QzU2QjZFM0JGRDUyNUY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMyNDg2NzZ9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjIzMzU5MjExOTE0MToxOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzMDg3NDcwMDUxNDMzOjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWFNMDdFRkVJN0J4czBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUxFVVF4Q3ZCUU9IUklTdzZvSjJoZVlUK05HcmlvK0NJRmlFcjl6Y3FCdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieHN3bXlmOWVDeVBaakdNTDIvb3FLa2VNRVlXcU9HbzBIMmRuYTdmZ3oyb0lacmxFNlpoNnE1TkxYUGtVWjhKMjVURG5SNFFiMUNYMFYzN05hbHJrQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImUwYTYwZ0tHYlYwYW9EWTZ6VDAxbzlBcFNRbnFmelJqcyt1dW9wdDZVRW9qa0hvaEJqREtReXFLdE1XbTNFaVI4a21OUjlSd0lkZCtZaWUvMEQyZURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTkyMTE5MTQxOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllpeEZFTVFyd1VEaDBTRXNPcUNkb1htRS9qUnE0cVBnaUJZaEsvYzNLZ2MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUWdOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MzI0ODY2OCwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBcVYifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E-liubaBot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Your-Own-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E-liubaBot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233592119141",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E-liubaBot*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E-liuba ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
