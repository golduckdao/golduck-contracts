const hre = require("hardhat");

async function main() {

  let GolduckCustomDiscount = "";

  const discount = await hre.ethers.getContractFactory("GolduckCustomDiscount");
  const customDiscount = await discount.deploy();
  await customDiscount.deployed();
  GolduckCustomDiscount = customDiscount.address;
  console.log("goldTokenContract deployed to:", GolduckCustomDiscount); 


  await hre.run("verify:verify", {
    address: GolduckCustomDiscount,
    constructorArguments: [],
  });
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
