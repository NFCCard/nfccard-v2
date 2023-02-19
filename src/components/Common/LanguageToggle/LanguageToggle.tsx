import MoonIcon from "public/static/icons/MoonIcon";
import SunIcon from "public/static/icons/SunIcon";
import React, { useState } from "react";
import {
    IconsWrapper,
    LanguageToggleWrapper,
    Toggle,
    ToggleCircle,
    ToggleWrapper,
} from "./StyledLanguageToggleWrapper";

const LanguageToggle = () => {
    const [isDark, setIsDark] = useState(false);
    console.log(isDark);

    return (
        <LanguageToggleWrapper>
            <ToggleWrapper>
                <IconsWrapper>
                    <SunIcon />
                    <Toggle onClick={() => setIsDark(!isDark)}>
                        <ToggleCircle></ToggleCircle>
                    </Toggle>
                    <MoonIcon />
                </IconsWrapper>
            </ToggleWrapper>
        </LanguageToggleWrapper>
    );
};

export default LanguageToggle;

{
    /* :className="{ 'bg-cyan-700': toggleActive}" */
}
// :className="{ 'translate-x-7': toggleActive}"
