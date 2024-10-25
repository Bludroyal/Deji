//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349073844079";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1QamROZDJ3S1l6bDBzdmlpTVBoMnI5dmdkeWorSEVVaGhTaE5lcE5scz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2EzbU9ycjRCNWd6K0UyMnN0aUt4dXpwRlhNSnF6ZHVoWFozUEVOSThFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRll4Q2JxZU1kZU9oVjhkM2F4LzJPa3FTdnlmd1FTeDV6amx4bEp4bVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4ZzdBclljc1MzOTNWSWhMNnhLY21UTVJPeTg2S3ZUNnJLdWx6RStrU1M4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNeVRGejBWODBMTzhpYmRqQ0phSnA5TUFndTJmV0ZUcE5PdTZVQXRNRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYxMlZ3YVJud3pRMEVLcVR3U0tNYWQraVRNcEJ2SFE4Sm5NdnZuRzQzM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9VaUR2TzJJU25TYWdmVW12aW9sNGVlSGJHYWp3RjZTazZKSmhheU5rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGVWdmc0Wm1rNWltRksxQWl3NkpIY2lHUzRtWjB0Z21RaGE2SzBOOUdYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk5d2toUWx5YlB1UmZWMzB4OHdPOFloZUdsOGp2TkR0QVE0WFJGZG82bWVpdTlnWnl1QlBKZis1WnFIUlFiaDdRSVJLYmlCN3JhZFhQdkptZCtaOGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJOOVZIcW1WNnRxcHJjNkgyZmIyR2twbk1hZThJVG1DeFdSNi9rODZJNzhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5VDN4UmtaZVJiMlZNMDd3R3NHUmNBIiwicGhvbmVJZCI6ImI1M2JiZmMzLTVkYmEtNDIyNi1iZGI5LTFlMDFiZmM4MGVmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOW5xSlFrY3RqSSt0UU5wWE81NVpmNmROczA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVV6UXpKTFlPd2pIYmVXUUxnYTNtVm5UQ1ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxXNTZUWUYyIiwibWUiOnsiaWQiOiIyMzQ5MDczODQ0MDc5OjI2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ0w2STBGRVBEbjdiZ0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5VUJZRVQyUXRxa2lBN3VHLzhvVkJFa0J5U0FSbVVZSGFkTm14TXNieUVjPSIsImFjY291bnRTaWduYXR1cmUiOiJsc0lvY2xJeEUxU3dUVmJyQ0dhK3kzOHN4T3poZDROK0NVS3VjODZmVVJjU2lZR3FhNmxMZnRRYklIWi9vemw3VnIwRThEQUZ4S2R3bGtBWHgzeEhEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibExtQXUzajRZR3N1ZDZ6YUJmYjJzZjFidTN6MFZmZjhXb21sVCtZZ1hnL1c1NWxJNllEd2lPOUZOVHNhMnhBRjJ5dm1JQlNTM1ByTDZsdnhFMXdJZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDczODQ0MDc5OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNsQVdCRTlrTGFwSWdPN2h2L0tGUVJKQWNrZ0VabEdCMm5UWnNUTEc4aEgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk4NTI0MTV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Dêji`",
  author: process.env.PACK_AUTHER || "Dêji",
  packname: process.env.PACK_NAME || "Dêji",
  botname: process.env.BOT_NAME || "Dêji",
  ownername: process.env.OWNER_NAME || "Dêji",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Dêji").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
