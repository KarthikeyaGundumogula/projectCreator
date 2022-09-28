/* Moralis init code */
const serverUrl = "https://uawnov8scfvn.usemoralis.com:2053/server";
const appId = "EDHnguXGhXgmfCbdhsoj7TjXmJkqixOYXwk0F0KR";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Log in using Moralis",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        document.getElementById("accAddress").innerText=user.get("ethAddress")
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

document.getElementById("connectBtn").onclick=login