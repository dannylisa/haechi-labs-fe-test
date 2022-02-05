export interface IWallet {
    accountKey: {
        pub: string, 
        keyFile: string
    }
    address: string
    createdAt: string
    encryptionKey: string
    id: string
    name: string
    orgId: string
    status: string
    updatedAt: string
    whitelistActivated: false
}