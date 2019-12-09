export interface IRuta {
    canonical?: string;
    title: string;
    ogImage?: string;
    description: any;
    link: string;
    name: string;
    showedImage?: string;
    logo?: string;
    microservicios: [][string];
    subtitulo?: string;
    imagenMicroservicios?: string;
    tituloMicroservicios?: string;
    textoMicroservicios?: string;
    logoMicroservicios?: string;
}

export interface IRutas {
    [key: string]: IRuta;
}
