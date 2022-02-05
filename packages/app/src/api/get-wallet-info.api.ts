import { IWallet } from "interfaces";
import { requestAPI } from "./config";

export function getWalletInfo(walletId: string){
    return requestAPI().get<IWallet>(`api/v3/ethereum/wallets/${walletId}`)
}