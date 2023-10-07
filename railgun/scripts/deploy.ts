import { ethers } from "hardhat";

async function main() {
  
  const voteContract = await ethers.getContractFactory("Vote");

  const vote_yes = await voteContract.deploy("yes");
  const vote_no  = await voteContract.deploy("no");

  console.log(vote_yes);


  // Yes Vote : 0xd9145CCE52D386f254917e481eB44e9943F39138
  // No vote  : 0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8
 
  // Gouvernance address:
  // 0xf8e81D47203A594245E36C48e151709F0C19fBe8

  // supply: 20
  // name: Proposal#1
  // yes vote address: 0xd9145CCE52D386f254917e481eB44e9943F39138
  // no vote address : 0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
