import styled from "styled-components";
import tw from "twin.macro";

export const StyledRegisterPageContainer = styled.div`
    ${tw`flex w-full flex-col justify-center items-center text-right gap-4 h-[calc(100vh - 20px)] `}
    & {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 80 80'%3E%3Cg fill='%23b88bfe' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
    }
`;

export const StyledFormContainer = styled.div`
    ${tw`flex w-full max-w-3xl flex-col m-3 justify-center items-center bg-gradient-to-r from-[#8a6bf0] to-secondary p-4 rounded-[6px]`}
`;

// bg-[#d68438]

export const StyledFormWrapper = styled.div`
    ${tw`flex w-full  flex-wrap flex-col gap-1 `}
`;

export const StyledForm = styled.form`
    ${tw`flex w-full flex-col gap-2 self-stretch`}
`;

export const StyledInputWrapper = styled.div`
    ${tw`flex flex-col relative grow-[1] pb-3 shrink-[0] `}
`;

export const StyledLabel = styled.label`
    ${tw`dark:text-white text-white font-bold text-md`}
`;

export const StyledInput = styled.input`
    ${tw`border-none focus-visible:outline-none text-right p-1 mt-1 box-border  rounded-[6px] bg-smokeWhite text-black`}
`;

export const StyledTextArea = styled.textarea`
    ${tw`border-none focus-visible:outline-none text-right p-1 mt-1 box-border text-[16px] rounded-[6px] `}
`;

export const StyledButton = styled.button`
    ${tw`w-full bg-black p-2 text-center rounded-[6px] text-white text-[12px]`}
`;

export const StyledInputError = styled.span`
    ${tw`absolute text-sm font-bold bottom-0 text-black`}
`;
