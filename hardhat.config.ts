import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
// import '@nomicfoundation/hardhat-chai-matchers'
import '@nomiclabs/hardhat-etherscan'
import dotenv from 'dotenv'
dotenv.config()

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.8.17',
  settings: {
    viaIR: true,
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  paths: {
    sources: './contracts',
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      chainId: 1,
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        blockNumber: 15360000,
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://rinkeby.arbitrum.io/rpc`,
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
    },
    optimismKovan: {
      url: `https://kovan.optimism.io`,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    base: {
      url: `https://developer-access-mainnet.base.org`,
    },
    baseGoerli: {
      url: `https://goerli.base.org`,
    },
    mordor: {
      url: "https://geth-mordor.etc-network.info",
    },
    classic: {
      url: "https://etc.rivet.link",
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: {
      classic: "b6390974-9880-4130-9a3b-fd4a7b80fc39",
      mordor: "57246839-f3fb-4d62-ae57-4214b12a697e",
      goerli: "24674a64-9981-4694-83fa-4b4b746f49a4"
    },
    customChains: [
      {
        network: "classic",
        chainId: 61,
        urls: {
          apiURL: "https://etc.blockscout.com/api",
          browserURL: "https://etc.blockscout.com/",
        },
      },
      {
        network: "mordor",
        chainId: 63,
        urls: {
          apiURL: "https://etc-mordor.blockscout.com/api",
          browserURL: "https://etc-mordor.blockscout.com/",
        },
      },
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://eth-goerli.blockscout.com/api",
          browserURL: "https://eth-goerli.blockscout.com/",
        },
      }
    ],
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  mocha: {
    timeout: 60000,
  },
}
