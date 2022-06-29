import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { fetchDeploymentDetails } from "../utils/fetchDeploymentDetails";
import { CONSTANTS } from "../constants/constants.json";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    const deployTx = await deploy("Crowdfunding", {
      from: deployer,
      log: true,
    });
    CONSTANTS[await hre.getChainId()] = await fetchDeploymentDetails(deployTx);
};

func.tags = ["Crowdfunding"];

module.exports = func;