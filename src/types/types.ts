import { Blob } from "buffer";
import { PropsWithChildren } from "react";
import { string } from "yup";
import { ContainerState as LocalizationProviderState } from "../redux/slices/localization/localizationSlice";

export interface ReactFC<T = {}> extends React.FC<PropsWithChildren<T>> {}
export interface ApplicationRootState {
    readonly localization: LocalizationProviderState;
}

export interface register {
    username: string;
    name_fa: string;
    name_en: string;
    description_fa: string;
    description_en: string;
    phone?: number | string;
    email: string;
    password: string;
    role: number;
    jobTitle: string;
    avatar?: Blob | string;
    socials?: [name: string, link: string] | string;
    resume?: Blob | string;
}

export interface User {}
