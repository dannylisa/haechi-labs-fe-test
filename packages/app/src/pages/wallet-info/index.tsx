import { getWalletInfo } from "api/get-wallet-info.api";
import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom";
import { FlexBox } from "materials";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { WalletHeader } from "./WalletHeader";
import { WalletMain } from "./WalletMain";
import { WalletNotFound } from "./WalletNotFound";


interface WalletInfoParams {
    id: string;
}

export default function WalletInfo(){
    const {id} = useParams<keyof WalletInfoParams>();

    const [loading, setLoading] = useState<boolean>(true);
    const [wallet, setWallet] = useRecoilState(currentSelectedWalletState)


    useEffect(() => {
        if(!id)
            return;
        getWalletInfo(id)
            .then((r) => {
                setWallet(r.data)
            })
            .catch((e) => console.log(e.response.data))
            .finally(() => setLoading(false))

        // 선택 지갑 초기화
        return () => setWallet(null)
    },[id])
    return wallet ? (
        <FlexBox flexDirection="column">
            <WalletHeader />
            <WalletMain />
        </FlexBox>
    ) : !loading ? (
        <WalletNotFound />
    ) : null
}