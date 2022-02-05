import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom"
import { Divider, FlexBox } from "materials";
import { IconType } from "react-icons";
import { HiUpload } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useRecoilValue } from "recoil"
import { WalletInfoMenuTab } from "./WalletInfoMenuTab";
import { useState } from "react";
import { HEADER_HEIGHT, VALID_SCREEN_CSS } from "./constants";
import Transfers from "./transfers";
import { Withdrawl } from "./Withdrawl";
import styled from "styled-components";

const tabs:[IconType, string][] = [
    [AiOutlineUnorderedList, "입출금 내역"],
    [HiUpload, "출금"],
]

const MainWrapper = styled.div`
    ${VALID_SCREEN_CSS}
    background-color: #f9f9f9;
    min-height: calc(calc(100vh - ${HEADER_HEIGHT}) - 30px);
    padding: 45px 20px 60px 20px;
`

export const WalletMain = () => {
    const wallet = useRecoilValue(currentSelectedWalletState)
    const [selected, setSelected] = useState<number>(0)
    if(!wallet) return null;

    return (
        <>
        <WalletInfoMenuTab {...{tabs, selected, setSelected}} />
        <Divider />
        <MainWrapper>
            {selected === 0 ? <Transfers />
            :
            selected === 1 ? <Withdrawl />
            :
            null
        }
        </MainWrapper>
        </>
    )
}