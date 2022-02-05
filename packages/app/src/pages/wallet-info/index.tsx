import { getWalletInfo } from "api/get-wallet-info.api";
import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom";
import { FlexBox } from "materials";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { WalletHeader } from "./WalletHeader";
import { WalletMain } from "./WalletMain";


interface WalletInfoParams {
    id: string;
}

export default function WalletInfo(){
    const {id} = useParams<keyof WalletInfoParams>();

    const setWallet = useSetRecoilState(currentSelectedWalletState)
    const refreshWallet = () => {
        if(!id)
            return;
        getWalletInfo(id)
            .then((r) => setWallet(r.data))
            .catch()
    }

    useEffect(() => {
        // 3초마다 지갑 갱신
        refreshWallet()

        // 선택 지갑 초기화
        return () => setWallet(null)
    },[id])
    return (
        <FlexBox flexDirection="column">
            <WalletHeader />
            <WalletMain />
        </FlexBox>
    )
}