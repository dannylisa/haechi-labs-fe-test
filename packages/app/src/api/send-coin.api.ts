
import { requestAPI } from "./config";

export function sendCoin(walletId: string, to: string, amount_num: number, passphrase:string){
    const amount = +`${amount_num}e+18` + ""
    const body = {
        ticker: 'ETH',
        to,
        amount,
        passphrase
    }
    return requestAPI().post(`api/v3/ethereum/wallets/${walletId}/transfer`,body)
}