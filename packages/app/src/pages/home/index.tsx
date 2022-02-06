import { Text } from "materials";
import { MdNotInterested } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    height: 70vh;
`

export const Home = () => {
    
    return (
        <Wrapper>
            <MdNotInterested color="red" size={84} />
            <Text type="H2" size={32} content="Henesis Frontend" marginTop={24} />
            <Text type="D1" size={16} content="지갑을 등록해 주세요." marginTop={12} marginBottom={24}  />
        </Wrapper>
    )

}