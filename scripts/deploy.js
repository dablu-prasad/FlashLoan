// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const Flashloan = await ethers.getContractFactory("Flashloan");
  const flashloan = await Flashloan.deploy("0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5");
  await flashloan.deployed();

  console.log("FlashLoan deployed to:", flashloan.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
