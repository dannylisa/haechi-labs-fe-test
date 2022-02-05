import { ComponentPropsWithRef, ReactElement } from "react";
import styled from "styled-components";
import { boxCss } from "./boxCss";


interface TextInputProps extends ComponentPropsWithRef<"input"> {
    Right?: ReactElement
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
`

const Input = styled.input`
    ${boxCss}
    min-width: 120px;
    height: 54px;
    padding: 0px 24px 0px 18px;
    outline: none;
    :hover {
        border-color: #525450;
    }
    :focus {
        border-color: #202120;
    }
    flex: 1;
`

const RightContainer = styled.div`
    position: absolute;
    right: 18px;
    display: flex;
    top:0;
    bottom: 0;
    align-items: center;
`

export const TextInput = ({Right, ...props}:TextInputProps) => {
    return (
        <Container>
            <Input {...props} />
            {Right && (
                <RightContainer>
                    {Right}
                </RightContainer>
            )}
        </Container>
    )
}
