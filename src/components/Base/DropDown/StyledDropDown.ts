import styled from "styled-components";
import tw from "twin.macro";

export const StyledDropDownWrapper = styled.div`
    ${tw``}
`;

export const StyledButtonDropDownWrapper = styled.div`
    ${tw`relative`}
`;

export const StyledDropDownContentWrapper = styled.div`
    ${tw`absolute mt-1 rounded w-[fit-content] min-h-[50px] bg-secondary text-white  dark:bg-white dark:text-black min-w-[90px] flex flex-col p-2  `}
`;
