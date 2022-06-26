import { extendEnvironment, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import 'dotenv/config';

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    buildbear: {
      url: process.env.BBRPC
    }
  },
  namedAccounts: {
    deployer: 0,
  },
};