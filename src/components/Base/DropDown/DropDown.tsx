import { ReactFC } from "@type/types";
import React from "react";
import {
    StyledButtonDropDownWrapper,
    StyledDropDownWrapper,
    StyledModalContentWrapper,
} from "./StyledDropDown";

interface IDropDownProps {
    button: any;
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
                <StyledModalContentWrapper>
                    {children}
                </StyledModalContentWrapper>
            )}
        </StyledDropDownWrapper>
    );
};

export default DropDown;
