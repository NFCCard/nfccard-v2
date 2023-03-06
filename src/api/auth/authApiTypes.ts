import { string } from "yup";

export interface registerResponse {
    role: string;
    isEmailVerified: boolean;
    username: string;
    name_fa: string;
    name_en: string;
    description_fa: string;
    description_en: string;
    phone: string;
    email: string;
    socials: [
        {
            _id: string;
            name: string;
            link: string;
        }
    ];
    id: string;
    resource: {
        _id: string;
        avatar: {
            url: string;
        };
        resume: {
            url: string;
        };
        user: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    tokens: {
        access: {
            token: string;
            expires: string;
        };
        refresh: {
            token: string;
            expires: string;
        };
    };
}

export interface registerReqBody {
    username: string;
    role: number;
    name_fa: string;
    name_en: string;
    phone: string;
    email: string;
    password: string;
    jobTitle?: string;
}

export interface loginReqBody {
    email: string;
    password: string;
}

interface social {
    link: string;
    name: string;
    _id: string;
}
export interface loginResponse {
    resource: {
        avatar: {
            url: string;
        };
        createdAt: string;
        resume: {
            url: string;
        };
        updatedAt: string;
        user: string;
        __v: number | string;
        _id: string;
    };
    tokens: {
        access: {
            expires: string;
            token: string;
        };
        refresh: {
            expires: string;
            token: string;
        };
    };
    user: {
        description_en: string;
        description_fa: string;
        email: string;
        id: string;
        isEmailVerified: boolean;
        name_en: string;
        name_fa: string;
        phone: string;
        role: string;
        socials: social[] | [];
        username: string;
    };
}
