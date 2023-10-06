import { HardhatUpgrades } from '@openzeppelin/hardhat-upgrades'
import { ContractFactory } from 'ethers'
import { task } from 'hardhat/config'
import {
  CONTRACT_NAMES,
  ContractName,
  getDeploymentAddress,
} from '../../.deployment/deploymentManager'
import { verifyAddress } from '../../utils/verifyAddress'

/**
 * @notice This task is used to upgrade for one of the proxy contracts. Use it only locally for your own testnet
 * @usage npx hardhat upgrade-proxy --contract-name "QuoromaID" --proxy-name "QuoromaID" --verify --network mumbai
 * * @usage npx hardhat upgrade-proxy --contract-name "QuoromaID" --proxy-name "QuoromaID" --verify --network hardhat
 */
task('upgrade-proxy', 'Upgrade a proxy to a new implementation')
  .addParam('contractName', 'The name of the new contract implementation')
  .addParam('proxyName', 'The name of the original proxy')
  .addFlag('verify', 'verify contracts on etherscan')
  .setAction(async (args, { ethers, network }) => {
    const { proxyName, contractName, verify } = args
    const [deployer] = await ethers.getSigners()

    console.log('network', network.name)
    console.log(
      'Upgrade by:',
      deployer.address,
      'for proxy contract:',
      proxyName,
      'with new implementation:',
      contractName,
    )

    if (!CONTRACT_NAMES.includes(proxyName as any)) {
      throw new Error(
        `Invalid proxyName provided. It should be one of ${CONTRACT_NAMES.join(', ')}`,
      )
    }
    const proxyAddress = getDeploymentAddress(network.name, proxyName as ContractName)

    if (!proxyAddress) {
      throw new Error(`Proxy address not found for ${proxyName}`)
    }

    console.log('Proxy address:', proxyAddress)

    const NewImplementation = await ethers.getContractFactory(contractName)
    // @ts-ignore: upgrades is imported in hardhat.config.ts
    const proxy = await (upgrades as HardhatUpgrades).upgradeProxy(
      proxyAddress,
      NewImplementation as ContractFactory,
      {
        timeout: 0,
        pollingInterval: 10000,
      },
    )

    console.log('proxy.address', proxy.address)

    if (verify) {
      await verifyAddress(proxy.address)
    }

    const implementationAddress =
      await // @ts-ignore: upgrades is imported in hardhat.config.ts - HardhatUpgrades
      (upgrades as HardhatUpgrades).erc1967.getImplementationAddress(proxy.address)
    console.log(`${proxyName} addresses:`, {
      proxy: proxyAddress,
      implementation: implementationAddress,
    })
  })
