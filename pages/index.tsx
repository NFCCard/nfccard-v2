import Layout from "@components/Shared/Layout/Layout";
import Home from "@containers/Home/Home";
import React from "react";

export default function HomePage() {
    return (
        <main>
            <Home />
        </main>
    );
}

HomePage.getLayout = (page: any) => <Layout>{page}</Layout>;
