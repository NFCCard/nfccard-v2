import { useTheme } from "next-themes";
import MoonIcon from "public/static/icons/MoonIcon";
import SunIcon from "public/static/icons/SunIcon";
import React, { useState } from "react";
import {
    StyledIconsWrapper,
    StyledLanguageToggleWrapper,
    StyledToggle,
    StyledToggleCircle,
    StyledToggleWrapper,
} from "./StyledThemeToggle";

const ThemeToggle = () => {
    const { setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    const toggleThemeHandler = () => {
        setIsDark(!isDark);
        console.log(isDark);
        if (!isDark) {
            return setTheme("dark");
        }
        return setTheme("light");
    };

    return (
        <StyledLanguageToggleWrapper>
            <StyledToggleWrapper>
                <StyledIconsWrapper>
                    <SunIcon />
                    <StyledToggle onClick={toggleThemeHandler}>
                        <StyledToggleCircle
                            isDark={isDark}
                        ></StyledToggleCircle>
                    </StyledToggle>
                    <MoonIcon />
                </StyledIconsWrapper>
            </StyledToggleWrapper>
        </StyledLanguageToggleWrapper>
    );
};

export default ThemeToggle;

{
    /* :className="{ 'bg-cyan-700': toggleActive}" */
}
// :className="{ 'translate-x-7': toggleActive}"
