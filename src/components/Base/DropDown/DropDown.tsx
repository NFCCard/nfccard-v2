import React from "react";
import {
    StyledButtonDropDownWrapper,
    StyledDropDownWrapper,
    StyledModalContentWrapper,
} from "./StyledDropDown";

interface IProps {
    children?: any;
    button: any;
    dropDownSituation: boolean;
}

const DropDown = ({ children, button, dropDownSituation }: IProps) => {
    return (
        <StyledDropDownWrapper>
            <StyledButtonDropDownWrapper>{button}</StyledButtonDropDownWrapper>
            {dropDownSituation && (
                <StyledModalContentWrapper>
                    {children}
                </StyledModalContentWrapper>
            )}
        </StyledDropDownWrapper>
    );
};

export default DropDown;
