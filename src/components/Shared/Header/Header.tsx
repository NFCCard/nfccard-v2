import Image from "next/image";
import React from "react";
import {
    StyledIconsWrapper,
    StyledLogoWrapper,
    StyledContainer,
    StyledHeaderWrapper,
} from "./StyledHeader";
import ThemeToggle from "@components/Shared/ThemeToggle/ThemeToggle";
import ProfileDropDown from "@components/Shared/ProfileDropDown/ProfileDropDown";

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
                        src={"/static/images/nfc.png"}
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
