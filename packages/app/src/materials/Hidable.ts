import styled from "styled-components";

export const Hidable = styled.div<{hide: boolean}>`
    display: flex;
    visibility: ${({hide}) => hide ? 'hidden' : 'visible'};
`