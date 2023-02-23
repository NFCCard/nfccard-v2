import styled from "styled-components";
import tw from "twin.macro";

export const StyledLoginWrapper = styled.div`
    ${tw`min-w-[100vw] m-0 p-0 flex items-center justify-center flex-col select-none`}
`;

export const StyledForm = styled.form`
    ${tw` m-0 p-4 rounded flex justify-center flex-col bg-alternative `}
`;

export const StyledInputLable = styled.label`
    ${tw`mb-2`}
`;
export const StyledInput = styled.input`
    ${tw`mb-2`}
`;
export const StyledSubmitButton = styled.button`
    ${tw`w-[fit-content] `}
`;
