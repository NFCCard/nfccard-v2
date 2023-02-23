import React, { useRef, ReactNode } from "react";
import { ReactFC } from "@type/types";
import { createPortal } from "react-dom";
import {
    StyledCloseButton,
    StyledModal,
    StyledModalContent,
    StyledModalHeader,
    StyledModalHeaderWrapper,
    StyledModalOverLay,
    StyledSlideDown,
} from "./StyledModal";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { createGlobalStyle } from "styled-components";
import { CSSTransition } from "react-transition-group";

interface IModalProps {
    animation?: "fade" | "slide-down";
    hasBackdrop?: boolean;
    header?: ReactNode;
    isOpen: boolean;
    closeOnBackDropClick?: boolean;
    onClose: () => void;
}

const Modal: ReactFC<IModalProps> = ({
    isOpen,
    onClose,
    animation,
    hasBackdrop = true,
    closeOnBackDropClick = true,
    children,
    header,
}) => {
    const modalRef = useRef(null);
    const GlobalStyle = createGlobalStyle`
    .core-modal-fade-enter {
    opacity: 0;
    }
    .core-modal-fade-enter-active {
    opacity: 1;
    transition: opacity 200ms;
    }
    .core-modal-fade-exit {
    opacity: 1;
    }
    .core-modal-fade-exit-active {
    opacity: 0;
    transition: opacity 200ms;
    }

    .core-modal-slide-down-enter {
    top: -200px;
    }
    .core-modal-slide-down-enter-active {
    top: 20px;
    transition: all 200ms;
    }
    .core-modal-slide-down-enter-done{
    top: 20px;

    }
    .core-modal-slide-down-exit {
    top: 20px;
    }
    .core-modal-slide-down-exit-active {
    top: -200px;
    transition: all 200ms;
    }
  `;
    const handleModalAnimation = () => {
        switch (animation) {
            case "fade":
                return "core-modal-fade";
            case "slide-down":
                return "core-modal-slide-down";

            default:
                return "core-modal-fade";
        }
    };

    useOnClickOutside(modalRef, () => {
        if (!closeOnBackDropClick) {
            return;
        }
        onClose();
    });

    return createPortal(
        <>
            <GlobalStyle />
            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={handleModalAnimation()}
                unmountOnExit
            >
                <>
                    {animation === "fade" && (
                        <>
                            {hasBackdrop ? (
                                <StyledModalOverLay>
                                    <StyledModal
                                        ref={modalRef}
                                        hasBackdrop={hasBackdrop}
                                    >
                                        <StyledModalHeader>
                                            {header ? (
                                                header
                                            ) : (
                                                <StyledModalHeaderWrapper>
                                                    <StyledCloseButton
                                                        className="close-button"
                                                        onClick={onClose}
                                                    >
                                                        &times;
                                                    </StyledCloseButton>
                                                </StyledModalHeaderWrapper>
                                            )}
                                        </StyledModalHeader>
                                        <StyledModalContent>
                                            {children}
                                        </StyledModalContent>
                                    </StyledModal>
                                </StyledModalOverLay>
                            ) : (
                                <StyledModal
                                    ref={modalRef}
                                    hasBackdrop={hasBackdrop}
                                >
                                    <StyledModalHeader>
                                        {header ? (
                                            header
                                        ) : (
                                            <StyledModalHeaderWrapper>
                                                <StyledCloseButton
                                                    className="close-button"
                                                    onClick={onClose}
                                                >
                                                    &times;
                                                </StyledCloseButton>
                                            </StyledModalHeaderWrapper>
                                        )}
                                    </StyledModalHeader>
                                    <StyledModalContent>
                                        {children}
                                    </StyledModalContent>
                                </StyledModal>
                            )}
                        </>
                    )}
                    {animation === "slide-down" && (
                        <StyledSlideDown>
                            <StyledModal ref={modalRef} hasBackdrop={false}>
                                <StyledModalHeader>
                                    {header ? (
                                        header
                                    ) : (
                                        <button
                                            className="close-button"
                                            onClick={onClose}
                                        >
                                            &times;
                                        </button>
                                    )}
                                </StyledModalHeader>
                                <StyledModalContent>
                                    {children}
                                </StyledModalContent>
                            </StyledModal>
                        </StyledSlideDown>
                    )}
                </>
            </CSSTransition>
        </>,
        document.body
    );
};

export default Modal;
