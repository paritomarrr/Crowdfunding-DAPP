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
  defaultNetwork: 'rinkeby',
  networks: {
    buildbear: {
      url: 'https://backend.buildbear.io/node/priceless-gauss-b2352a'
    }, 
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/yV31WGUY_WT1SftYSjzVldM-oaWbdNWk',
      accounts: ['c58801915f610f0ff13130493b9d3850a9dc8655207024ef2bea7b726f636305']
    }
  },
  namedAccounts: {
    deployer: 0,
  },
};