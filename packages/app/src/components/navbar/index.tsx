import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text, FlexBox, Divider } from 'materials'
import { MenuItem } from "./MenuItem";
import { IoAdd, IoLaptopOutline, IoListOutline, IoMail, IoPeople } from 'react-icons/io5'
import { NAV_PADDING_HORIZONTAL } from "./constant";
import { getWallets } from "api/get-wallets.api";
import { IWallet } from "interfaces";
import { WalletPreview } from "./WalletPreview";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: unset;
    left: 0;
    width: 240px;
    background-color: #ffffff;
    border-right: 1px solid rgb(234, 238, 241);
    height: 100vh;
`

const Logo = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    padding: ${NAV_PADDING_HORIZONTAL}px;
`
export default function Navbar(){
    const [wallets, setWallets] = useState<IWallet[]>([])
    const navigate = useNavigate()    
    const {pathname} = useLocation();



    useEffect(()=>{
        getWallets()
            .then(res => {
                setWallets(res.data)
                if(pathname === "/")
                    navigate(`wallet/${res.data[0].id}`)
            })
            
        },[])
        
    useEffect(() => {
        if(pathname === "/" && wallets.length)
            navigate(`wallet/${wallets[0].id}`)
    }, [pathname])
    return (
        <Nav>
            {/* Logo */}
            <Logo to="/">
                <Text content="Henesis" type="H1" />
                <Text content="Test" type="P2" color="blue" marginLeft={2} />
            </Logo>

            {/* 메뉴 */}
            <FlexBox flexDirection="column">
                <MenuItem 
                    Icon={IoMail}
                    title="출금 요청"
                />
                <MenuItem 
                    Icon={IoLaptopOutline}
                    title="API 연동"
                />
                <MenuItem 
                    Icon={IoPeople}
                    title="팀 관리"
                />
                <MenuItem 
                    Icon={IoListOutline}
                    title="코인 상장 신청"
                />
            </FlexBox>

            {/* 지갑 +   */}
            <FlexBox 
                paddingHorizontal={NAV_PADDING_HORIZONTAL} 
                paddingTop={32}
                alignItems="center"
                justifyContent="space-between"
            >
                <Text type="P2" content="지갑" />
                <IoAdd size={18} />
            </FlexBox>
            <Divider marginTop={16} />
            

            {/* 지갑 목록 */}
            <FlexBox
                flexDirection="column"
                paddingHorizontal={16} 
                paddingVertical={8}
            >
                {wallets.map((wallet, idx) => (
                    <WalletPreview wallet={wallet} key={`wallet-${idx}`} />
                ))}
                
            </FlexBox>
        </Nav>
    )
}