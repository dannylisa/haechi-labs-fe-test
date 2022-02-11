import { Text } from "materials"
import { Cell, Row } from "./TableMaterials"


export const TransfersTableHeader = () => {
    return (
        <thead>
            <Row>
                <Cell className="createdAt">
                    <Text type="P2" bold content="시간" />
                </Cell>
                <Cell className="sendUser">
                    <Text type="P2" bold content="지갑" />
                </Cell>
                <Cell className="receiveUser">
                    <Text type="P2" bold content="내역" />
                </Cell>
                <Cell className="balance" align="right" >
                    <Text type="P2" bold content="수량" />
                </Cell>
                <Cell className="receiveUser" align="right">
                    <Text type="P2" bold content="트랜잭션 해시" />
                </Cell>
                <Cell className="status">
                    <Text type="P2" bold content="상태" />
                </Cell>
            </Row>
        </thead>
    )
}