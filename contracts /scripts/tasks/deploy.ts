import { setDeploymentAddress } from '../../.deployment/deploymentManager'
import { task } from 'hardhat/config'
import { verifyAddress } from '../../utils/verifyAddress'
import { HardhatUpgrades } from '@openzeppelin/hardhat-upgrades'

task('deploy', 'Deploy all contracts')
  .addFlag('verify', 'verify contracts on etherscan')
  .setAction(async (args, { ethers, network }) => {
    const { verify } = args
    console.log('Network:', network.name)

    const [deployer] = await ethers.getSigners()
    console.log('Using address: ', deployer.address)

    const balance = await ethers.provider.getBalance(deployer.address)
    console.log('Balance: ', ethers.utils.formatEther(balance))

    //@note **************** UPGRADABLE SECTION - QuoromaID ******************/

    const QuoromaID = await ethers.getContractFactory('QuoromaID')
    const quoromaIDArgs: [] = []
    // @ts-ignore: upgrades is imported in hardhat.config.ts - HardhatUpgrades
    const quoromaID = await (upgrades as HardhatUpgrades).deployProxy(QuoromaID, quoromaIDArgs, {
      timeout: 0,
      pollingInterval: 20000,
    })
    if (verify) {
      await verifyAddress(quoromaID.address)
    }
    const quoromaIDImplementationAddress = await // @ts-ignore
    (upgrades as HardhatUpgrades).erc1967.getImplementationAddress(quoromaID.address)
    console.log('QuoromaID addresses:', {
      proxy: quoromaID.address,
      implementation: quoromaIDImplementationAddress,
    })
    setDeploymentAddress(network.name, 'QuoromaID', quoromaID.address)
    //************************************/
  })
