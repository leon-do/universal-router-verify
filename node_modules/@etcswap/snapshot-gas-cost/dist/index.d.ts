import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractTransaction } from '@ethersproject/contracts';
export default function snapshotGasCost(x: TransactionResponse | Promise<TransactionResponse> | TransactionResponse[] | Promise<TransactionResponse>[] | ContractTransaction | Promise<ContractTransaction> | TransactionReceipt | Promise<BigNumber> | BigNumber | Promise<number> | number): Promise<void>;
