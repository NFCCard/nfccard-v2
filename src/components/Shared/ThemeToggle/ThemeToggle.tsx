import { useTheme } from "next-themes";
import MoonIcon from "public/static/icons/MoonIcon";
import SunIcon from "public/static/icons/SunIcon";
import React, { useState } from "react";
import {
    StyledIconsWrapper,
    StyledThemeToggleWrapper,
    StyledToggle,
    StyledToggleCircle,
    StyledToggleWrapper,
} from "./StyledThemeToggle";

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();
    const [isDark, setIsDark] = useState(theme === "dark");

    const toggleThemeHandler = () => {
        setIsDark(!isDark);
        if (!isDark) {
            return setTheme("dark");
        }
        return setTheme("light");
    };

    return (
        <StyledThemeToggleWrapper>
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
        </StyledThemeToggleWrapper>
    );
};

export default ThemeToggle;

{
    /* :className="{ 'bg-cyan-700': toggleActive}" */
}
// :className="{ 'translate-x-7': toggleActive}"
