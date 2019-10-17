export interface IRuta {
    canonical?: string;
    title: string;
    ogImage?: string;
    description: string;
    link: string;
    name: string;
    showedImage?: string;
    logo?: string;
}

export interface IRutas {
    [key: string]: IRuta;
}
