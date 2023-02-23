import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled.div`
    ${tw` min-h-screen z-10 bg-no-repeat bg-center bg-cover transition-all`}
`;
export const LayoutMain = styled.div`
    ${tw`w-full min-h-[calc(100vh - 72px)]`}
`;
export const LayoutFooter = styled.footer`
    ${tw`w-full `}
`;
export const Container = styled.div`
    ${tw`w-full max-w-[1640px] px-7 mx-auto`}
`;
