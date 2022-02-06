import { Button, FlexBox, Text } from "materials";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    height: 70vh;
`

export const WalletNotFound = () => {
    const navigate = useNavigate()
    const goHome = () => navigate('/')
    
    return (
        <Wrapper>
            <MdCancel color="red" size={84} />
            <Text type="H2" size={32} content="지갑을 찾을 수 없습니다." marginTop={24} />
            <Text type="D1" size={16} content="네트워크 상태 혹은 URL의 지갑 주소를 확인해 주세요." marginTop={12} marginBottom={24}  />

            <Button 
                paddingHorizontal={40} 
                paddingVertical={14}
                onClick={goHome}
            >
                <Text 
                    type="P1" 
                    size={18} 
                    color="#fff"
                    content="홈으로 돌아가기" 
                />
            </Button>
        </Wrapper>
    )

}