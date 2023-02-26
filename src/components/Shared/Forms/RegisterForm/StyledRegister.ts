import styled from "styled-components";
import tw from "twin.macro";

export const StyledRegisterPageContainer = styled.div`
    ${tw`flex flex-col justify-center items-center text-right gap-4 h-[calc(100vh - 20px)]`}
`;

export const StyledFormContainer = styled.div`
    ${tw`flex flex-col m-2 justify-center items-center  bg-sadafi  p-4 rounded-[6px]`}
`;

export const StyledFirstSide = styled.div``;

export const StyledFormWrapper = styled.div`
    ${tw`flex  flex-wrap flex-col gap-1 text-[10px]  text-white `}
`;

export const StyledForm = styled.form`
    ${tw`flex flex-col gap-2 self-stretch`}
`;

export const StyledInputWrapper = styled.div`
    ${tw`flex flex-col relative grow-[1] pb-3 shrink-[0] `}
`;

export const StyledLabel = styled.label`
    ${tw` text-secondary font-bold`}
`;

export const StyledInput = styled.input`
    ${tw`border-none focus-visible:outline-none text-right p-1 mt-1 box-border text-[16px] rounded-[6px] bg-smokeWhite`}
`;

export const StyledTextArea = styled.textarea`
    ${tw`border-none focus-visible:outline-none text-right p-1 mt-1 box-border text-[16px] rounded-[6px] `}
`;

export const StyledButton = styled.button`
    ${tw`w-full  dark:bg-black p-2 text-center rounded-[6px] text-white text-[12px]`}
`;

export const StyledInputError = styled.span`
    ${tw`absolute text-[.6rem] bottom-0`}
`;
