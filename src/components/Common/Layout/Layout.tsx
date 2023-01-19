import React, { FC, ReactNode, useEffect } from "react";
import { ReactFC } from "src/types/types";
import {
    Container,
    LayoutFooter,
    LayoutMain,
    LayoutWrapper,
} from "./LayoutStyles";
import { Desktop, ExceptMobile, Mobile, Tablet } from "src/utils/BreakPoints";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";
import {
    openMenuDropDown,
    openSearchInput,
    openTradingCategories,
    openWalletDropDown,
} from "src/redux/slices/modals/modalsSlice";
const Layout: ReactFC = ({ children }) => {
    const { wallet } = useAppSelector(state => state.modals);
    const { menu } = useAppSelector(state => state.modals);
    const { TradingCategoriesd } = useAppSelector(state => state.modals);

    const dispatch = useDispatch();
    const walletCloseHandler = () => {
        dispatch(openWalletDropDown(false));
        dispatch(openMenuDropDown(false));
        dispatch(openSearchInput(false));
        dispatch(openTradingCategories(false));
    };
    // const menuCloseHandler = () => {
    //     dispatch(openMenuDropDown(false));
    // };
    return (
        <LayoutWrapper>
            <header>header</header>

            <LayoutMain
                isWalletDropDownOpen={wallet}
                isMenuDropDownOpen={menu}
                onClick={walletCloseHandler}
            >
                {children}
            </LayoutMain>

            <LayoutFooter
                isWalletDropDownOpen={wallet}
                isMenuDropDownOpen={menu}
            >
                footer
            </LayoutFooter>
        </LayoutWrapper>
    );
};
export default Layout;
