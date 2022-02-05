import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom"
import { Text, FlexBox, EtherIcon, boxCss } from "materials"
import { IoMdDownload } from "react-icons/io"
import { IoCopyOutline } from "react-icons/io5"
import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { copyToClipboard } from "utils/copyToCkipboard"
import { HEADER_HEIGHT, VALID_SCREEN_CSS } from "./constants"

const Wrapper = styled.div`
    ${VALID_SCREEN_CSS}
    height: ${HEADER_HEIGHT};
`

const AddressContainer = styled.div`
    ${boxCss}
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 10px;
`


export const WalletHeader = () => {
    const wallet = useRecoilValue(currentSelectedWalletState)
    const onCopyAddress = () => {
        if(!wallet) return;

        copyToClipboard(wallet.address)
        alert('지갑 주소가 복사되었습니다.')
    }

    if(!wallet) return null;
    return (
        <Wrapper>
            <FlexBox paddingVertical={48} flexDirection="column">
                {/* Title */}
                <FlexBox justifyContent="space-between">
                    <FlexBox alignItems="center">
                        <EtherIcon size={28} />
                        <Text type="H1" content={wallet.name} marginLeft={10} />
                        <Text type="D1" size={18} content="|" marginHorizontal={8} />
                        <Text type="D1" content={`ID: ${wallet.id}`} />
                    </FlexBox>
                </FlexBox>

                {/* Address */}
                <FlexBox marginTop={32}>
                    <AddressContainer>
                        <IoMdDownload color="#ccc" size={24} />
                        <Text style={{flex:1}} type="P1" content={wallet.address} marginLeft={10} />
                        <IoCopyOutline size={24} onClick={onCopyAddress} />
                    </AddressContainer>
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}