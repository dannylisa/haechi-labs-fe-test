import { ComponentPropsWithRef } from 'react'
import styled from 'styled-components'


export interface ButtonProps extends ComponentPropsWithRef<"button">{
    height?: number
    flex?: number
    paddingHorizontal?: number
    paddingVertical?: number
}

export const Button = styled.button<ButtonProps>`
    border: none;
    border-radius: 5px;
    padding: ${({paddingVertical}) => paddingVertical || 10}px ${({paddingHorizontal}) => paddingHorizontal || 7}px;
    ${({height}) => height && `height:${height}px;`}
    display: flex;
    align-items: center;
    justify-content: center;
    ${({disabled}) => `${disabled ? `
        opacity: 0.65;
        background-color: #bbb;
        color: #121212;
    ` : `
        background-color: #195DEE;
        color: white;
    `}`}}
    ${({flex}) => flex && `flex:${flex};`}
`