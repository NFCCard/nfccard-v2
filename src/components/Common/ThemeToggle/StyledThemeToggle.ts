import styled from "styled-components";
import tw from "twin.macro";

export const StyledLanguageToggleWrapper = styled.div``;

export const StyledToggleWrapper = styled.div`
    ${tw`w-full h-full flex flex-col justify-center items-center`}
`;

export const StyledIconsWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`;

export const StyledToggle = styled.div`
    ${tw`w-14 h-7 flex items-center bg-gray-300 rounded-full relative m-2`}
`;

export const StyledToggleCircle = styled.div<{ isDark: boolean }>`
    ${tw`bg-white w-5 h-5 rounded-full shadow-md transition-all duration-500 absolute left-[8%] top-[18%]`}
    ${props => props.isDark && tw`left-[58%]`}
`;
