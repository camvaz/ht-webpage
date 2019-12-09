import React, { Component } from "react";
import Helmet from "react-helmet";

import logovertical from "../images/logo_vertical.svg";
import "../css/servicio.scss";

import { Footer } from "./Footer";
import { routes } from "../routes/Routes";
import { RouteComponentProps } from "react-router";
import Button from "./Button";

export class Servicio extends Component<RouteComponentProps> {
    render() {
        const servicio = (this.props.match.params as any).servicio as string;
        const img = routes[servicio].showedImage;
        const imgPrincipal = routes[servicio].imagenMicroservicios;
        const logo = routes[servicio].logo;
        return (
            <div id="servicio">
                <Helmet>
                    <title>{routes[servicio].title}</title>
                    <link rel="canonical" href={routes[servicio].canonical} />
                    <meta
                        name="description"
                        content={routes[servicio].description}
                    />
                </Helmet>
                <section className="definicion-servicio">
                    <div
                        className={"header-servicio"}
                        style={
                            routes[servicio].name === "Desarrollo Web"
                                ? { paddingRight: 0 }
                                : {}
                        }
                    >
                        <div className={"flex-vertical-centered"}>
                            <div>
                                <div>
                                    <img
                                        src={require(`../images/${logo}`)}
                                        alt=""
                                    />
                                    <div>
                                        <h1>{routes[servicio].name}</h1>
                                        <h2>{routes[servicio].subtitulo}</h2>
                                    </div>
                                </div>
                                <p>{routes[servicio].description}</p>
                            </div>
                        </div>
                        <img
                            src={require(`../images/Servicios/${img}`)}
                            alt=""
                            style={
                                routes[servicio].name === "Desarrollo Web"
                                    ? { marginRight: 0 }
                                    : {}
                            }
                        />
                    </div>
                    <div className="microservicios">
                        <div className="principal">
                            <img
                                src={require(`../images/Servicios/${imgPrincipal}`)}
                                alt=""
                            />
                            <div>
                                <h2>{routes[servicio].tituloMicroservicios}</h2>
                                <p>{routes[servicio].textoMicroservicios}</p>
                            </div>
                        </div>
                        {routes[servicio].microservicios.map(
                            (microservicio: any) => {
                                return (
                                    <div
                                        className="microservicio"
                                        key={microservicio[0]}
                                    >
                                        <img
                                            src={require(`../images/Servicios/${microservicio[1]}`)}
                                            alt=""
                                        />
                                        <h2>{microservicio[0]}</h2>
                                    </div>
                                );
                            }
                        )}
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
                </section>
                <Footer />
            </div>
        );
    }
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
