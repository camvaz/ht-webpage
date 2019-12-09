import React, { Component } from "react";
import Helmet from "react-helmet";
import { routes } from "../routes/Routes";
import ReactCompareImage from "react-compare-image";
import IntersectionVisible from "react-intersection-visible";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../css/principal.scss";

import dweblogo from "../images/web.svg";
import seologo from "../images/seo.svg";
import designlogo from "../images/diseno.svg";
import cmlogo from "../images/pantalla.svg";
import mas from "../images/mas.svg";
import slider1 from "../images/BannerAzulXL.jpg";
import slider2 from "../images/BannerBlancoXL.jpg";
import slider1M from "../images/BannerAzulM.jpg";
import slider2M from "../images/BannerBlancoM.jpg";
import slider1S from "../images/BannerAzulS.jpg";
import slider2S from "../images/BannerBlancoS.jpg";
import proceso from "../images/fases.svg";
import logovertical from "../images/logo_vertical.svg";
import logohorizontal from "../images/logo_horizontal.svg";
import cafe from "../images/cafe.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";
import behance from "../images/behance.svg";
import linkedin from "../images/linkedin.svg";

import Button from "./Button";
import { Desktop, Mobile, Tablet, TabletandMobile } from "./Responsive";

export interface IInicioState {
    activeTab: number;
    sections: string[];
}

class Inicio extends Component<any, IInicioState> {
    serviciosRef: any;
    constructor(props: any) {
        super(props);
        this.serviciosRef = React.createRef();
        this.state = {
            activeTab: 0,
            sections: [
                "slider",
                "servicios",
                "proceso",
                "casos-de-exito",
                "clientes",
                "inicia-tu-proyecto",
                "contacto"
            ]
        };
    }

