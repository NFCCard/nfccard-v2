import React, { useState } from "react";
import Modal from "@base/Modal/Modal";
import Home from "@containers/Home/Home";
import Layout from "@components/Shared/Layout/Layout";
import LoginModal from "@components/Shared/Modals/LoginModal/LoginModal";

export default function HomePage() {
    return (
        <main>
            <Home />
            <LoginModal />
        </main>
    );
}

HomePage.getLayout = (page: any) => <Layout>{page}</Layout>;
