const Moralis = require("moralis-v1")
require("dotenv").config()

const serverId=process.env.SERVERURL
const appId=process.env.appId

Moralis.start({serverId,appId})