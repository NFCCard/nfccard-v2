import { Blob } from "buffer";
import { PropsWithChildren } from "react";
import { string } from "yup";
import { ContainerState as LocalizationProviderState } from "../redux/slices/localization/localizationSlice";

export interface ReactFC<T = {}> extends React.FC<PropsWithChildren<T>> {}
export interface ApplicationRootState {
    readonly localization: LocalizationProviderState;
}

export interface User {}
