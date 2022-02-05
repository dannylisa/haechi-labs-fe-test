import { IWallet } from "interfaces";
import { requestAPI } from "./config";

export function getWallets(){
    return requestAPI().get<IWallet[]>('api/v3/ethereum/wallets')
}