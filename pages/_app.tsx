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
import LocalizationProvider from "src/components/Shared/LocalizationProvider";

type Props = AppProps;
export default function App({ Component, pageProps }: Props | any) {
    const emptyPage = (page: any) => page;
    const getLayout = Component.getLayout ?? emptyPage;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LocalizationProvider messages={{ local: "fa" }}>
                    <ThemeProvider enableSystem={false} attribute="class">
                        {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                </LocalizationProvider>
            </PersistGate>
        </Provider>
    );
}
