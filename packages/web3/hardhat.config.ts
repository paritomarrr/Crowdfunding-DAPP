require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
// const { ACCOUNT_PRIVATE_KEY,ALCHEMY_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
  },
};