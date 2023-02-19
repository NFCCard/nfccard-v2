import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled.div`
    ${tw` min-h-screen   bg-no-repeat bg-center bg-cover`}
`;
export const LayoutMain = styled.div`
    ${tw`w-full transition-all duration-500`}
`;
export const LayoutFooter = styled.footer`
    ${tw`w-full transition-all duration-500`}
`;
export const Container = styled.div`
    ${tw`w-full max-w-[1640px] px-7 mx-auto`}
`;
