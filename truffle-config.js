var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    matic: {
      provider: function () {
        return new HDWalletProvider(
          "gesture rather obey video awake genuine patient base soon parrot upset lounge",
          "https://testnet2.matic.network"
        );
      },
      network_id: 8995,
      gas: 8000000,
      gasPrice: 0
    }
  }
};
