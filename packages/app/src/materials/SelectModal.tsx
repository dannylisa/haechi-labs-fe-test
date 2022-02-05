import styled from "styled-components"
import { Text } from "./Text"
import { Divider } from "./Divider"
import { FlexBox } from "./FlexBox"

const Container = styled.div<{show: boolean}>`
    ${({show}) => !show && `display: none;`}
    position: absolute;
    background-color: #ffffff;
    left: 0;
    right: 0;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    border-radius: 5px;
    z-index: 100;
`

const ItemContainer = styled.div`
    padding: 12px;
    :hover {
        background-color: #dedbde;
    }
`

interface SelectModalProps {
    show: boolean
    title: string
    items: string[]
    onSelect: (index: number) => void
}

export const SelectModal = ({show, title, items, onSelect}:SelectModalProps) => {
    const onClick = (i:number) => () => {
        onSelect(i)
        console.log(i)
    }
    return (
        <Container show={show} >
            <FlexBox padding={12}>
                <Text type="D1" content={title} />
            </FlexBox>
            <Divider />
            {items.map((item, i) => (
                <ItemContainer key={i} onClick={onClick(i)} >
                    <Text type="P1" content={item} />
                </ItemContainer>
            ))}
        </Container>
    )
}