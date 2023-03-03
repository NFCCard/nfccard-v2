import styled from "styled-components";
import tw from "twin.macro";

export const StyledLoginWrapper = styled.div`
    ${tw`min-w-[100vw] m-0 p-0 flex items-center justify-center flex-col select-none text-right`}
`;

export const StyledForm = styled.form`
    ${tw` m-0 p-4 rounded flex justify-center flex-col dark:bg-smokeWhite bg-black `}
`;

export const StyledInputLabel = styled.label`
    ${tw`mb-2 dark:text-black text-smokeWhite text-sm font-semibold`}
`;
export const StyledInput = styled.input`
    ${tw`mb-2 pb-3 rounded flex justify-center items-center`}
`;
export const StyledSubmitButton = styled.button`
    ${tw`w-full bg-secondary p-2 text-center rounded-[6px] text-white text-[12px]`}
`;
