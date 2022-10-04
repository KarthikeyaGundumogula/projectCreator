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