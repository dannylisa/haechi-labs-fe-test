import { IWallet } from "interfaces";
import { atom } from "recoil";

export const currentSelectedWalletState = atom<IWallet | null>({
    key: 'current-selected-wallet',
    default: null
});