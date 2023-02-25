export interface Register {
    username: string;
    name_fa: string;
    name_en: string;
    des_fa: string;
    des_en: string;
    phone?: number | string;
    email: string;
    password: string;
    role: number;
    job: string;
    avatar?: Blob | string;
    socials?: [name: string, link: string] | string;
    resume?: Blob | string;
}
