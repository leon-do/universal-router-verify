// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

struct ETCswapParameters {
    address v2Factory;
    address v3Factory;
    bytes32 pairInitCodeHash;
    bytes32 poolInitCodeHash;
}

contract ETCswapImmutables {
    /// @dev The address of ETCswapV2Factory
    address internal immutable ETCSWAP_V2_FACTORY;

    /// @dev The ETCswapV2Pair initcodehash
    bytes32 internal immutable ETCSWAP_V2_PAIR_INIT_CODE_HASH;

    /// @dev The address of ETCswapV3Factory
    address internal immutable ETCSWAP_V3_FACTORY;

    /// @dev The ETCswapV3Pool initcodehash
    bytes32 internal immutable ETCSWAP_V3_POOL_INIT_CODE_HASH;

    constructor(ETCswapParameters memory params) {
        ETCSWAP_V2_FACTORY = params.v2Factory;
        ETCSWAP_V2_PAIR_INIT_CODE_HASH = params.pairInitCodeHash;
        ETCSWAP_V3_FACTORY = params.v3Factory;
        ETCSWAP_V3_POOL_INIT_CODE_HASH = params.poolInitCodeHash;
    }
}
