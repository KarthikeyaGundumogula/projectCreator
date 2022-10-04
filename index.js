const Moralis = require("moralis-v1");
require("dotenv").config();
const url = process.env.SERVERURL;
const appId = process.env.APPID;
let profile = document.getElementById("profile");

Moralis.start({ serverUrl: url, appId: appId });

async function connect() {
  let user = Moralis.user.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Sign in to Moralis" })
      .then(() => {
        console.log("User is authenticated");
        profile.textContent = "Connected";
      })
      .catch((error) => {
        console.log("User is not authenticated");
      });
  } else {
    console.log("User is already authenticated");
    profile.textContent = "Connected";
  }
}

profile.onclick = connect;
