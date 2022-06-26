import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const minimumContribution = ethers.utils.parseUnits("1", "wei");
const deadline = (new Date(new Date().getTime()+(5*24*60*60*1000))).valueOf();
const targetContribution = ethers.utils.parseUnits("10", "ether");
const projectTitle = "Testing project";
const projectDes = "Testing project description"
  
//       const Project = await ethers.getContractFactory("Project");
//       projectContract = await Project.deploy(creator,minimumContribution,deadline,targetContribution,projectTitle,projectDes);


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    await deploy("Project", {
      from: deployer,
      args: [deployer,minimumContribution,deadline,targetContribution,projectTitle,projectDes],
      log: true,
    });
};

func.tags = ["Project"];

module.exports = func;