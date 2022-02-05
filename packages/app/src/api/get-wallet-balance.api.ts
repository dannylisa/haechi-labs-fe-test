import { AxiosRequestConfig } from "axios";
import { IBalance } from "interfaces";
import { requestAPI } from "./config";

export function getWalletBalance(walletId: string){
    const config:AxiosRequestConfig = {
        params:{
            ticker: 'ETH',
        }
    }
    return requestAPI().get<IBalance[]>(`api/v3/ethereum/wallets/${walletId}/balance`,config)
}