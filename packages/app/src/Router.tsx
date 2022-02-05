import React from "react";
import Navbar from "components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WalletInfo from "pages/wallet-info";
import styled from "styled-components";
import { Home } from "pages/wallet-info/home";

const Wrapper = styled.div`
    margin-left: 240px;
    width: calc(100% - 240px);
    min-height: 100vh;
`

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet/:id" element={<WalletInfo />}/>
          </Routes>
        </Wrapper>
    </BrowserRouter>
  );
};
export default Router;