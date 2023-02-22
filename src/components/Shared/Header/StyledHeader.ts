import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeaderWrapper = styled.div`
    ${tw`bg-alternative dark:bg-black  sticky m-0 p-1 min-h-[50px] select-none`}
`;

export const StyledContainer = styled.div`
    ${tw`flex items-center justify-between max-w-[90%] m-auto `}
`;

export const StyledLogoWrapper = styled.div`
    ${tw``}
`;

export const StyledIconsWrapper = styled.div`
    ${tw`flex items-center mr-1 gap-2`}
`;
