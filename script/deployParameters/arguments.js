// https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#complex-arguments
// npx hardhat verify --network mordor --show-stack-traces --constructor-args script/deployParameters/arguments.js 0x0155B07AD088C8BCb8be277Fc460264A4Dd1e016

const MAINNET = false
const UNSUPPORTED_PROTOCOL = MAINNET
  ? '0xb03a327dF32A94bea9036ED51CD431220C4b6A89'
  : '0xA88cD383962992b616D3F9672d0A13f909Eaf30d'
const BYTES32_ZERO = '0x0000000000000000000000000000000000000000000000000000000000000000'
                      

module.exports = [
  {
    permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    weth9: '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a',
    seaportV1_5: UNSUPPORTED_PROTOCOL,
    seaportV1_4: UNSUPPORTED_PROTOCOL,
    openseaConduit: UNSUPPORTED_PROTOCOL,
    nftxZap: UNSUPPORTED_PROTOCOL,
    x2y2: UNSUPPORTED_PROTOCOL,
    foundation: UNSUPPORTED_PROTOCOL,
    sudoswap: UNSUPPORTED_PROTOCOL,
    elementMarket: UNSUPPORTED_PROTOCOL,
    nft20Zap: UNSUPPORTED_PROTOCOL,
    cryptopunks: UNSUPPORTED_PROTOCOL,
    looksRareV2: UNSUPPORTED_PROTOCOL,
    routerRewardsDistributor: UNSUPPORTED_PROTOCOL,
    looksRareRewardsDistributor: UNSUPPORTED_PROTOCOL,
    looksRareToken: UNSUPPORTED_PROTOCOL,
    v2Factory: UNSUPPORTED_PROTOCOL,
    v3Factory: '0x6CDb6F10DD1BCb04c81A24481f5Dad01d0F0E533',
    pairInitCodeHash: BYTES32_ZERO,
    poolInitCodeHash: '0x7ea2da342810af3c5a9b47258f990aaac829fe1385a1398feb77d0126a85dbef',
  },
]
