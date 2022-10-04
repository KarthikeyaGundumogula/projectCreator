<<<<<<< HEAD
const Moralis = require("moralis-v1");
require("dotenv").config();

const SERVERURL = process.env.SERVERURL;
const APPID = process.env.APPID;

Moralis.start( { serverUrl: SERVERURL, appId: APPID } );

async function connect () {
    let user = await Moralis.User.current();
    if ( !user ) {
        user = await Moralis.Web3.authenticate();
    }
    console.log( user );
}

connect();
=======
const Moralis = require("moralis-v1")
require("dotenv").config()

const serverId=process.env.SERVERURL
const appId=process.env.appId

Moralis.start({serverId,appId})

const profile=document.getElementById("profile")
>>>>>>> 0c92ef19a9e8b7cc234c2874b3641f3ce2c2855f
