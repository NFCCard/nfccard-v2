import React from "react";
import {
    StyledButtonDropDownWrapper,
    StyledDropDownWrapper,
    StyledModalContentWrapper,
} from "./StyledDropDown";

interface IProps {
    children?: any;
    button: any;
    isDropDownOpen: boolean;
}

const DropDown = ({ children, button, isDropDownOpen }: IProps) => {
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
