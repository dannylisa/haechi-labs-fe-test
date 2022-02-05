import { IWallet } from "interfaces"
import { Text, FlexBox, EtherIcon } from "materials"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

interface WalletPreviewProps {
    wallet:IWallet
}

const Container = styled(Link)<{selected:boolean}>`
    display: flex;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    ${({selected}) => selected && "background-color: #CCDBFF;"}
`
export const WalletPreview = ({wallet}:WalletPreviewProps) => {
    // 현재 해당 지갑 정보를 보고 있는 경우 표시
    const path = `/wallet/${wallet.id}`
    const {pathname} = useLocation();
    const isSelected = pathname === path;

    return (
        <Container to={path} selected={isSelected}>
            <EtherIcon size={16} />
            <FlexBox flexDirection="column" marginLeft={8}>
                <Text elipsis type="P2" style={{width: 160}} content={wallet.name} />
                <Text type="D2" content="테스트넷 이더리움" marginTop={4} />
            </FlexBox>
        </Container>
    )
}