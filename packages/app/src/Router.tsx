import React from "react";
import Navbar from "components/navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import WalletInfo from "pages/wallet-info";
import styled from "styled-components";
import { Home } from "pages/home";
import { NotFound } from "pages/NotFound";
import { useRecoilValue } from "recoil";
import { currentSelectedWalletState } from "atoms/current-selected-wallet.atom";

const Wrapper = styled.div`
    margin-left: 240px;
    width: calc(100% - 240px);
    min-height: 100vh;
`

const Router = () => {
  const wallet = useRecoilValue(currentSelectedWalletState)
  return (
    <BrowserRouter>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route 
              path="/" 
              element={
                wallet ?
                <Navigate replace to={`/wallet/${wallet.id}`} />
                : 
                <Home />
              } 
            />
            <Route path="/wallet/:id" element={<WalletInfo />}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Wrapper>
    </BrowserRouter>
  );
};
export default Router;