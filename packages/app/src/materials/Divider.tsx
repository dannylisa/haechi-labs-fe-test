import styled from "styled-components";

interface DividerProps {
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    color?: string
}
export const Divider = styled.hr<DividerProps>`
    width: 100%;
    border: none;
    border-top: rgb(234, 238, 241) 1px solid;

    ${({margin}) => `margin: ${margin ?? 0}px;`}
    ${({marginTop}) => marginTop && `margin-top: ${marginTop}px;`}
    ${({marginBottom}) => marginBottom && `margin-bottom: ${marginBottom}px;`}
    ${({marginLeft}) => marginLeft && `margin-left: ${marginLeft}px;`}
    ${({marginRight}) => marginRight && `margin-right: ${marginRight}px;`}
    ${({marginHorizontal}) => marginHorizontal && `
        margin-left: ${marginHorizontal}px;
        margin-right: ${marginHorizontal}px;
    `}
    ${({marginVertical}) => marginVertical && `
        margin-top: ${marginVertical}px;
        margin-bottom: ${marginVertical}px;
    `}
`