import styled from "styled-components";
import tw from "twin.macro";

export const StyledLoginWrapper = styled.div`
    ${tw`m-0 p-5 flex items-center justify-center flex-col select-none text-right min-w-[300px] bg-black rounded-xl`}
`;

export const StyledTag = styled.span`
    ${tw`font-bold text-primary text-3xl`}
`;

export const StyledInputWrapper = styled.div`
    ${tw`flex flex-col relative grow-[1] pb-5  shrink-[0] `}
`;

export const StyledForm = styled.form`
    ${tw` m-0 w-full flex justify-center flex-col`}
`;

export const StyledInputLabel = styled.label`
    ${tw`mb-2 text-smokeWhite text-sm font-semibold`}
`;

export const StyledSubmitButton = styled.button`
    ${tw`w-full bg-primary text-black font-semibold p-2 text-center rounded-[6px] text-[12px] mt-1.5`}
`;
