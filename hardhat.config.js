require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.0",
      },
      {
        version: "0.6.7",
        settings: {},
      },
    ],
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    Kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/Z1GXeEbVuNlUZK2KYd_q2fF0hQTQ25AQ",
      accounts: [`527b82b8fe0d96a312c543e26aed0e6793ac409b8c3f1d9884a757e1f2a37e2a`],
      gas: 5000000,
        gasPrice: 8000000000,
    }
  }
  }