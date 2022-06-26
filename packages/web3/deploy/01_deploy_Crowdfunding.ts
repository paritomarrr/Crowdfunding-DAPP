import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    await deploy("Crowdfunding", {
      from: deployer,
      log: true,
    });
};

func.tags = ["Crowdfunding"];

module.exports = func;