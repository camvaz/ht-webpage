import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import { routes } from "../routes/Routes";
import ReactCompareImage from "react-compare-image";

import dweblogo from "../images/web.svg";
import seologo from "../images/seo.svg";
import designlogo from "../images/diseno.svg";
import cmlogo from "../images/pantalla.svg";
import mas from "../images/mas.svg";
import slider1 from "../images/BannerAzulXL.jpg";
import slider2 from "../images/BannerBlancoXL.jpg";
import proceso from "../images/fases.svg";
import logovertical from "../images/logo_vertical.svg";
import logohorizontal from "../images/logo_horizontal.svg";
import cafe from "../images/cafe.svg";

import Button from "./Button";
import Responsive from "./Responsive";

class Inicio extends Component {
    render() {
        const plus = (
            <div className="plus">
                <img src={mas} alt="signo de más" />
            </div>
        );
        let clientes = this.getClientes();
        return (
            <Fragment>
                <Helmet>
                    <title>{routes.Inicio.title}</title>
                    <link rel="canonical" href={routes.Inicio.canonical} />
                    <meta
                        name="description"
                        content={routes.Inicio.description}
                    />
                </Helmet>
                <section id="slider">
                    <ReactCompareImage
                        leftImage={slider1}
                        rightImage={slider2}
                        sliderLineColor={"transparent"}
                    />
                </section>
                <section id="servicios">
                    <div>
                        <h2>Servicios</h2>
                        <p>
                            Tenemos todo lo necesario para hacer de tu negocio
                            el mejor:{" "}
                        </p>
                        <div className="servicios">
                            <div>
                                <img src={dweblogo} alt="" />
                                <h3>
                                    Desarrollo <br /> Web
                                </h3>
                            </div>
                            {plus}
                            <div>
                                <img src={seologo} alt="" />
                                <h3>SEO</h3>
                            </div>
                            {plus}
                            <div>
                                <img src={designlogo} alt="" />
                                <h3>
                                    Diseño <br /> gráfico
                                </h3>
                            </div>
                            {plus}
                            <div>
                                <img src={cmlogo} alt="" />
                                <h3>
                                    Community <br /> management
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={"proceso"}>
                    <div>
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
                    </div>
                </section>
                <section id={"casos-de-exito"}>
                    <div>
                        <h2>Nuestros casos de éxito</h2>
                        <Button action={routes.Logros.link} color={"blanco"}>
                            Echar un vistazo
                        </Button>
                    </div>
                </section>
                <section id={"clientes"}>
                    <div>
                        <h2>Ellos confían en nosotros</h2>
                        <p>Nuestros clientes conocen nuestro trabajo</p>
                    </div>
                    <div>{clientes}</div>
                </section>
                <section id="inicia-tu-proyecto">
                    <div>
                        <h2>¿Estás listo?</h2>
                        <p>Hagamos algo grande juntos</p>
                        <Button
                            action={"/inicia-tu-proyecto"}
                            color={"rojo"}
                            tamano={"large"}
                        >
                            Inicia tu proyecto
                        </Button>
                    </div>
                    <img src={logovertical} alt="" />
                </section>
                <section id="contacto">
                    <div id={"cafe"}>
                        <div>
                            <div>
                                <h2>¡Tomémos un café!</h2>
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
                    <footer>
                        <div id={"footer-site-map"}>
                            <img src={logohorizontal} alt="" />
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
                            <div></div>
                        </div>
                        <hr />
                        <div className={"copyright"}>
                            <p>Copyright</p>
                        </div>
                    </footer>
                </section>
            </Fragment>
        );
    }

    private getClientes = () => {
        let clientes = [];
        for (let image = 1; image <= 24; image++) {
            clientes.push(
                <div key={image}>
                    <img
                        style={{ height: "50px" }}
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
