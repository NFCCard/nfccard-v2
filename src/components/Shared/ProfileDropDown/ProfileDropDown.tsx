import React, { useRef, useState } from "react";
import Image from "next/image";
import DropDown from "@base/DropDown/DropDown";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { StyledProfileDropDownWrapper } from "./StyledProfileDropDown";

const ProfileDropDown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setIsOpen(false));
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
                <button>profile</button>
            </DropDown>
        </StyledProfileDropDownWrapper>
    );
};

export default ProfileDropDown;
