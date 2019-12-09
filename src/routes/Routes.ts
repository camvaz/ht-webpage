import { IRutas } from "../types/RouteTypes";

export const routes: IRutas = {
    Inicio: {
        title: "Inicio | Headtag",
        canonical: "http://headtag.mx/",
        description: "Página principal de Headtag",
        link: "/",
        name: "Inicio",
        microservicios: []
    },
    Servicios: {
        title: "Servicios | Headtag",
        canonical: "http://headtag.mx/#servicios",
        description: "Servicios de Headtag",
        link: "/#servicios",
        name: "Servicios",
        microservicios: []
    },
    Logros: {
        title: "Logros | Headtag",
        canonical: "http://headtag.mx/logros",
        description: "Logros de Headtag",
        link: "/logros",
        name: "Logros",
        microservicios: []
    },
    Cultura: {
        title: "Cultura | Headtag",
        canonical: "http://headtag.mx/cultura",
        description: "Cultura de Headtag",
        link: "/cultura",
        name: "Cultura",
        microservicios: []
    },
    Blog: {
        title: "Blog | Headtag",
        canonical: "http://headtag.mx/blog",
        description: "Página principal de Headtag",
        link: "/blog",
        name: "Blog",
        microservicios: []
    },
    "seo-sem": {
        title: "SEO/SEM | Headtag",
        canonical: "http://headtag.mx/servicios/SEO-SEM",
        description:
            "Con nuestra estrategia, tu sitio web aparecerá en la primera página de Google \n cuando la gente busque tus productos o servicios, \n con lo que aumentarás tus ventas.",
        link: "/servicios/SEO-SEM",
        name: "SEO / SEM",
        showedImage: "SEO.svg",
        logo: "seo.svg",
        subtitulo: "Tu empresa en la primera página de Google",
        microservicios: [
            ["Google Ads", "google-ads.svg"],
            ["Blog", "blog.svg"],
            ["Google Analytics", "analytics.svg"]
        ],
        imagenMicroservicios: "seo.jpg",
        tituloMicroservicios: "SEO",
        textoMicroservicios:
            "Con nuestra estrategia, tu sitio web aparecerá en la primera página de Google cuando la gente busque tus productos o servicios, con lo que aumentarás tus ventas."
    },
    "desarrollo-web": {
        title: "Desarrollo Web | Headtag",
        canonical: "http://headtag.mx/servicios/desarrollo-web",
        description:
            "Mediante la creación de páginas web, aplicaciones y sistemas, hacemos que la navegación, accesibilidad, usabilidad y administración de los recursos de tu empresa sean más fáciles para tu equipo, clientes y prospectos.",
        link: "/servicios/desarrollo-web",
        name: "Desarrollo Web",
        showedImage: "DESARROLLOWEB.svg",
        logo: "web.svg",
        subtitulo: "Mejorando tu empresa con la ayuda de la tecnología",
        microservicios: [
            ["Sitio Web", "sitio-web.svg"],
            ["Tienda en línea", "tienda-en-linea.svg"],
            ["Bases de datos", "bases-de-datos.svg"],
            ["Apps", "apps.svg"],
            ["Dominio y hosting", "dominio-hosting.svg"]
        ],
        imagenMicroservicios: "interior.jpg",
        tituloMicroservicios: "Desarrollo Web",
        textoMicroservicios:
            "Mediante la creación de páginas web, aplicaciones y sistemas, hacemos que la navegación, accesibilidad, usabilidad y administración de los recursos de tu empresa sean más fáciles para tu equipo, clientes y prospectos."
    },
    "diseno-grafico": {
        title: "Diseño Gráfico | Headtag",
        canonical: "http://headtag.mx/servicios/diseno-grafico",
        description:
            "A través del desarrollo de la identidad corporativa, branding y  \npapelería para tu empresa, creamos una marca \n memorable que llame la atención de tus posibles clientes, \n cuidando la personalidad que quieras transmitir.",
        link: "/servicios/diseno-grafico",
        name: "Diseño Gráfico",
        showedImage: "DISENOGRAFICO.svg",
        logo: "diseno.svg",
        subtitulo: "Creando una identidad para tu empresa",
        microservicios: [
            ["Branding", "branding.svg"],
            ["Naming", "naming.svg"],
            ["Papeleria", "papeleria.svg"]
        ],
        imagenMicroservicios: "membrete.jpg",
        tituloMicroservicios: "Diseño Gráfico",
        textoMicroservicios:
            "A través del desarrollo de la identidad corporativa, branding y papelería para tu empresa, creamos una marca memorable que llame la atención de tus posibles clientes, cuidando la personalidad que quieras transmitir."
    },
    "community-management": {
        title: "Community Management | Headtag",
        canonical: "http://headtag.mx/servicios/community-management",
        description:
            "Por medio de la creación y promoción de contenido en las principales \n plataformas digitales (Facebook, Instagram, YouTube), \n logramos que tu cliente ideal reconozca tu marca.",
        link: "/servicios/community-management",
        name: "Community Management",
        showedImage: "MARKETING.svg",
        logo: "pantalla.svg",
        subtitulo: "Tu empresa en las redes sociales",
        microservicios: [
            ["Posts para redes sociales", "posts.svg"],
            ["Community Management", "community.svg"],
            ["Campañas Digitales", "campanas.svg"],
            ["Facebook Ads", "facebook-ads.svg"],
            ["Landing Pages", "landing.svg"]
        ],
        imagenMicroservicios: "mock.jpg",
        tituloMicroservicios: "Community Management",
        textoMicroservicios:
            "Por medio de la creación y promoción de contenido en las principales plataformas  digitales (Facebook, Instagram, YouTube), logramos que tu cliente ideal reconozca tu marca."
    }
};
