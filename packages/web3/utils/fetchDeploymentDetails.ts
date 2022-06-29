import { ABI, Address } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

interface deploymentDetails {
    nameOfContract: string,
    contractAddress: Address,
    abi: ABI 
}

export const fetchDeploymentDetails =async (deploymentTx: any):Promise<deploymentDetails> => {
    const nameOfContract = deploymentTx.contractName;
    const abi = deploymentTx.abi;
    const contractAddress = deploymentTx.address
    return {
        nameOfContract,
        abi,
        contractAddress
    }
}