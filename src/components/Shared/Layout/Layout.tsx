import React from "react";
import { ReactFC } from "src/types/types";
import { LayoutMain, LayoutWrapper } from "./LayoutStyles";

import Header from "@components/Shared/Header/Header";
import Footer from "@components/Shared/Footer/Footer";
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
