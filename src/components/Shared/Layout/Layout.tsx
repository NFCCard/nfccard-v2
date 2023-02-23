import React from "react";
import { useRouter } from "next/router";
import { ReactFC } from "@type/types";
import { LayoutMain, LayoutWrapper } from "./LayoutStyles";

import Header from "@components/Shared/Header/Header";
import Footer from "@components/Shared/Footer/Footer";
const Layout: ReactFC = ({ children }) => {
    const router = useRouter();
    return (
        <LayoutWrapper>
            {router.pathname !== "/login" && <Header />}
            <LayoutMain>{children}</LayoutMain>
            {router.pathname !== "/login" && <Footer />}
        </LayoutWrapper>
    );
};
export default Layout;
