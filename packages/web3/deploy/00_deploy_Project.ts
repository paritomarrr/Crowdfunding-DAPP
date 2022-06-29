import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { fetchDeploymentDetails } from "../utils/fetchDeploymentDetails";
import fs from "fs";

const constants = '../constants/constants.json';
const file = require(constants);
    
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
    file.key = await hre.getChainId();
    
    fs.writeFileSync(constants, JSON.stringify(file), function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(file));
      console.log('writing to ' + fileName);
});

    // CONSTANTS[await hre.getChainId()] = await fetchDeploymentDetails(deployTx);
};

func.tags = ["Project"];

module.exports = func;