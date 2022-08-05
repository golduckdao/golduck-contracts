const hre = require("hardhat");

async function main() {

  let iterableMappingContract = "";
  let rewardPool = "";

  const mapping = await hre.ethers.getContractFactory("IterableMapping");
  const IterableMapping = await mapping.deploy();
  await IterableMapping.deployed();
  iterableMappingContract = IterableMapping.address;
  console.log("IterableMapping deployed to:", IterableMapping.address); 


   await hre.run("verify:verify", {
    address: iterableMappingContract,
    constructorArguments: [],
  });

  const pool = await hre.ethers.getContractFactory("RewardPool", {
    libraries: {
      IterableMapping: iterableMappingContract
    }});
  const poolInstance = await pool.deploy();
  await poolInstance.deployed();
  rewardPool = poolInstance.address;
  console.log("poolInstance deployed to:", poolInstance.address); 
   await hre.run("verify:verify", {
    address: rewardPool,
    constructorArguments: [],
        libraries: {
        IterableMapping: iterableMappingContract
      },
  });


}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
