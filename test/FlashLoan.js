const { expect } = require("chai");

describe("flashloan", function () {
  it("Should return the new flashloan once it's changed", async function () {
    const Flashloan = await ethers.getContractFactory("Flashloan");
    const flashloan = await Flashloan.deploy("0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5");
    await flashloan.deployed();

    console.log("Greeter deployed to:", flashloan.address);

  //  expect(await greeter.greet()).to.equal("Hello, world!");

const ContractAddress=await flashloan.getContractAddress();
console.log("Contract Address: ",ContractAddress);

const tx = {
    gasLimit: 50000
  };


const [_, buyerAddress] = await ethers.getSigners(tx);

/* execute sale of token to another user */
await flashloan.connect(buyerAddress).flashloan();

console.log("FlashLoan Contract:",flashloanDemo);
    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
