import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { fetchDeploymentDetails } from "../utils/fetchDeploymentDetails";
import fs from "fs";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    const deployTx = await deploy("Crowdfunding", {
      from: deployer,
      log: true,
    });
    const chainid=await hre.getChainId();
    const deploymentDetails= await fetchDeploymentDetails(deployTx);
    // read file and make object
    let content = (fs.readFileSync(require.resolve('../constants/constants.json'), 'utf8'));
    // edit or add property
    content = JSON.parse(content);
    if(content[chainid]== null || undefined) {
      content[chainid] = {};
    }
    content[chainid][deploymentDetails.nameOfContract] = deploymentDetails;
    //write file
    fs.writeFileSync(require.resolve('../constants/constants.json'), JSON.stringify(content));
};

func.tags = ["Crowdfunding"];

module.exports = func;