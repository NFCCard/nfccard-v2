import styled from "styled-components";
import tw from "twin.macro";

export const LanguageToggleWrapper = styled.div``;

export const ToggleWrapper = styled.div`
    ${tw`w-full h-full flex flex-col justify-center items-center`}
`;

export const IconsWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`;

export const Toggle = styled.div`
    ${tw`w-14 h-7 flex items-center bg-gray-300 rounded-full mx-1 px-1`}
`;

export const ToggleCircle = styled.div`
    ${tw`bg-white w-5 h-5 rounded-full shadow-md transform`}
`;
