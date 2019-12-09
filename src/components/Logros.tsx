import React, { Component } from "react";
import Helmet from "react-helmet";

import logros from "../images/logros.svg";
import logovertical from "../images/logo_vertical.svg";
import "../css/logros.scss";

import { Footer } from "./Footer";
import { routes } from "../routes/Routes";
import { RouteComponentProps } from "react-router";
import { clientPairs, clientPairsWeb } from "../constants/constants";
import Button from "./Button";

export class Logros extends Component<RouteComponentProps, any> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            clienteSeleccionado: "laescuadra",
            webSeleccionada: "https://laescuadra.mx/",
            activo: 23
        };
    }
    render() {
        const clientes = this.getClientes();
        return (
            <div id="clientes">
                <Helmet>
                    <title>{routes.Logros.title}</title>
                    <link rel="canonical" href={routes.Logros.canonical} />
                    <meta
                        name="description"
                        content={routes.Logros.description}
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
                        <img src={logros} alt="" />
                    </div>
                    <div className="clientes">
                        <div>{clientes}</div>
                    </div>
                    {this.state.clienteSeleccionado && (
                        <div className={"cliente-container"}>
                            <div>
                                <img
                                    src={require(`../images/Logros/${this.state.clienteSeleccionado}/logo.svg`)}
                                    alt=""
                                    className="logo"
                                />
                                <img
                                    src={require(`../images/Logros/${this.state.clienteSeleccionado}/1.jpg`)}
                                    alt=""
                                    className="foto"
                                />
                            </div>
                            <div>
                                <img
                                    src={require(`../images/Logros/${this.state.clienteSeleccionado}/2.jpg`)}
                                    alt=""
                                    className="foto"
                                />
                            </div>
                            <div>
                                <img
                                    src={require(`../images/Logros/${this.state.clienteSeleccionado}/3.jpg`)}
                                    alt=""
                                    className="foto"
                                />
                            </div>
                            <div className={"visita"}>
                                <a href={this.state.webSeleccionada}>
                                    <h2>Visita el sitio: </h2>
                                    <p>{this.state.webSeleccionada}</p>
                                </a>
                            </div>
                            <div className="estas-listo">
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
                            </div>
                        </div>
                    )}
                </section>
                <Footer />
            </div>
        );
    }

    private getClientes = () => {
        let clientes = [];
        for (let image = 1; image <= 24; image++) {
            const activo = image - 1 === this.state.activo ? "activo" : "";
            clientes.push(
                <div
                    className={`marcas-container ${activo}`}
                    key={image}
                    onClick={() =>
                        this.setState({
                            clienteSeleccionado: clientPairs[image - 1],
                            webSeleccionada: clientPairsWeb[image - 1],
                            activo: image - 1
                        })
                    }
                >
                    <img
                        alt=""
                        src={require(`../images/Logos SVG/Cliente (${image}).svg`)}
                        className="gris"
                    />
                    <img
                        alt=""
                        className="color"
                        src={require(`../images/Logos SVG/Cliente (${image})-color.svg`)}
                    />
                </div>
            );
        }
        return clientes;
    };
}
