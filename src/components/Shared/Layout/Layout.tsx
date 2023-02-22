import React from "react";
import { ReactFC } from "src/types/types";
import { LayoutMain, LayoutWrapper } from "./LayoutStyles";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout: ReactFC = ({ children }) => {
    return (
        <LayoutWrapper>
            <Header />
            <LayoutMain>{children}</LayoutMain>
            <Footer />
        </LayoutWrapper>
    );
};
export default Layout;
