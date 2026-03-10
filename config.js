const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RHQkdQZzc5aThCM1JRUVpDVUdQdy92cDJYb3lMNGJFbjVKNUs3cDlGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVitITFhBUDlBSzBRT0RaOGIxKzE5S0hPV2dqRGRVOWVWcUFrNG90RjNCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTVc3VVpaa21mdkFUL2Y1dUpuTnZobjlQRzdWak1aZld3UkliUENwYm1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrWTk0NmpvNjJqRnVkcmI2WHVNTWhWOXcwNHNOblBhQzkyRFRReHBYOVdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLZDdqVUJIaHFxby9uRzlzVEVCdVVuYXBxNXRXN0p4N3V3SlMrODNwVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlczRVBicDM3TWZZcW1GenZHc2dveFUxY3dvMzNxNlpIRFBaNzhZS2praDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0piN0c2K1Z2WFppcTBaa0pDSWx1VFJuS3FpUmJzU0lTYVRyR1NMRVFtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjFOMGpnQWNHbG93TVZHcS9neVJrVGx3RUlUWGFoZ3pyOHcra21wU0xXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFwY0JYSEIybllMcGgvbHBBcTVuUmlXU0VZTVNSSzVkT2V1ZkY4YkdMVEpSSFNFdHo1bHJ1RGtOS1k1ejlWdktEL1BuMC9rc0JCN3U1b00xZXdySGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJ3T2Nzbno3b2RHNGRnMFZnM1pUdlhqWlM2NzRrRUxsdGIwUml6N0wxZmlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc4NDM2NzE0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUFCM0FDMjQ4MUM1MDczQjRFOTM5NEFCNEYxNkQxRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMTc1NzQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3ODQzNjcxNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVFNzNDRTg3QjM1QkFDMDQ3NTc1QjEwRkUxREE5RjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzE3NTc0M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzg0MzY3MTQ3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NjhENUYwNEVDNkI5OTEwOTEwMjExMTdBN0Y2NTlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMxNzU3NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc4NDM2NzE0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBENTAxNjNDNkY2REE5RDc0NTcxNjM1QTMxMTkzOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMTc1NzQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3ODQzNjcxNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2NUNGOTVGRjNDODlEQkQxQjAxMjQzQzQwRkRFNjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzE3NTc0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzg0MzY3MTQ3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QUYwN0UzM0I5NEI1REU5Q0U3NEE4MzI0N0Y2MUQzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMxNzU3NDd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjIxMjc4NDM2NzE0Nzo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im11c3RhcGhhIiwibGlkIjoiMTgxMzQ3MTc1ODk1MjMxOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbU1ydk1DRUxDSHdzMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0L1NKQS8wTCtyMTlCNXFwODE0bE42d2w2ZmpXa2JWelBaYUNNS0twNWhBPSIsImFjY291bnRTaWduYXR1cmUiOiJQREg0YmE4Yys0dmdlZlRETjlwU0M2OHJoV3dRc0RYYnVlZGlQclpCekw4QlJ0c1c5RldXUFFHYzdoUGMrQ2swUVFlZTBZUTZhSFRyWVM0UGxjNjVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSW42elEzTXdDTVU2eWN4THBIVjFORU9WS2JXZzVwb0VrR3A4WFZ1NjQ0emlma3pSZzZDcUgvRCt4UG9pS09CMFMyNVZSU0o0a1pGQ3lsUzhMT2J0aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI3ODQzNjcxNDc6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUDBpUVA5Qy9xOWZRZWFxZk5lSlRlc0plbjQxcEcxY3oyV2dqQ2lxZVlRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzMxNzU3NDIsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFeW0ifQ==",
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
