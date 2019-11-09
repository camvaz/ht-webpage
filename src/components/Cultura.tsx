import React, { Component } from "react";
import Helmet from "react-helmet";

import cultura from "../images/Cultura.svg";
import "../css/cultura.scss";

import { Footer } from "./Footer";
import { routes } from "../routes/Routes";
import { RouteComponentProps } from "react-router";

export class Cultura extends Component<RouteComponentProps> {
    render() {
        return (
            <div id="cultura">
                <Helmet>
                    <title>{routes.Cultura.title}</title>
                    <link rel="canonical" href={routes.Cultura.canonical} />
                    <meta
                        name="description"
                        content={routes.Cultura.description}
                    />
                </Helmet>
                <section className="definicion-servicio">
                    <div className={"header-servicio"}>
                        <div className={"flex-vertical-centered"}>
                            <div>
                                <div>
                                    <div>
                                        <h1>Nuestra Cultura</h1>
                                        <h2>
                                            Quiénes somos y cuál es nuestra
                                            filosofía
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Somos una agencia digital, joven y
                                    multidisciplinaria, especializada en diseño,
                                    programación y marketing, que ayuda a las
                                    empresas (como la tuya) en la solución de
                                    sus problemas de imagen, comunicación,
                                    productividad y ventas. Nuestros 3 años de
                                    trayectoria y el crecimiento de cada cliente
                                    nos han ayudado a identificar y mejorar las
                                    estrategias que implementamos para dar
                                    mejores resultados. Nuestra filosofía es la
                                    mejora contínua, con lo que nos aseguramos
                                    de entregar mejores productos y servicios
                                    con cada proyecto. Sabemos qué tan
                                    importante es tu empresa y la inversión por
                                    hacerla crecer, por eso nos hacemos parte de
                                    ella y trabajamos hasta conseguir tus
                                    objetivos. ¡Confía en nosotros y lleva tu
                                    proyecto al siguiente nivel!
                                </p>
                            </div>
                        </div>
                        <img src={cultura} alt="" />
                    </div>
                    <div className="mision-vision">
                        <div>
                            <h2>Misión</h2>
                            <p>
                                Hacer crecer las empresas de nuestros clientes
                                con nuestras habilidades de diseño, desarrollo y
                                marketing, así como con las herramientas y
                                estrategias digitales más funcionales. Sabemos
                                que al ayudar a nuestros clientes a alcanzar sus
                                objetivos, también logramos los nuestros.
                            </p>
                        </div>
                        <div>
                            <h2>Visión</h2>
                            <p>
                                Consolidarnos a nivel local (Puebla) y nacional
                                (México) como una de las mejores empresas en
                                nuestro sector, diversificando nuestros
                                servicios de acuerdo con las necesidades de
                                nuestros clientes.
                            </p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
