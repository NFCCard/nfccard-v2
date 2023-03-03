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
