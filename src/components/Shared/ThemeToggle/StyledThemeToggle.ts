import styled from "styled-components";
import tw from "twin.macro";

export const StyledThemeToggleWrapper = styled.div``;

export const StyledToggleWrapper = styled.div`
    ${tw`w-full h-full flex flex-col justify-center items-center`}
`;

export const StyledIconsWrapper = styled.div`
    ${tw`flex justify-center items-center text-sadafi dark:text-black`}
`;

export const StyledToggle = styled.div<{ isDark: boolean }>`
    ${tw`w-11 h-5 flex items-center bg-smokeWhite rounded-full relative m-2`}
    ${props => props.isDark && tw`bg-black`}
`;

export const StyledToggleCircle = styled.div<{ isDark: boolean }>`
    ${tw`bg-primary w-4 h-4 rounded-full shadow-md transition-all duration-500 absolute left-[8%] top-[50%] translate-y-[-50%] `}
    ${props => props.isDark && tw`left-[58%] bg-primary`}
`;
