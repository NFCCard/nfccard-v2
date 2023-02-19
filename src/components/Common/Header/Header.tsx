import Image from "next/image";
import React from "react";
import { IconsWrapper, LogoWrapper, StyledHeaderWrapper } from "./StyledHeader";
import logo from "../../../../public/static/images/nfc.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
    return (
        <StyledHeaderWrapper>
            <LogoWrapper>
                <Image src={logo} alt="logo" width={50} height={50} />
            </LogoWrapper>
            <IconsWrapper>
                <ThemeToggle />
            </IconsWrapper>
        </StyledHeaderWrapper>
    );
};

export default Header;
