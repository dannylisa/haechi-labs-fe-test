import { AxiosRequestConfig } from "axios";
import { IBalance, ITransferRequest } from "interfaces";
import { requestAPI } from "./config";

export function getWalletTransfers(walletId: string, page: number){
    const config:AxiosRequestConfig = {
        params: {
            walletId,
            ticker: 'ETH',
            page
        }
    }
    return requestAPI().get<ITransferRequest>(`api/v3/ethereum/transfers`, config)
}