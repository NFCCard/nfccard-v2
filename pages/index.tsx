import React, { useState } from "react";
import Modal from "@base/Modal/Modal";
import Home from "@containers/Home/Home";
import Layout from "@components/Shared/Layout/Layout";

export default function HomePage() {
    const [open, setOpen] = useState(false);
    return (
        <main>
            <Home />
        </main>
    );
}

HomePage.getLayout = (page: any) => <Layout>{page}</Layout>;
