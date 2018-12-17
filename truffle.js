/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");

const ropstenUrl = `https://ropsten.infura.io/v3/${
  process.env.INFURA_ROPSTEN_PROJECT_ID
}`;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, ropstenUrl),
      network_id: 3
    }
  }
};
