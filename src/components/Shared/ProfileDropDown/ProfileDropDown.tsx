import React, { useState } from "react";
import DropDown from "../../Base/DropDown/DropDown";
import { StyledProfileDropDownWrapper } from "./StyledProfileDropDown";
import avatar from "../../../../public/static/images/user.png";
import Image from "next/image";

const ProfileDropDown = () => {
    const [dropDownSituation, setDropDownSituation] = useState(false);

    return (
        <StyledProfileDropDownWrapper>
            <DropDown
                button={
                    <Image
                        src={avatar}
                        alt="avatar"
                        width={30}
                        height={30}
                        priority
                        onClick={() => setDropDownSituation(!dropDownSituation)}
                    />
                }
                dropDownSituation={dropDownSituation}
            >
                slm
            </DropDown>
        </StyledProfileDropDownWrapper>
    );
};

export default ProfileDropDown;
