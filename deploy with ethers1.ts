
import { ethers } from 'ethers';
import  'ethers lib.ts';

/**
* Deploy the given contract
* @param {string} contractName name of the contract to deploy
* @param {Array<any>} args list of constructor's parameters
* @param {string} from address to deploy the contract from
* @param {string} to address to deploy the contract to
* @return {Promise<Contract>} deployed contract
*/
export const deploy = async (
contractName: 'TheSweep',
args: Array<any>,
from: string = '0xE592427A0AEce92De3Edee1F18E0157C05861564',
to: string = '0x6C2B7902326F4a8E9B28c00F140D18247740a5a0'
) => {
// Your deployment logic here
// For example:
const contract = await ethers.getContractFactory('TheSweep');
const deployedContract = await contract.deploy(args);
await deployedContract.deployed();
return deployedContract;
};