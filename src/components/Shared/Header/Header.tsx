import Image from "next/image";
import React from "react";
import {
    StyledIconsWrapper,
    StyledLogoWrapper,
    StyledContainer,
    StyledHeaderWrapper,
} from "./StyledHeader";
import logo from "../../../../public/static/images/nfc.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <StyledContainer>
                <StyledIconsWrapper>
                    <ProfileDropDown />
                    <ThemeToggle />
                </StyledIconsWrapper>
                <StyledLogoWrapper>
                    <Image
                        src={logo}
                        alt="logo"
                        width={50}
                        height={50}
                        priority
                    />
                </StyledLogoWrapper>
            </StyledContainer>
        </StyledHeaderWrapper>
    );
};

export default Header;
