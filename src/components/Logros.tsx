import React, { Component } from "react";
import Helmet from "react-helmet";

import cultura from "../images/Cultura.svg";
import "../css/logros.scss";

import { Footer } from "./Footer";
import { routes } from "../routes/Routes";
import { RouteComponentProps } from "react-router";

export class Logros extends Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { clienteSeleccionado: null };
    }
    render() {
        return (
            <div id="clientes">
                <Helmet>
                    <title>{routes.Logros.title}</title>
                    <link rel="canonical" href={routes.Logros.canonical} />
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
                                        <h1>Nuestros Logros</h1>
                                        <h2>
                                            Descubre cómo logramos hacer crecer
                                            las empresas de nuestros clientes
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Aunque las empresas de nuestros clientes
                                    pueden tener objetivos similares, como
                                    aumentar sus ventas, mejorar su
                                    productividad con apps y sistemas, rediseñar
                                    su imagen o crear una comunidad en redes
                                    sociales, el público al que se dirigen es
                                    muy distinto. Por eso, cada una de nuestras
                                    estrategias es hecha a la medida y
                                    completamente personalizada. Te invitamos a
                                    conocer nuestros casos de éxito, donde te
                                    explicaremos los resultados que logramos y
                                    cómo lo hicimos posible. ¡Tu empresa puede
                                    ser la siguiente en nuestra lista!
                                </p>
                            </div>
                        </div>
                        <img src={cultura} alt="" />
                    </div>
                    <div className="clientes">
                        <div>{this.clientes}</div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    private getClientes = () => {
        let clientes = [];
        for (let image = 1; image <= 24; image++) {
            clientes.push(
                <div
                    key={image}
                    onClick={() =>
                        this.setState({ clienteSeleccionado: image })
                    }
                >
                    <img
                        alt=""
                        src={require(`../images/Logos SVG/Cliente (${image}).svg`)}
                    />
                </div>
            );
        }
        return clientes;
    };
    private readonly clientes = this.getClientes();
}
