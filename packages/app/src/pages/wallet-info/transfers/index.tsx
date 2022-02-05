import styled from "styled-components";
import produce from "immer";
import { getWalletTransfers } from "api/get-wallet-transfers.api";
import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom";
import { IPagination, ITransfer } from "interfaces";
import { boxCss, Divider, FlexBox, Text } from "materials"
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TransfersTableHeader } from "./TableHeader";
import { TransferRow } from "./TransferRow";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

const Container = styled.div`
    ${boxCss}
    width: 1136px;
    display: flex;
    flex-direction: column;
`

const TableContainer = styled.table`
    table-layout: fixed;
    white-space: nowrap;
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
`

const PageContainer = styled.div`
    & > * {
        margin: 0 12px;
    }
    display: flex;
    align-items: center;
`

const PAGE_SIZE = 15 as const;
const Transfers = () => {
    const wallet = useRecoilValue(currentSelectedWalletState)
    const [transfers, setTransfers] = useState<ITransfer[]>([])
    const [pagination, setPagination] = useState<IPagination>({nextUrl: null, previousUrl: null, totalCount: 0})

    // pagination
    const [page, setPage] = useState<number>(0);
    const toOriginPage = () => setPage(0)
    const toPrevPage = () => pagination.previousUrl && setPage(p => p-1)
    const toNextPage = () => pagination.nextUrl && setPage(p => p+1)
    const toFinalPage = () => setPage(Math.floor(pagination.totalCount / PAGE_SIZE))

    const refreshTransfers = () => {
        if(!wallet)
            return;

        getWalletTransfers(wallet.id, page)
            .then(res => {
                setPagination(res.data.pagination)
                setTransfers(
                    // immer 불변성 관리
                    produce<ITransfer[]>(((draft) => draft = res.data.results))
                )
            })
    }

    useEffect(() => {
        refreshTransfers()
        // 3초에 한 번씩 호출
        const timerId = setInterval(refreshTransfers, 3000)

        return () => clearInterval(timerId)
    }, [wallet?.id, page])
    return (
        <FlexBox justifyContent="center">
            <Container>
                <FlexBox padding={16}>
                    <Text type="P2" content={`총 ${pagination.totalCount}개`} />
                </FlexBox>
                <Divider />

                {/* Table */}
                <TableContainer>
                    <TransfersTableHeader />
                    <tbody>
                        {transfers.map(t => {
                            return (<TransferRow transfer={t} key={t.id} /> )
                        })}
                    </tbody>
                </TableContainer>

                <FlexBox padding={16} justifyContent="flex-end">
                    <PageContainer>
                        <AiOutlineVerticalRight 
                            size={18} 
                            onClick={toOriginPage}
                            color={pagination.previousUrl ? "#121212" : "#747E91"}
                        />
                        <AiOutlineLeft 
                            size={18} 
                            onClick={toPrevPage}
                            color={pagination.previousUrl ? "#121212" : "#747E91"}
                        />
                        <Text 
                            type="P2" 
                            content={
                                `${page*PAGE_SIZE+1}~${
                                    Math.min(pagination.totalCount, (page+1)*PAGE_SIZE)
                                }  of  ${pagination.totalCount}`
                            } 
                        />
                        <AiOutlineRight 
                            size={18} 
                            onClick={toNextPage}
                            color={pagination.nextUrl ? "#121212" : "#747E91"}
                        />
                        <AiOutlineVerticalLeft 
                            size={18} 
                            onClick={toFinalPage}
                            color={pagination.nextUrl ? "#121212" : "#747E91"}
                        />
                    </PageContainer>
                </FlexBox>
            </Container>
        </FlexBox>
    )
}

export default Transfers;