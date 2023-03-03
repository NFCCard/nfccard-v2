import { ReactFC } from "@type/types";
import React, { ReactNode } from "react";
import {
    StyledButtonDropDownWrapper,
    StyledDropDownContentWrapper,
    StyledDropDownWrapper,
} from "./StyledDropDown";

interface IDropDownProps {
    button: ReactNode;
    isDropDownOpen: boolean;
}

const DropDown: ReactFC<IDropDownProps> = ({
    button,
    isDropDownOpen,
    children,
}) => {
    return (
        <StyledDropDownWrapper>
            <StyledButtonDropDownWrapper>{button}</StyledButtonDropDownWrapper>
            {isDropDownOpen && (
                <StyledDropDownContentWrapper>
                    {children}
                </StyledDropDownContentWrapper>
            )}
        </StyledDropDownWrapper>
    );
};

export default DropDown;