    render() {
        const plus = (
            <div className="plus">
                <img src={mas} alt="signo de más" />
            </div>
        );
        const clientes = this.getClientes();
        const listItems = this.state.sections.map((section, tabs) => {
            return (
                <AnchorLink key={tabs} href={`#${section}`}>
                    <li
                        className={`
                            ${this.state.activeTab === tabs ? "active" : ""} 
                            ${tabs === 1 || tabs === 2 ? "red" : ""}
                            `}
                        onClick={() => this.changeActiveTab(tabs)}
                    />
                </AnchorLink>
            );
        });
        return (
            <div id={"inicio"}>
                <Helmet>
                    <title>{routes.Inicio.title}</title>
                    <link rel="canonical" href={routes.Inicio.canonical} />
                    <meta
                        name="description"
                        content={routes.Inicio.description}
                    />
                </Helmet>
                <ol className={"sections-map"}>{listItems}</ol>
                <IntersectionVisible onShow={() => this.changeActiveTab(0)}>
                    <section id="slider">
                        <Desktop>
                            <ReactCompareImage
                                leftImage={slider1}
                                rightImage={slider2}
                                sliderLineColor={"transparent"}
                            />
                        </Desktop>
                        <Tablet>
                            <ReactCompareImage
                                leftImage={slider1M}
                                rightImage={slider2M}
                                sliderLineColor={"transparent"}
                            />
                        </Tablet>
                        <Mobile>
                            <ReactCompareImage
                                leftImage={slider1S}
                                rightImage={slider2S}
                                sliderLineColor={"transparent"}
                            />
                        </Mobile>
                    </section>
                </IntersectionVisible>
                <section id="servicios" ref={this.serviciosRef}>
                    <IntersectionVisible onShow={() => this.changeActiveTab(1)}>
                        <h2>Servicios</h2>
                        <p>¿Cómo te podemos ayudar a mejorar tu empresa?</p>
                        <div className="servicios">
                            <a href="/servicios/desarrollo-web">
                                <div>
                                    <img src={dweblogo} alt="" />
                                    <h3>
                                        Desarrollo <br /> Web
                                    </h3>
                                </div>
                            </a>
                            {plus}
                            <a href="/servicios/seo-sem">
                                <div>
                                    <img src={seologo} alt="" />
                                    <h3>SEO/SEM</h3>
                                </div>
                            </a>
                            <Desktop>{plus}</Desktop>
                            <a href="/servicios/diseno-grafico">
                                <div>
                                    <img src={designlogo} alt="" />
                                    <h3>
                                        Diseño <br /> gráfico
                                    </h3>
                                </div>
                            </a>
                            {plus}

                            <a href="/servicios/community-management">
                                <div>
                                    <img src={cmlogo} alt="" />
                                    <h3>
                                        Community <br /> management
                                    </h3>
                                </div>
                            </a>
                        </div>
                    </IntersectionVisible>
                </section>
                <section id={"proceso"}>
                    <IntersectionVisible onShow={() => this.changeActiveTab(2)}>
                        <div>
                            <h2>
                                ¿Cómo lo <br /> hacemos posible?
                            </h2>
                            <p>
                                Creamos una metodología que te garantiza el
                                mejor producto.
                            </p>
                        </div>
                        <img src={proceso} alt="" />
                    </IntersectionVisible>
                </section>
                <section id={"casos-de-exito"}>
                    <IntersectionVisible onShow={() => this.changeActiveTab(3)}>
                        <h2>Nuestros casos de éxito</h2>
                        <Button action={routes.Logros.link} color={"blanco"}>
                            Echar un vistazo
                        </Button>
                    </IntersectionVisible>
                </section>
                <section id={"clientes"}>
                    <IntersectionVisible onShow={() => this.changeActiveTab(4)}>
                        <div>
                            <h2>Ellos ya confiaron en nosotros</h2>
                            <p>
                                ¡Déjanos ser parte de tu éxito! / ¡Se parte de
                                nuestros casos de éxito! / ¡Haz crecer tu
                                empresa como ellos!
                            </p>
                        </div>
                        <div>{clientes}</div>
                    </IntersectionVisible>
                </section>
                <Desktop>
                    <section id="inicia-tu-proyecto">
                        <IntersectionVisible
                            onShow={() => this.changeActiveTab(5)}
                        >
                            <div>
                                <h2>¿Quieres que tu empresa crezca?</h2>
                                <p>
                                    Trabaja con nosotros para alcanzar tus
                                    objetivos
                                </p>
                                <Button
                                    action={"/inicia-tu-proyecto"}
                                    color={"rojo"}
                                    tamano={"large"}
                                >
                                    Inicia tu proyecto
                                </Button>
                            </div>
                            <img src={logovertical} alt="" />
                        </IntersectionVisible>
                    </section>
                </Desktop>

                <TabletandMobile>
                    <section id="inicia-tu-proyecto">
                        <IntersectionVisible
                            onShow={() => this.changeActiveTab(5)}
                        >
                            <div>
                                <h2>¿Quieres que tu empresa crezca?</h2>
                                <p>
                                    Trabaja con nosotros para alcanzar tus
                                    objetivos
                                </p>
                            </div>

                            <div>
                                <img src={cafe} alt="Tasa de café" />
                                <h2>¡Te invitamos un café!</h2>
                                <p>Contáctanos</p>
                                <a href="mailto: hola@headtag.mx">
                                    hola@headtag.mx
                                </a>
                                <br />
                                <a href="tel: +52 1 222 478 8138">
                                    +52 1 222 478 8138
                                </a>
                            </div>
                        </IntersectionVisible>
                    </section>
                </TabletandMobile>

                <section id="contacto">
                    <IntersectionVisible onShow={() => this.changeActiveTab(6)}>
                        <Desktop>
                            <div id={"cafe"}>
                                <div>
                                    <div>
                                        <h2>¡Te invitamos un café!</h2>
                                        <p>Contáctanos</p>
                                        <a href="mailto: hola@headtag.mx">
                                            hola@headtag.mx
                                        </a>
                                        <br />
                                        <a href="tel: +52 1 222 478 8138">
                                            +52 1 222 478 8138
                                        </a>
                                    </div>
                                    <img src={cafe} alt="Tasa de café" />
                                </div>
                            </div>
                        </Desktop>
                        <footer>
                            <div id={"footer-site-map"}>
                                <Desktop>
                                    <img src={logohorizontal} alt="" />
                                </Desktop>
                                <div>
                                    <h2>Servicios</h2>
                                    <a href="/servicios/desarrollo-web">
                                        Desarrollo Web
                                    </a>
                                    <a href="/servicios/seo-sem">SEO / SEM</a>
                                    <a href="/servicios/diseno-grafico">
                                        Diseño Gráfico
                                    </a>
                                    <a href="/servicios/community-management">
                                        Community Management
                                    </a>
                                    <a href="/servicios/marketing-digital">
                                        Marketing Digital
                                    </a>
                                </div>
                                <div>
                                    <h2>Logros</h2>
                                    <a href="/logros/nuestros-clientes">
                                        Nuestros clientes
                                    </a>
                                    <a href="/logros/casos-de-exito">
                                        Casos de éxito
                                    </a>
                                </div>
                                <div>
                                    <h2>Cultura</h2>
                                    <a href="/cultura/nosotros">Nosotros</a>
                                    <a href="/cultura/mision">Misión</a>
                                    <a href="/cultura/vision">Visión</a>
                                    <a href="/cultura/valores">Valores</a>
                                </div>
                                <div>
                                    <h2>Blog</h2>
                                    <a href="/blog">Artículos de interés</a>
                                </div>
                                <div className={"social"}>
                                    <a href="https://www.facebook.com/headtagmx/">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                    <a href="https://www.instagram.com/headtagmx/">
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                    <a href="https://web.whatsapp.com/send?phone=522223060900&text=&source=&data=%23">
                                        <img src={whatsapp} alt="whatsapp" />
                                    </a>
                                    <a href="https://www.behance.net/mxheadtag">
                                        <img src={behance} alt="behance" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/headtagmx/">
                                        <img src={linkedin} alt="linkedin" />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className={"copyright"}>
                                <p>Copyright</p>
                            </div>
                        </footer>
                    </IntersectionVisible>
                </section>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, this.serviciosRef.current.offsetTop);
    }

    private changeActiveTab = (tab: number) => {
        this.setState({ activeTab: tab });
    };

    private getClientes = () => {
        let clientes = [];
        for (let image = 1; image <= 24; image++) {
            clientes.push(
                <div key={image}>
                    <img
                        alt=""
                        src={require(`../images/Logos SVG/Cliente (${image}).svg`)}
                    />
                </div>
            );
        }
        return clientes;
    };
}

export default Inicio;
