
export type StatusType ="REJECTED" | "REQUESTED" | "FAILED" |
                        "PENDING" | "MINED" | "CONFIRMED" | 
                        "REVERTED" | "REPLACED" | "PENDING_APPROVAL"

export interface ITransfer {
    amount: string
    createdAt: string
    decimals:number
    depositAddressId: string | null
    from: string
    hopTransactionHash: string | null
    hopTransactionId: string | null
    id: number
    metadata: string | null
    name: string
    orgId: string
    status: StatusType
    ticker: string
    to: string
    transactionHash: string
    transactionId: string
    transferType: "WITHDRAWAL" | "DEPOSIT"
    updatedAt: string
    walletId: string
}

