import styled from "styled-components";
import tw from "twin.macro";

export const StyledInputWrapper = styled.div`
    ${tw`flex flex-col relative grow-[1] pb-1  shrink-[0] `}
`;
export const StyledTextInput = styled.input`
    ${tw`border-[1px] focus:border-secondary shadow-none dark:border-[#0c0c0c60] border-[#f0f0f060] rounded-[3px] focus-visible:outline-none text-right p-2 mt-0.5 box-border text-sm bg-transparent `}
`;
export const StyledInputError = styled.span`
    ${tw`absolute -bottom-3 right-1 text-[11px] text-error`}
`;
