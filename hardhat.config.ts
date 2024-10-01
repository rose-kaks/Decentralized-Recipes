// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require('dotenv').config(); // to load environment variables

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: process.env.INFURA_URL, // Infura URL for Rinkeby
            accounts: [process.env.PRIVATE_KEY] // Your wallet private key
        }
    }
};
