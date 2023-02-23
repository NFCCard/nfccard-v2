import styled from "styled-components";
import tw from "twin.macro";

export const StyledRegisterPageContainer = styled.div`
    ${tw`flex flex-col justify-center items-center text-right gap-4 h-[calc(100vh - 19px)] dark:bg-alternative`}
`;

export const StyledFormContainer = styled.div`
    ${tw``}
`;

export const StyledForm = styled.form`
    ${tw`flex flex-col gap-1`}
`;

export const StyledLabel = styled.label`
    ${tw`text-[12px]`}
`;

export const StyledInput = styled.input`
    ${tw` border-none focus-visible:outline-none text-right p-1`}
`;

export const StyledButton = styled.button`
    ${tw`w-[fit-content] bg-alternative p-2 text-center rounded-[6px] text-white text-[12px]`}
`;
