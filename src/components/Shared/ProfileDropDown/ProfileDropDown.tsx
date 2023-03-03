import React, { useRef, useState } from "react";
import Image from "next/image";
import DropDown from "@base/DropDown/DropDown";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { StyledProfileDropDownWrapper } from "./StyledProfileDropDown";
import Login from "../Forms/Login/Login";

const ProfileDropDown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        setIsOpen(false);
        if (ref.current) {
            ref.current = null;
        }
    });
    return (
        <StyledProfileDropDownWrapper ref={ref}>
            <DropDown
                button={
                    <Image
                        src={"/static/images/user.png"}
                        alt="avatar"
                        width={30}
                        height={30}
                        priority
                        onClick={() => setIsOpen(!isOpen)}
                    />
                }
                isDropDownOpen={isOpen}
            >
                <Login />
            </DropDown>
        </StyledProfileDropDownWrapper>
    );
};

export default ProfileDropDown;
