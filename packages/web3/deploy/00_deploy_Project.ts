import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { fetchDeploymentDetails } from "../utils/fetchDeploymentDetails";
import fs from "fs";

const minimumContribution = ethers.utils.parseUnits("1", "wei");
const deadline = (new Date(new Date().getTime()+(5*24*60*60*1000))).valueOf();
const targetContribution = ethers.utils.parseUnits("10", "ether");
const projectTitle = "Testing project";
const projectDes = "Testing project description"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    const deployTx = await deploy("Project", {
      from: deployer,
      args: [deployer,minimumContribution,deadline,targetContribution,projectTitle,projectDes],
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

func.tags = ["Project"];

module.exports = func;