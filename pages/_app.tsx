import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "next-themes";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.css";
import LocalizationProvider from "src/components/Common/LocalizationProvider";
import Layout from "src/components/Common/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LocalizationProvider messages={{ local: "en" }}>
                    <ThemeProvider enableSystem={false} attribute="class">
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </LocalizationProvider>
            </PersistGate>
        </Provider>
    );
}
