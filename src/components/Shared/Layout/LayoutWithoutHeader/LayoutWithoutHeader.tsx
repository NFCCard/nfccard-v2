import React from "react";
import { ReactFC } from "@type/types";
import Header from "@components/Shared/Header/Header";
import Footer from "@components/Shared/Footer/Footer";
import {
    LayoutWithoutHeaderMain,
    LayoutWithoutHeaderWrapper,
} from "./LayoutWithoutHeaderStyles";

const LayoutWithoutHeader: ReactFC = ({ children }) => {
    return (
        <LayoutWithoutHeaderWrapper>
            <LayoutWithoutHeaderMain>{children}</LayoutWithoutHeaderMain>
        </LayoutWithoutHeaderWrapper>
    );
};

export default LayoutWithoutHeader;
