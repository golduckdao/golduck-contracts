const hre = require("hardhat");

async function main() {

  let goldTokenContract = "";

  const gToken = await hre.ethers.getContractFactory("GolduckDAOToken");
  const goldTOken = await gToken.deploy();
  await goldTOken.deployed();
  goldTokenContract = goldTOken.address;
  console.log("goldTokenContract deployed to:", goldTokenContract); 
   await hre.run("verify:verify", {
    address: goldTokenContract,
    constructorArguments: [],
  });


}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
