"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const chai_1 = require("chai");
const mocha_chai_jest_snapshot_1 = require("mocha-chai-jest-snapshot");
(0, chai_1.use)((0, mocha_chai_jest_snapshot_1.jestSnapshotPlugin)());
async function snapshotGasCost(x) {
    const unpromised = await x;
    if (Array.isArray(unpromised)) {
        const unpromisedDeep = await Promise.all(unpromised.map(async (p) => await p));
        const waited = await Promise.all(unpromisedDeep.map(async (p) => p.wait()));
        (0, chai_1.expect)({
            gasUsed: waited.reduce((m, v) => m + v.gasUsed.toNumber(), 0),
            calldataByteLength: unpromisedDeep.reduce((m, v) => m + v.data.length / 2 - 1, 0),
        }).toMatchSnapshot();
    }
    else if (typeof unpromised === 'number') {
        (0, chai_1.expect)(unpromised).toMatchSnapshot();
    }
    else if ('wait' in unpromised) {
        const waited = await unpromised.wait();
        (0, chai_1.expect)({
            gasUsed: waited.gasUsed.toNumber(),
            calldataByteLength: unpromised.data.length / 2 - 1,
        }).toMatchSnapshot();
    }
    else if (bignumber_1.BigNumber.isBigNumber(unpromised)) {
        (0, chai_1.expect)(unpromised.toNumber()).toMatchSnapshot();
    }
}
exports.default = snapshotGasCost;
//# sourceMappingURL=index.js.map