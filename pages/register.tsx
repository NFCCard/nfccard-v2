import LayoutWithoutHeader from "@components/Shared/Layout/LayoutWithoutHeader/LayoutWithoutHeader";
import Register from "@containers/Register/Register";
import React from "react";

export default function register() {
    return <Register />;
}

register.getLayout = (page: any) => (
    <LayoutWithoutHeader>{page}</LayoutWithoutHeader>
);
