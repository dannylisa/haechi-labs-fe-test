import dayjs from "dayjs"
import { ITransfer } from "interfaces";
import { Row, Cell, Statuses, } from "./TableMaterials";
import { FlexBox, Text } from 'materials'
import styled from "styled-components";
import { useMemo } from "react";

interface TransferRowProps {
    transfer: ITransfer
}

const TxBlock = styled.span`
    background-color: #F3F4F6;
    color: #737291;
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 14px;
`

export const TransferRow = ({transfer}:TransferRowProps) => {
    const {id, createdAt, from, to, amount, transactionHash, status, name, decimals, transferType, ticker} = transfer
    const datetime = useMemo(() => dayjs(+createdAt).format('YYYY-MM-DD HH:mm:ss'), [id])
    
    const truncatedAddress = useMemo(() => (transferType==="DEPOSIT" ? from : to).slice(0,30)+"...", [id])
    
    // 수량(소수점 8째자리에서 버림), 색깔
    const amountDec = useMemo(() => `${
        (+`${Math.floor(+`${amount}e-${decimals-8}`)}e-8`)
    } ${ticker}`, [amount])

    const amountColor = useMemo(() => +amount === 0 ? "#323432" : transferType==="DEPOSIT" ? "#05A67B" : "#F5405B" , [id])

    // Status 표시용
    const [Icon, color, state] = useMemo(() => Statuses[status], [status])
    return (
        <Row>
            <Cell className="createdAt">
                <Text type="P2" content={datetime} />
            </Cell>
            <Cell className="sendUser">
                <Text type="P2" content={name} />
            </Cell>
            <Cell className="receiveUser">
                <Text type="P2" content={truncatedAddress} />
                <Text type="D1" content={transferType==="DEPOSIT" ? ' 로부터 입금' : ' 로 출금'} />
            </Cell>
            <Cell className="balance" align="right">
                <Text 
                    type="P2" 
                    color={amountColor} 
                    content={transferType==="DEPOSIT" ? "+" : "-"} 
                    marginRight={4}
                />
                <Text 
                    type="P2" 
                    color={amountColor} 
                    content={amountDec} 
                />
            </Cell>
            <Cell className="txHash" align="right">
                <TxBlock>
                    {`${transactionHash.slice(0,6)}...${transactionHash.slice(-6)}`}
                </TxBlock>
            </Cell>
            <Cell className="status">
                <FlexBox alignItems="center">
                    <Icon size={22} color={color} />
                    <Text bold type="P2" content={state} color={color} marginLeft={3}/>
                </FlexBox>
            </Cell>
        </Row>
    )
}
